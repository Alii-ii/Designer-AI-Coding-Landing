// 测试热更新 - HMR Test
import { useState, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';
import { Music2, Pause } from 'lucide-react';
import posterImage from '@/assets/images/poster.svg';
import highlightsImage from '@/assets/images/intro/highlights.svg';
import requirementsImage from '@/assets/images/intro/requirements.svg';
import deliverablesImage from '@/assets/images/intro/deliverables.svg';
import trackDetailsImage from '@/assets/images/track/track-details.svg';
import caseExample1Image from '@/assets/images/case/case-example1.svg';
import caseExample2Image from '@/assets/images/case/case-example2.svg';
import caseExample3Image from '@/assets/images/case/case-example3.svg';
import caseExample4Image from '@/assets/images/case/case-example4.svg';
import caseExample5Image from '@/assets/images/case/case-example5.svg';
import caseExample6Image from '@/assets/images/case/case-example6.svg';
import scheduleImage from '@/assets/images/schedule/schedule.svg';
import faq1Image from '@/assets/images/help/faq1.svg';
import faq2Image from '@/assets/images/help/faq2.svg';
import faq3Image from '@/assets/images/help/faq3.svg';
import nocodeToolImage from '@/assets/images/tools/nocode.svg';
import mcopilotToolImage from '@/assets/images/tools/mcopilot.svg';
import cursorToolImage from '@/assets/images/tools/cursor.svg';
import onlookToolImage from '@/assets/images/tools/onlook.svg';
import v0ToolImage from '@/assets/images/tools/v0.svg';
import footerImage from '@/assets/images/footer/footer.svg';
import posterTopImage from '@/assets/images/poster-top.svg';

// 暂时注释掉不存在的图片引用
// import faq1Image from '@/assets/images/help/faq1.svg';
// import faq2Image from '@/assets/images/help/faq2.svg';
// import faq3Image from '@/assets/images/help/faq3.svg';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        {isPlaying && (
          <>
            <div className="absolute inset-0 rounded-full animate-ping-slow bg-white/20" />
            <div className="absolute inset-[-4px] rounded-full animate-ping-slower bg-white/10" />
            <div className="absolute inset-[-8px] rounded-full animate-ping-slowest bg-white/5" />
          </>
        )}
        <button
          onClick={togglePlay}
          className="relative w-[28px] h-[28px] rounded-full border-[1.5px] border-white/30 flex items-center justify-center transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Music2 className="w-4 h-4 text-white" />
          )}
        </button>
      </div>
      <audio
        ref={audioRef}
        src="/music/background-music.mp3"
        loop
      />
    </div>
  );
};

const NavBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const halfViewport = window.innerHeight / 2;
      const progress = Math.min(window.scrollY / halfViewport, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-14 z-50 w-full transition-all duration-300`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scrollProgress * 0.75})`,
        backdropFilter: `blur(${scrollProgress * 8}px)`
      }}
    >
      <div className="w-full h-full flex items-center justify-between px-6">
        <span className="text-white text-base font-semibold font-['JetBrains_Mono']">{'{ AI Coding _ 美团设计部 }'}</span>
        <MusicPlayer />
      </div>
    </nav>
  );
};

