import { AnimatedTitle } from "@/components/AnimatedTitle";
import trackDetailsImage from '@/assets/images/track/track-details.svg';

export const TrackOverview = () => {
  return (
    <div id="ThirdScreen" className="relative w-full h-[100vh] flex flex-col items-center">
      {/* 1.标题 */}
      <div className="w-full h-[224px] flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 赛道概览 }" />
      </div>

      {/* 2.赛道说明 */}
      <div className="w-[820px] text-base font-normal text-white text-center mx-auto mb-10">
        比赛设置开放赛道和命题赛道，选手可选择任选其一或二者均参加，其中开放赛道：以 "为美好生活而设计" 为方向；命题赛道由各中心根据自己的业务诉求出题，共10个命题，具体赛题请看下方清单
      </div>

      {/* 3.赛道详情 */}
      <div className="w-[1300px] mx-auto h-[500px] overflow-y-auto pr-4 custom-scrollbar relative">
        <img 
          src={trackDetailsImage}
          alt="Track Details"
          className="w-full"
        />
      </div>

      {/* 自定义滚动条样式 */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0);
          border-radius: 4px;
          transition: background-color 0.2s;
          min-height: 40px;
        }
        
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}; 