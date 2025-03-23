import { AnimatedTitle } from "@/components/AnimatedTitle";
import faq1Image from '@/assets/images/help/faq1.svg';
import faq2Image from '@/assets/images/help/faq2.svg';
import faq3Image from '@/assets/images/help/faq3.svg';
import nocodeToolImage from '@/assets/images/tools/nocode.svg';
import mcopilotToolImage from '@/assets/images/tools/mcopilot.svg';
import cursorToolImage from '@/assets/images/tools/cursor.svg';
import onlookToolImage from '@/assets/images/tools/onlook.svg';
import v0ToolImage from '@/assets/images/tools/v0.svg';

export const Help = () => {
  return (
    <div id="SixthScreen" className="relative w-full h-[100vh] flex flex-col items-center">
      {/* 1.标题 */}
      <div className="w-full h-[224px] flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 比赛帮助 }" />
      </div>

      {/* 2.内容 */}
      <div className="w-[1300px] px-6 mt-5 grid grid-cols-2 gap-12">
        {/* 左列：常见问题 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-normal text-white">常见问题</h3>
          <div className="space-y-3">
            <img
              src={faq1Image}
              alt="FAQ Question 1"
              className="w-full rounded-[20px] border border-white/20"
            />
            <img
              src={faq2Image}
              alt="FAQ Question 2"
              className="w-full rounded-[20px] border border-white/20"
            />
            <img
              src={faq3Image}
              alt="FAQ Question 3"
              className="w-full rounded-[20px] border border-white/20"
            />
          </div>
        </div>

        {/* 右列：推荐工具和技术加油站 */}
        <div className="space-y-12">
          {/* 推荐工具 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-normal text-white">推荐工具</h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                { name: 'NoCode', url: 'https://nocode.sankuai.com/', image: nocodeToolImage },
                { name: 'MCopilot', url: 'https://mcopilot.sankuai.com/', image: mcopilotToolImage },
                { name: 'Cursor', url: 'https://www.cursor.com/cn', image: cursorToolImage },
                { name: 'Onlook', url: 'https://onlook.com/', image: onlookToolImage },
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
          </div>

          {/* 技术加油站 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-normal text-white">技术加油站</h3>
            <div className="space-y-4">
              {[
                {
                  text: 'NoCode使用手册',
                  url: 'https://km.sankuai.com/collabpage/2702228870'
                },
                {
                  text: 'NoCde实践案例与使用技巧',
                  url: 'https://km.sankuai.com/collabpage/2702637865'
                },
                {
                  text: 'AI产品设计工具',
                  url: 'https://km.sankuai.com/collabpage/2703705501?quote-id=2703705501--165cb1ee-f012-43d2-94c5-1b7e7e970606&discussion-id=1892876219356745736&comment-id=1892876219369250829'
                }
              ].map((doc, i) => (
                <a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#D4FC82] hover:text-[#e5ffa3] transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
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
                  <span className="text-base font-medium">{doc.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 