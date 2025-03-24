import { AnimatedTitle } from "@/components/AnimatedTitle";
import nocodeToolImage from '@/assets/images/tools/nocode.svg';
import mcopilotToolImage from '@/assets/images/tools/mcopilot.svg';
import cursorToolImage from '@/assets/images/tools/cursor.svg';
import onlookToolImage from '@/assets/images/tools/onlook.svg';
import v0ToolImage from '@/assets/images/tools/v0.svg';
import qrcodeImage from '@/assets/images/qrcode.png';

// FAQ 卡片组件
const FAQCard = ({ question, answer }) => {
  return (
    <div className="w-[560px] h-fit rounded-[20px] opacity-100
      flex flex-col px-[24px] pt-[18px] pb-[28px] gap-[6px] 
      box-border border border-white/30">

      <h4 className="w-full h-fit opacity-100
        font-['PingFang_SC'] text-base font-semibold leading-[36px]
        text-white">
        Q：{question}
      </h4>

      <p className="w-full h-fit opacity-100
        font-['PingFang_SC'] text-base font-normal leading-6
        text-white/60">
        {answer}
      </p>
      
    </div>
  );
};

export const Help = () => {
  return (
    <section id="help" className="w-full h-[80vh] min-h-[840px] flex flex-col items-center justify-start py-10">      
      {/* 分割线 */}
      <div className="w-[100vw] h-[1px] mb-48 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="w-[1300px] px-6 mt-5 grid grid-cols-2 gap-16">
        {/* 左列：常见问题 */}
        <div className="space-y-6">

          <div className="w-[160px] h-[36px] flex items-end justify-center pb-0">
            <AnimatedTitle text="{ 常见问题 }" className="text-[28px]" />
          </div>

          <div className="flex flex-col gap-4">
            <FAQCard 
              question="有些技术上的操作有门槛（如修复bug），不会解决怎么办？"
              answer="我们提供 AI Coding 方向的入门教程（见右侧链接），报名后将所有报名的同学建一个交流群，有任何问题都可以在群里提问，专业（技术+设计）同学会回答并提供技术支持。"
            />
            <FAQCard 
              question="是不是必须上线？"
              answer="不是必须，交付可交互的demo即可，但上线部署成功会赢得更多票数哦，本次活动主要是鼓励大家多多尝试 AI Coding，我们更想看到，你如何巧妙、深入、高频、大量的用 AI 实现创意，产生了值得与他人分享的经验和知识。"
            />
          </div>
        </div>

        {/* 右列：推荐工具和技术加油站 */}
        <div className="space-y-12 flex flex-col gap-8">
          {/* 推荐工具 */}
          <div className="space-y-6">

            <div className="w-[160px] h-[36px] flex items-end justify-center pb-0">
              <AnimatedTitle text="{ 推荐工具 }" className="text-[28px]" />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {[
                { name: 'NoCode', url: 'https://nocode.sankuai.com/', image: nocodeToolImage },
                // { name: 'MCopilot', url: 'https://mcopilot.sankuai.com/', image: mcopilotToolImage },
                { name: 'Cursor', url: 'https://www.cursor.com/cn', image: cursorToolImage },
                // { name: 'Onlook', url: 'https://onlook.com/', image: onlookToolImage },
                { name: 'V0', url: 'https://v0.dev/', image: v0ToolImage }
              ].map((tool, i) => (
                <div key={i} className="text-center">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full rounded-[20px] transition-all duration-200 
                        group-hover:ring-2 group-hover:ring-white
                        active:brightness-80"
                    />
                    <span className="block mt-3 text-white">{tool.name}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="flex gap-8 ">
              {[
                {
                  text: 'NoCode使用手册',
                  url: 'https://km.sankuai.com/collabpage/2702228870'
                },
                {
                  text: 'NoCode实践案例与使用技巧',
                  url: 'https://km.sankuai.com/collabpage/2702637865'
                },
                
              ].map((doc, i) => (
                <a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white hover:text-[#D4FC82] transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span className="text-base font-light">{doc.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 联系我们 */}
          <div className="space-y-0">

            <div className="w-[160px] h-[36px] flex items-end justify-start pb-6">
              <AnimatedTitle text="{ 联系我们 }"className="text-[28px]"/>
            </div>

            <div className="flex items-start gap-6">
              <a href="https://applink.neixin.cn/profile?gid=69302878933" target="_blank" rel="noopener noreferrer">
                <img 
                  src={qrcodeImage} 
                  alt="设计Coding群二维码"
                  className="w-[120px] h-[120px] object-contain"
                />
              </a>
              <div className="h-fit mt-8 font-['PingFang_SC'] text-[18px] font-light leading-[26px] text-white">
                加入活动大象群<br/>
                立即参赛和反馈问题
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}; 