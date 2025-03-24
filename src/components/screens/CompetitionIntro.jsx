import { AnimatedTitle } from "@/components/AnimatedTitle";
import highlightsImage from '@/assets/images/intro/highlights.svg';
import requirementsImage from '@/assets/images/intro/requirements.svg';
import deliverablesImage from '@/assets/images/intro/deliverables.svg';

export const CompetitionIntro = ({ onRegisterClick }) => {
  return (
    <section id="competition-intro" className="w-full h-[65vh] min-h-[840px] flex flex-col items-center justify-start py-10">
      {/* 1.标题 */}
      <div className="w-full h-[224px] flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 大赛介绍 }" />
      </div>

      {/* 2.说明内容 */}
      <div className=" flex flex-col items-center gap-4 pb-10 text-base font-normal text-white text-center leading-[2]">
        设计师们，你是否曾经在方案落地时因代码难以实现而举步维艰？
        <br />
        现在，AI Coding 能助你一臂之力！你无需精通复杂的代码知识，只需要用自然语言输入想法，贴心的编程助手就能帮设计师快速生成代码和页面，网页、App、插件、动效… 都帮你轻松搞定。
        <br />
        快来参加设计部 AI Coding 活动，你会发现设计与代码实现之间的鸿沟可以被跨越，
        <br />
        👉 抓住机会，加入我们，开启设计新旅程！
      </div>

      {/* 3.卡片行 */}
      <div id="card-container" className="grid grid-cols-3 gap-6 group w-[1240px]">
        {/* 卡一: 活动亮点 */}
        <div className="relative w-[400px] pr-0">
          <img 
            src={highlightsImage}
            alt="活动亮点"
            className="w-full object-contain bg-[#1a1a1a] rounded-xl origin-bottom-right -rotate-6 group-hover:rotate-0 transition-transform duration-300"
          />
        </div>

        {/* 卡二: 参赛要求 */}
        <div className="relative w-[400px] pr-0">
          <img 
            src={requirementsImage}
            alt="参赛要求"
            className="w-[400px] object-contain bg-[#1a1a1a] rounded-xl"
          />
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onRegisterClick();
            }}
            className="absolute bottom-[52px] left-[80px] text-[#D4FC82] hover:text-[#e5ffa3] transition-colors duration-200 flex items-center gap-1 bg-[#202020] h-[24px] rounded"
          >
            立即报名
            <span className="text-base leading-none translate-y-[1px]">→</span>
          </a>
        </div>

        {/* 卡三: 产出要求 */}
        <div className="relative w-[400px] pr-0 origin-bottom-left rotate-6 group-hover:rotate-0 transition-transform duration-300">
          <img 
            src={deliverablesImage}
            alt="产出要求"
            className="w-full object-contain bg-[#1a1a1a] rounded-xl"
          />
          <a 
            href="https://km.sankuai.com/collabpage/2704898611"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-[48px] left-[24px] text-[#D4FC82] hover:text-[#e5ffa3] transition-colors duration-200 flex items-center gap-1 bg-[#202020] h-[24px] rounded"
          >
            参考链接
            <span className="text-base leading-none translate-y-[1px]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}; 