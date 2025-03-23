import { AnimatedTitle } from "@/components/AnimatedTitle";
import highlightsImage from '@/assets/images/intro/highlights.svg';
import requirementsImage from '@/assets/images/intro/requirements.svg';
import deliverablesImage from '@/assets/images/intro/deliverables.svg';

export const CompetitionIntro = ({ onRegisterClick }) => {
  return (
    <div id="SecondScreen" className="w-[1440px] h-[100vh] relative flex flex-col items-center">
      {/* 1.标题 */}
      <div className="w-full h-[224px] flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 大赛说明 }" />
      </div>

      {/* 2.说明内容 */}
      <div className="flex flex-col items-center gap-4 pb-10 text-base font-normal text-white text-center leading-[1.8]">
        设计师们，在日常工作中，你是否常常被创意落地难而困扰？
        好不容易构思出极具想象力的设计方案，
        <br />
        却因代码实现的复杂而举步维艾。
        但现在 —— AI Coding 能为你化解这些痛点！
        <br />
        本次 AI Coding 设计活动由基础研发设计中心发起，面向设计部全体设计师，快来尽情发挥你的创意吧！
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
    </div>
  );
}; 