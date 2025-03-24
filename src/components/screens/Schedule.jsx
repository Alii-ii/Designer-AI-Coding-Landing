import { AnimatedTitle } from "@/components/AnimatedTitle";
import { motion } from "framer-motion";

// 进度卡片组件
const ProgressCard = ({ title, time, description, isActive = false }) => {
  return (
    <div className="w-[265px] h-[265px] opacity-100 
      flex flex-col justify-center items-center 
      pb-8 gap-[8px]">
      {/* 菱形边框 */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        width="282.84" 
        height="282.84" 
        viewBox="0 0 282.84 282.84"
        className="absolute hover:opacity-80 transition-opacity duration-100"
      >
        <defs>
          <linearGradient 
            x1="-0.048" 
            y1="0.645" 
            x2="1.193" 
            y2="-0.186" 
            id="diamond-gradient"
          >
            <stop offset="0%" stopColor="#D4FC82" stopOpacity="1"/>
            <stop offset="98.57%" stopColor="#FF97D4" stopOpacity="1"/>
          </linearGradient>
        </defs>
        <g transform="matrix(0.7071,0.7071,-0.7071,0.7071,41.421,-100)">
          <rect 
            x="141.921" 
            y="0.5" 
            width="199" 
            height="199" 
            rx="19.5" 
            stroke={isActive ? "url(#diamond-gradient)" : "rgba(255,255,255,0.3)"}
            fillOpacity="0" 
            fill="none" 
            strokeWidth="1"
          />
        </g>
      </svg>

      {/* 进行中tag */}
      <div className={`rounded-full text-[12px]
          flex flex-col px-[12px] py-[3px] mb-1
          ${isActive ? 'bg-gradient-to-r from-[#FF97D4] via-[#D4FC82] to-[#D4FC82] opacity-100' : 'opacity-0'}`}>
            进行中
      </div>

      {/* title */}
      <div className="w-fit h-fit font-['PingFang_SC'] text-[24px] font-semibold leading-6 text-white z-[1]">
        {title}
      </div>

      {/* time */}
      <div className="w-fit h-fit font-['JetBrains_Mono_NL'] text-[24px] font-normal leading-normal tracking-[0.1em] text-[#D4FC82] z-[2] hover:opacity-80 transition-opacity duration-100">
        {time}
      </div>

      {/* 描述 */}
      <div className="w-fit h-fit font-['PingFang_SC'] text-[14px] font-normal leading-[22px] text-center text-[#FFFEFE] z-[3] whitespace-pre-line min-h-[44px]">
        {description}
      </div>

      <div className="h-[12px] opacity-0"></div>
      
    </div>
  );
};

export const Schedule = () => {
  return (
    <section id="schedule" className="w-full h-fit min-h-[840px] flex flex-col items-center justify-start mt-[15vh]">
      {/* 1.标题 */}
      <div className="w-full h-fit flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 赛程&奖项 }" />
      </div>

      {/* 2.赛程说明 */}
      <div className="w-[820px] text-base font-normal text-white text-center mx-auto mb-10">
        比赛设置 
        <span className="text-[#CAFF5E]"> 开放赛道 </span>
         和 
        <span className="text-[#FF97D4]"> 命题赛道 </span>
         ，选手可选择任选其一或二者均参加

         <div className="font-['PingFang_SC'] text-[14px] font-normal text-white/50 mt-1">
         * 命题赛道由各设计中心出题，按照提报顺序排列
         </div>
      </div>

      {/* 3.赛程详情 */}
      <div className="w-[1440px] mx-auto">
        <div className="flex justify-center -space-x-8">
          <ProgressCard 
            title="开放报名"
            time="3.24-4.3"
            description={
              <>
                活动宣讲
                <br />
                填写报名表
              </>
            }
            isActive={true}
          />
          <ProgressCard 
            title="作品征集"
            time="3.26-4.28"
            description={
              <>
                使用 AI Coding 工具
                <br />
                任选赛道创作
              </>
            }
          />
          <ProgressCard 
            title="作品评选"
            time="5.6-5.9"
            description={
              <>
                赛道独立评审
                <br />
                专业评审 + 大众评审
              </>
            }
          />
          <ProgressCard 
            title="获奖公示"
            time="5.16"
            description={
              <>
                获奖名单公示
                <br />
                优秀作品公示
              </>
            }
          />
        </div>

        {/* 赛程安排 */}
        <div className="text-center font-['PingFang_SC'] text-base font-normal leading-6 text-white leading-[2] mt-8">
          <p>开放赛道和命题赛道独立评奖，奖项设置如下：</p>
          <p>一等奖：1名 奖金 5000 元</p>
          <p>二等奖：2名 奖金 3000 元</p>
          <p>三等奖：3名 奖金 1000 元</p>
          <p className="mt-4">其他奖项：最受喜爱奖、最佳突破奖、最佳命题奖、拥抱 AI 中心奖</p>
          <p >特殊奖励：所有获奖者将得到设计部 AI 能力认证和荣誉证书</p>
        </div>
      </div>
    </section>
  );
}; 