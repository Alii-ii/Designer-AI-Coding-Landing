import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const isProdEnv = process.env.NODE_ENV === 'production';
const PUBLIC_PATH = isProdEnv ? process.env.PUBLIC_PATH + "/" + process.env.CHAT_VARIABLE : process.env.PUBLIC_PATH;
const OUT_DIR = isProdEnv ? 'build/' + process.env.CHAT_VARIABLE : 'build';

export default defineConfig({
  base: '/',
  plugins: isProdEnv ? [react()] : [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<\/head>/,
          `
          <script>
          window.onerror = function(message, source, lineno, colno, error) {
            window.parent.postMessage({
              type: 'error',
              data: {
                message: message,
                source: source, 
                lineno: lineno,
                colno: colno,
                error: error?.stack || error?.message
              }
            }, '*');
            return true;
          };
          console.error = function(...args) {
            const message = args.join(' ');
            window.parent.postMessage({
              type: 'console-error',
              data: {
                message: message,
              }
            }, '*');
            return;
          }
          </script>
          <script type="module" src="./hmr-client.js"></script>
          <script src="https://s3plus.meituan.net/mcopilot-pub/nocode-dep/html2canvas.min.js"></script>
          <script src="https://s3plus.vip.sankuai.com/static-prod01/com.sankuai.mcopilot.nocode.front-files/public/script/element-selector-script.js"></script>
          <script type="module">
          window.parent.postMessage({
              type: 'version',
              version: 1
          }, '*');
          document.addEventListener('DOMContentLoaded', () => {
              setTimeout(async () => {
                  try {
                      const element = document.getElementById('root');
                      if (!element) {
                          throw new Error('找不到 root 元素');
                      }

                      // 检查元素尺寸
                      const rect = element.getBoundingClientRect();
                      if (rect.width === 0 || rect.height === 0) {
                          throw new Error('元素尺寸为0');
                      }

                      // 等待所有图片加载完成
                      const images = element.getElementsByTagName('img');
                      await Promise.all([...images].map(img => {
                          if (img.complete) return Promise.resolve();
                          return new Promise((resolve) => {
                              img.onload = resolve;
                              img.onerror = resolve;
                          });
                      }));

                      const canvas = await html2canvas(element, {
                          scale: 2,
                          useCORS: true,
                          logging: false,
                          allowTaint: true,
                          backgroundColor: '#ffffff',
                          windowWidth: document.documentElement.offsetWidth,
                          windowHeight: document.documentElement.offsetHeight,
                          onclone: (clonedDoc) => {
                              console.log('DOM已克隆');
                          }
                      });

                      const screenshot = canvas.toDataURL('image/png');
                      console.log('截图生成完成，数据长度:', screenshot.length);

                      window.parent.postMessage({
                          type: 'screenshot_response',
                          screenshot: screenshot
                      }, '*');

                  } catch (error) {
                      window.parent.postMessage({
                          type: 'screenshot_response',
                          error: error.message
                      }, '*');
                  }
              }, 5000);
          });
          </script>
          </head>
          `
        );
      }
    }
  ],
  server: {
    port: 8082,
    host: true
  },
  build: {
    outDir: OUT_DIR,
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'lib': resolve(__dirname, 'lib')
    }
  }
});