const AnchorNav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const competitionDetails = document.getElementById('competition-details');
      if (competitionDetails) {
        const rect = competitionDetails.getBoundingClientRect();
        setIsVisible(rect.top <= 0);
      }

      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed right-[4px] top-[calc(50%-100px)] z-[100] p-4"
        >
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-white text-sm transition-all duration-200
                  ${activeSection === section.id 
                    ? 'font-bold' 
                    : 'opacity-60 hover:opacity-100'}`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AnimatedTitle = ({ text }) => {
  const [direction, setDirection] = useState('left');
  const [key, setKey] = useState(0);
  const titleRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (!titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const titleCenterX = rect.left + rect.width / 2;
    setDirection(mouseX < titleCenterX ? 'left' : 'right');
    setKey(prev => prev + 1);
  };

  return (
    <div 
      ref={titleRef}
      className="w-full flex items-center justify-center cursor-default px-20"
      onMouseEnter={handleMouseEnter}
      style={{ margin: '-40px 0' }}
    >
      <h2 className="text-[36px] font-semibold text-white flex py-10">
        {text.split('').map((char, index, array) => {
          const isBracket = char === '{' || char === '}';
          const isChinese = /[\u4e00-\u9fa5]/.test(char);
          const spacingClass = isBracket ? 'mx-[12px]' : (isChinese ? 'mx-[0.5px]' : '');
          
          const delay = direction === 'left' 
            ? index * 30 
            : (array.length - 1 - index) * 30;
          
          return (
            <motion.span
              key={`${index}-${key}`}
              className={`inline-block ${spacingClass}`}
              initial={{ y: 0 }}
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: delay * 0.001,
                times: [0, 0.5, 1]
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </h2>
    </div>
  );
};

const Index = () => {
  const sections = [
    { id: 'competition-intro', title: '大赛说明', displayTitle: '{ 大赛说明 }' },
    { id: 'track-overview', title: '赛道概览', displayTitle: '{ 赛道概览 }' },
    { id: 'case-reference', title: '案例参考', displayTitle: '{ 案例参考 }' },
    { id: 'schedule', title: '赛程&奖项', displayTitle: '{ 赛程&奖项 }' },
    { id: 'help', title: '比赛帮助', displayTitle: '{ 比赛帮助 }' }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden overflow-y-hidden">
      <NavBar />
      
      {/* 首屏 */}
      <div className="relative w-full h-[1000px] overflow-hidden">
        {/* 背景部分 */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={posterImage}
            alt="Background"
            className="w-full h-full object-cover blur-2xl scale-110"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* 海报主体部分 */}
        <div className="relative h-full">
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="relative w-[2560px] h-[1000px] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 400px, black calc(100% - 400px), transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 400px, black calc(100% - 400px), transparent)'
              }}
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain"
                onLoadedData={() => console.log('视频加载成功')}
                onError={(e) => console.error('视频加载错误:', e)}
              >
                <source src="/videos/poster.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[112px] z-20 flex flex-col items-center">
              <img 
                src={posterTopImage}
                alt="Poster Top"
                className="h-[198px] mb-11"
              />
              <a 
                href="https://km.sankuai.com/collabpage/2704338587" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block h-[60px] px-8 rounded-full bg-black/30 backdrop-blur-md border-2 border-[#D4FC82] text-[#D4FC82] text-[20px] flex items-center justify-center transition-all duration-100 hover:border-[3px] hover:font-medium whitespace-nowrap"
              >
                立即报名
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="competition-details" className="w-full flex justify-center overflow-x-hidden overflow-y-hidden">
        <div className="w-[1440px] relative flex flex-col items-center">
          {/* 右侧锚点导航 */}
          <div className="fixed right-4 top-[72px] z-[100]">
        <AnchorNav sections={sections} />
          </div>

          {/* 2屏：大赛说明 */}
          <div id="competition-intro" className="relative w-full flex flex-col items-center">
            <div className="w-full h-[224px] flex items-end justify-center pb-10">
              <AnimatedTitle text={sections[0].displayTitle} />
            </div>
            {/* 大赛说明内容 */}
            <div className="flex flex-col items-center gap-4 mb-10">
              <p className="w-[820px] text-base font-normal text-white text-center">
                设计师们，在日常工作中，你是否常常被创意落地难而困扰？好不容易构思出极具想象力的设计方案，却因代码实现的复杂而举步维艾。但现在，AI Coding 能为你化解这些痛点！
              </p>
              <p className="w-[820px] text-base font-normal text-white text-center">
                本次 AI Coding 设计活动由基础研发设计中心发起，面向设计部全体设计师，快来尽情发挥你的创意吧！
              </p>
            </div>

            {/* 3卡片*/}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-3 gap-6 group">
                <div className="relative w-[400px]">
                  <img 
                    src={highlightsImage}
                    alt="活动亮点"
                    className="w-full object-contain bg-[#1a1a1a] rounded-xl origin-bottom-right -rotate-6 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="relative">
                  <img 
                    src={requirementsImage}
                    alt="参赛要求"
                    className="w-[400px] object-contain bg-[#1a1a1a] rounded-xl"
                  />
                  <a 
                    href="https://km.sankuai.com/collabpage/2704338587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-[52px] left-[80px] text-[#D4FC82] hover:text-[#e5ffa3] transition-colors duration-200 flex items-center gap-1 bg-[#202020] h-[24px] rounded"
                  >
                    报名链接
                    <span className="text-base leading-none translate-y-[1px]">→</span>
                  </a>
                </div>
                <div className="relative">
                  <div className="relative w-[400px] origin-bottom-left rotate-6 group-hover:rotate-0 transition-transform duration-300">
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
            </div>
        </div>

          {/* 3屏：赛道概览 */}
          <div id="track-overview" className="relative w-full flex flex-col items-center">
            <div className="w-full h-[224px] flex items-end justify-center pb-10">
              <AnimatedTitle text={sections[1].displayTitle} />
            </div>
            <div className="flex justify-center mb-10 w-full">
              <p className="w-[820px] text-base font-normal text-white text-center">
                比赛设置开放赛道和命题赛道，选手可选择任选其一或二者均参加，其中开放赛道：以 "为美好生活而设计" 为方向；命题赛道由各中心根据自己的业务诉求出题，共10个命题，具体赛题请看下方清单
              </p>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-[1300px]">
                <div className="h-[500px] overflow-y-auto pr-4 custom-scrollbar relative">
                  <img 
                    src={trackDetailsImage}
              alt="Track Details"
                    className="w-full"
            />
          </div>
        </div>
            </div>

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

          {/* 4屏：案例参考 */}
          <div id="case-reference" className="relative w-full flex flex-col items-center">
            <div className="w-full h-[224px] flex items-end justify-center pb-10">
              <AnimatedTitle text={sections[2].displayTitle} />
            </div>
            <div className="flex justify-center w-full">
              <div className="w-[1300px] relative">
                <div className="absolute -inset-10 bg-[#00ffbb] opacity-30 blur-[80px] z-0 animate-glow-1" />
                <div className="absolute -inset-10 bg-[#0088ff] opacity-25 blur-[100px] -translate-x-1/2 z-0 animate-glow-2" />
                <div className="absolute -inset-10 bg-[#00ffea] opacity-25 blur-[100px] translate-x-1/2 z-0 animate-glow-3" />
                <div className="grid grid-cols-3 gap-6 relative z-10">
                  {[
                    {
                      image: caseExample1Image,
                      url: 'https://km.sankuai.com/collabpage/2677633608',
                      clickable: true
                    },
                    {
                      image: caseExample2Image,
                      url: 'https://km.sankuai.com/collabpage/2704573004',
                      clickable: true
                    },
                    {
                      image: caseExample3Image,
                      url: 'https://km.sankuai.com/collabpage/2703079719',
                      clickable: true
                    },
                    {
                      image: caseExample4Image,
                      clickable: false
                    },
                    {
                      image: caseExample5Image,
                      clickable: false
                    },
                    {
                      image: caseExample6Image,
                      clickable: false
                    }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="relative group"
                    >
                      {item.clickable ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img 
                            src={item.image}
                            alt={`Case Example ${i+1}`}
                            className="w-full object-cover rounded-xl transition-all duration-200 
                              group-hover:ring-2 group-hover:ring-white
                              active:brightness-80"
                          />
                        </a>
                      ) : (
                        <img 
                          src={item.image}
                alt={`Case Example ${i+1}`}
                          className="w-full object-cover rounded-xl transition-all duration-200 
                            group-hover:ring-2 group-hover:ring-white
                            active:brightness-80"
              />
                      )}
                    </div>
            ))}
                </div>
              </div>
          </div>
        </div>

          {/* 5屏：赛程&奖项 */}
          <div id="schedule" className="relative w-full flex flex-col items-center">
            <div className="w-full h-[224px] flex items-end justify-center pb-10">
              <AnimatedTitle text={sections[3].displayTitle} />
            </div>
            <div className="flex justify-center w-full">
              <div className="w-[1440px]">
                <img 
                  src={scheduleImage}
                  alt="Competition Schedule and Awards"
                  className="w-full"
                />
              </div>
            </div>
        </div>

          {/* 6屏：比赛帮助 */}
          <div id="help" className="relative w-full bg-black py-16 flex flex-col items-center">
            <div className="w-full h-[224px] flex items-end justify-center pb-10">
              <AnimatedTitle text={sections[4].displayTitle} />
            </div>
            <div className="w-[1300px] px-6 mt-5">
              <div className="grid grid-cols-2 gap-12">
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
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="w-full flex flex-col items-center justify-center mt-[100px] overflow-x-hidden overflow-y-hidden">
        <div className="text-center mb-8">
          <div className="text-[60px] leading-[80px] tracking-[0.1em] text-[#3E3E3E] font-['JetBrains_Mono_NL'] font-normal shine-text">
            Design for a better life
          </div>
          <div className="text-[60px] leading-[80px] tracking-[0.1em] text-[#3E3E3E] font-['JetBrains_Mono_NL'] font-normal shine-text">
            with ai coding
          </div>
        </div>
        <img 
          src={footerImage}
          alt="Footer"
          className="w-[1440px] object-contain"
        />
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap');
        
        html, body {
          overscroll-behavior: none;
        }
        @keyframes glow1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-20px, 20px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        
        @keyframes glow2 {
          0% { transform: translate(-50%, 0) scale(1); }
          33% { transform: translate(-60%, 20px) scale(0.9); }
          66% { transform: translate(-40%, -20px) scale(1.1); }
          100% { transform: translate(-50%, 0) scale(1); }
        }
        
        @keyframes glow3 {
          0% { transform: translate(50%, 0) scale(1); }
          33% { transform: translate(40%, -20px) scale(1.1); }
          66% { transform: translate(60%, 20px) scale(0.9); }
          100% { transform: translate(50%, 0) scale(1); }
        }
        
        .animate-glow-1 {
          animation: glow1 6s ease-in-out infinite;
        }
        
        .animate-glow-2 {
          animation: glow2 6s ease-in-out infinite;
          animation-delay: -2s;
        }
        
        .animate-glow-3 {
          animation: glow3 6s ease-in-out infinite;
          animation-delay: -4s;
        }

        .shine-text {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #3E3E3E 0%, #3E3E3E 40%, #808080 50%, #3E3E3E 60%, #3E3E3E 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine 5s linear infinite;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
        }

        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
