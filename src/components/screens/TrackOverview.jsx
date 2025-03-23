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

        {/* 开放赛道 */}
        <div 
          className="w-[905px] h-[152px] rounded-2xl opacity-100 mb-6
          flex flex-col items-start justify-start p-8 gap-2
          bg-gradient-to-r from-[rgba(202,255,94,0.15)] to-transparent"
        >
          {/* title */}
          <div className="flex items-center gap-2">
            {/* 图标 */}
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10,5C10,2.238,7.762,0,5,0C2.238,0,0,2.238,0,5C0,7.76,2.238,10,5,10C2.238,10,0,12.24,0,15C0,17.762,2.238,20,5,20C7.762,20,10,17.762,10,15C10,17.762,12.238,20,15,20C17.762,20,20,17.762,20,15C20,12.238,17.762,10,15,10C17.762,10,20,7.762,20,5C20,2.238,17.762,0,15,0C12.238,0,10,2.238,10,5Z" 
                  fill="url(#gradient)" transform="rotate(180 10 10)"/>
                <defs>
                  <linearGradient id="gradient" x1="20" y1="10" x2="10" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5FFDF"/>
                    <stop offset="1" stopColor="#D4FC82"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 文字 */}
            <div className="text-[22px] font-semibold leading-[36px] bg-gradient-to-r from-[#CAFF5E] to-[#EFFFCD] bg-clip-text text-transparent">
              为美好生活而设计
            </div>

            {/* tag */}
            <div className="h-[30px] rounded-[6px] px-[8px] py-[4px] border border-[#CAFF5E] flex items-center justify-center">
              <span className="text-[14px] font-medium text-[#CAFF5E]">
                开放赛道
              </span>
            </div>
          </div>
          
          <div className="w-full flex-auto font-['PingFang_SC'] text-[14px] font-light leading-[22px] text-white/80">
            以“为美好生活而设计”为主题，做任何你想做的项目，比如解决某个用户痛点、优化现有或潜在的业务痛点、帮工作提效的小工具等，也可以是休闲小游戏、待办小插件、收集设计灵感素材的网站等，总之，开放赛道欢迎一切有想法有创意的项目！
          </div> 
        </div>

        {/* 命题赛道 */}
        <div className="relative w-fit h-fit">
          
          {/* 卡片容器 */}
          <div className="w-fit h-fit grid grid-cols-3 grid-rows-2 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div 
                key={i}
                className={`
                  w-[400px] h-fit opacity-100 flex flex-col p-0 gap-2 rounded-lg
                  bg-white/5
                  hover:bg-gradient-to-r hover:from-[rgba(255,151,212,0.15)] hover:to-transparent
                `}
              >
                {/* 卡片内容 */}
                <div className="p-4">
                  {/* title */}
                  <div className="flex items-center gap-4">
                    <div className="text-[18px] font-['PingFang_SC'] font-semibold leading-[36px] text-white z-0">
                      命题 {i + 1}
                    </div>
                    {/* tag */}
                    <div className="h-[30px] rounded-[6px] px-[8px] py-[4px] border border-[#FF97D4] flex items-center justify-center">
                      <span className="text-[14px] font-medium text-[#FF97D4]">
                        命题赛道
                      </span>
                    </div>
                  </div>

                  {/* 设计中心 */}
                  <div className="text-[14px] font-['PingFang_SC'] font-medium leading-[28px] text-white/80 z-[1]">
                    设计中心
                  </div>

                  {/* 描述 */}
                  <p className="font-['PingFang_SC'] text-[14px] font-normal leading-[22px] text-white/60 z-[2] mt-2">卡片描述内容...</p>
                </div>
              </div>
            ))}
          </div>

          {/* 页码控制区 */}
          <div className="relative w-full flex items-center justify-center gap-4 mt-4">
            {/* 左箭头 */}
            <button className="w-8 h-8 rounded-full hover:bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-white">
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </button>

            {/* 页码指示器 */}
            <div className="flex gap-2">
              {Array(4).fill(0).map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer"
                />
              ))}
            </div>

            {/* 右箭头 */}
            <button className="w-8 h-8 rounded-full hover:bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-white">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </button>
          </div>
        </div>

        
      </div>

      {/* 自定义滚动条样式 */}
      {/* <style>{`
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
      `}</style> */}
    </div>
  );
}; 