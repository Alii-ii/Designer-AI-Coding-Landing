import { AnimatedTitle } from "@/components/AnimatedTitle";
import scheduleImage from '@/assets/images/schedule/schedule.svg';

export const Schedule = () => {
  return (
    <section id="schedule" className="w-full h-[90vh] min-h-[960px] flex flex-col items-center justify-start py-24">
      {/* 1.标题 */}
      <div className="w-full h-[224px] flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 赛程安排 & 奖项 }" />
      </div>

      {/* 2.内容 */}
      <div className="w-[1440px] mx-auto">
        {/* 赛程进度 */}
        <div className="w-[1440px] mx-auto">
          <div className="w-[267px] h-[265px] opacity-100
            flex flex-col justify-center items-center 
            pb-5 gap-[6px]">
            {/* 2行描述 */}
            <div className="w-[56px] h-[24px] rounded-[598px] 
              flex flex-col px-[10px] py-[6px] gap-[10px]
              bg-gradient-to-r from-[#FF97D4] via-[#D4FC82] to-[#D4FC82]">
            </div>

            {/* 时间 */}
            <div className="w-[64px] h-[24px]">
            </div>

            {/* title */}
            <div className="w-[133px] h-[32px]">
            </div>

            {/* 进行中tag */}
            <div className="w-[70px] h-[44px]">
            </div>
          </div>
        </div>
        
        {/* 赛程安排 */}
        <div className="text-center font-['PingFang_SC'] text-base font-normal leading-6 text-white leading-[2]">
          <p>开放赛道和命题赛道独立评奖，奖项设置如下：</p>
          <p>一等奖：1名 奖金 5000 元</p>
          <p>二等奖：2名 奖金 3000 元</p>
          <p>三等奖：3名 奖金 1000 元</p>
          <p>其他奖项：最受喜爱奖、最佳突破奖、最佳命题奖、拥抱 AI 中心奖</p>
          <p>特殊奖励：所有获奖者将得到设计部 AI 能力认证和荣誉证书</p>
        </div>
      </div>
    </section>
  );
}; 