import { AnimatedTitle } from "@/components/AnimatedTitle";
import scheduleImage from '@/assets/images/schedule/schedule.svg';

export const Schedule = () => {
  return (
    <div id="FifthScreen" className="relative w-full h-[100vh] flex flex-col items-center">
      {/* 1.标题 */}
      <div className="w-full h-[224px] flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 赛程&奖项 }" />
      </div>

      {/* 2.内容 */}
      <div className="w-[1440px] mx-auto">
        <img 
          src={scheduleImage}
          alt="Competition Schedule and Awards"
          className="w-full"
        />
      </div>
    </div>
  );
}; 