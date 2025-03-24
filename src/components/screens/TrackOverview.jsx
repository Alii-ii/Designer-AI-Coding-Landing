import { AnimatedTitle } from "@/components/AnimatedTitle";
import trackDetailsImage from '@/assets/images/track/track-details.svg';
import { trackData } from '@/config/trackData';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TrackOverview = () => {
  // 根据 order 排序数据
  const sortedTrackData = [...trackData].sort((a, b) => a.order - b.order);
  
  // 分页状态
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(sortedTrackData.length / itemsPerPage);
  
  // 自动轮播定时器引用
  const timerRef = useRef(null);
  
  // 获取当前页的数据
  const currentTrackData = sortedTrackData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 处理页码变化
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 自动轮播(暂时关闭)
  useEffect(() => {
    // 清除之前的定时器
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // 暂时注释掉自动轮播逻辑
    /*
    timerRef.current = setInterval(() => {
      setCurrentPage((prevPage) => {
        if (prevPage >= totalPages) {
          return 1;
        }
        return prevPage + 1;
      });
    }, 5000);
    */

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [totalPages]);

  return (
    <section id="track-overview" className="w-full h-fit min-h-[840px] flex flex-col items-center justify-start my-[100px]">
      {/* 1.标题 */}
      <div className="w-full h-fit flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 赛道概览 }" />
      </div>

      {/* 2.赛道说明 */}
      <div className="w-[820px] text-base font-normal text-white text-center mx-auto mb-10">
        比赛设置 
        <span className="text-[#CAFF5E]"> 开放赛道 </span>
         和 
        <span className="text-[#FF97D4]"> 命题赛道 </span>
         ，选手可任选其一或二者均参加

         <div className="font-['PingFang_SC'] text-[14px] font-normal text-white/50 mt-1">
         * 命题赛道由各设计中心出题，按照提报顺序排列
         </div>
      </div>

      {/* 3.赛道详情 */}
      <div className="w-[1300px] mx-auto h-fit relative">
        {/* 开放赛道 */}
        <div 
          className="w-[890px] h-[150px] rounded-2xl opacity-100 mb-6
          flex flex-col items-start justify-start p-8 gap-2
          bg-gradient-to-r from-[rgba(202,255,94,0.15)] to-transparent cursor-pointer
          hover:bg-gradient-to-r hover:from-[rgba(202,255,94,0.2)] hover:to-transparent
          "
          onClick={() => window.open('https://km.sankuai.com/collabpage/2705312210', '_blank')}
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
            以"为美好生活而设计"为主题，做任何你想做的项目，比如解决某个用户痛点、优化现有或潜在的业务痛点、帮工作提效的小工具等，也可以是休闲小游戏、待办小插件、收集设计灵感素材的网站等，总之，开放赛道欢迎一切有想法有创意的项目！
          </div> 
        </div>

        {/* 命题赛道 */}
        <div className="relative w-fit h-[720px]">
          {/* 左箭头 */}
          <button 
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 z-10"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" className="text-white">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </button>

          {/* 卡片容器 */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl mx-auto grid grid-cols-3 gap-6 place-items-start"
            >
              {currentTrackData.map((track) => (
                <motion.div 
                  key={track.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className={`
                    w-[400px] h-fit opacity-100 flex flex-col p-0 gap-2 rounded-lg
                    bg-white/5
                    hover:bg-gradient-to-r hover:from-[rgba(255,151,212,0.15)] hover:to-transparent
                  `}
                >
                  {/* 卡片 */}
                  <div 
                    className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => window.open('https://km.sankuai.com/collabpage/2705312210', '_blank')}
                  >
                    {/* title */}
                    <div className="flex items-center gap-4">
                      <div className="text-[18px] font-['PingFang_SC'] font-semibold leading-[36px] text-white z-0">
                        {track.title}
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
                      {track.department}
                    </div>

                    {/* 描述 */}
                    <p className="font-['PingFang_SC'] text-[14px] font-normal leading-[22px] text-white/60 z-[2] mt-2">
                      {track.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* 右箭头 */}
          <button 
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 z-10"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" className="text-white">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </button>
          
          {/* 页码控制区 */}
          <div className="relative w-full flex items-center justify-center gap-4 my-8">
            {/* 页码指示器 */}
            <div className="flex gap-2 w-full justify-center">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <div 
                  key={page}
                  className={`w-24 h-1 rounded-full cursor-pointer transition-colors ${
                    currentPage === page ? 'bg-white/80' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => handlePageChange(page)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 