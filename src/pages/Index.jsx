// 导入必要的依赖
import { useState, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';
import { Music2, Pause, VolumeX } from 'lucide-react';

// 导入图片资源
import posterImage from '@/assets/images/poster.svg';
import posterTopImage from '@/assets/images/poster-top.svg';

// 导入自定义组件
import { RegisterDialog } from "@/components/RegisterDialog";
import { NavBar } from "@/components/NavBar";
import { CompetitionIntro } from "@/components/screens/CompetitionIntro";
import { TrackOverview } from "@/components/screens/TrackOverview";
import { CaseReference } from "@/components/screens/CaseReference";
import { Schedule } from "@/components/screens/Schedule";
import { Help } from "@/components/screens/Help";
import { Footer } from "@/components/screens/Footer";
import "@/styles/animations.css";

// 锚点导航组件
const AnchorNav = ({ sections }) => {
  // 当前激活的部分和可见性状态
  const [activeSection, setActiveSection] = useState(sections[0]?.id);
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件以更新导航状态
  useEffect(() => {
    const handleScroll = () => {
      // 检查竞赛详情部分是否可见
      const competitionDetails = document.getElementById('competition-details');
      if (competitionDetails) {
        const rect = competitionDetails.getBoundingClientRect();
        setIsVisible(rect.top <= 0);
      }

      // 查找当前可见的部分
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

  // 滚动到指定部分
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

// 动画标题组件
const AnimatedTitle = ({ text }) => {
  // 动画方向和动画key
  const [direction, setDirection] = useState('left');
  const [key, setKey] = useState(0);
  const titleRef = useRef(null);

  // 处理鼠标进入事件
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
          // 确定字符类型和间距
          const isBracket = char === '{' || char === '}';
          const isChinese = /[\u4e00-\u9fa5]/.test(char);
          const spacingClass = isBracket ? 'mx-[12px]' : (isChinese ? 'mx-[0.5px]' : '');
          
          // 计算动画延迟
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

// 主页组件
const Index = () => {
  // 定义页面各部分
  const sections = [
    { id: 'competition-intro', title: '大赛说明', displayTitle: '{ 大赛说明 }' },
    { id: 'track-overview', title: '赛道概览', displayTitle: '{ 赛道概览 }' },
    { id: 'case-reference', title: '案例参考', displayTitle: '{ 案例参考 }' },
    { id: 'schedule', title: '赛程&奖项', displayTitle: '{ 赛程&奖项 }' },
    { id: 'help', title: '比赛帮助', displayTitle: '{ 比赛帮助 }' }
  ];

  // 报名对话框状态
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* 首屏 */}
      <div id="FirstScreen" className="relative w-[100vw] h-[100vh] overflow-hidden">
        {/* 模糊背景 */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={posterImage}
            alt="Background"
            className="w-full h-full object-cover blur-2xl scale-110"
          />
          {/* 黑色背景 */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </div>
        
        {/* 视频背景 */}
        <div className="relative w-[100vw] h-[100vh] overflow-visible flex flex-col items-center justify-start"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 400px, black calc(100% - 400px), transparent)'
          }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            onLoadedData={() => console.log('视频加载成功')}
            onError={(e) => console.error('视频加载错误:', e)}
          >
            <source src="/videos/poster.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>

          {/* Slogen & 报名按钮 */}  
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[10vh] z-20 flex flex-col items-center gap-[3vh]">
            {/* Slogen: ...为美好生活而设计... */}
            <img 
              id="Slogen"
              src={posterTopImage}
              alt="Poster Top"
              className="w-[75vw]"
            />
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsRegisterDialogOpen(true);
              }}
              className="inline-block h-[60px] px-8 rounded-full bg-black/30 backdrop-blur-md border-2 border-[#D4FC82] 
                text-[#D4FC82] text-[20px] 
                flex items-center justify-center transition-all duration-100 
                hover:bg-[#D4FC82]/15 hover:font-medium whitespace-nowrap"
            >
              立即报名
            </a>
          </div>
        </div>
      </div>

      {/* 第二屏及以后 */}
      <main id="IndexContent" className="w-full flex flex-col items-center">
        {/* 右侧锚点导航 */}
        <div className="fixed right-4 top-[72px] z-[100]">
          <AnchorNav sections={sections} />
        </div>

        {/* 第二屏：大赛说明 */}
        <CompetitionIntro onRegisterClick={() => setIsRegisterDialogOpen(true)} />

        {/* 第三屏：赛道概览 */}
        <TrackOverview />

        {/* 第四屏：案例参考 */}
        <CaseReference />

        {/* 第五屏：赛程&奖项 */}
        <Schedule />

        {/* 第六屏：比赛帮助 */}
        <Help />
      </main>

      {/* 页脚 */}
      <Footer />

      <RegisterDialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen} />
    </div>
  );
};

export default Index;
