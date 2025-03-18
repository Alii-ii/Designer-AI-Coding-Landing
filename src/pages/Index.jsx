import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-transparent backdrop-blur-md z-50">
      <div className="max-w-[1440px] mx-auto px-3 h-full flex items-center">
        <img src="https://nocode.meituan.com/photo/search?keyword=logo,gray&width=28&height=28" alt="Logo" className="w-7 h-7 ml-3" />
        <span className="text-white text-base font-semibold ml-2">设计部 AI Coding 活动</span>
        
        <div className="flex items-center mx-auto space-x-8">
          <button className="text-white text-base font-medium">首页</button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="text-white text-base opacity-40">参赛作品</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>敬请期待</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <button className="text-white text-base opacity-40">获奖名单</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>敬请期待</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black font-semibold text-sm px-4 h-[38px] rounded-lg"
        >
          投稿
        </button>
      </div>

      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setShowModal(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    敬请期待
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
          className="fixed right-6 top-24 bg-black bg-opacity-30 backdrop-blur-md rounded-lg p-4"
        >
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-white text-sm ${
                  activeSection === section.id ? 'font-bold' : 'opacity-60'
                }`}
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

const Index = () => {
  const sections = [
    { id: 'competition-intro', title: '大赛说明' },
    { id: 'track-overview', title: '赛道概览' },
    { id: 'case-reference', title: '案例参考' },
    { id: 'schedule', title: '赛程安排' },
    { id: 'awards', title: '奖项设置' },
    { id: 'help', title: '比赛帮助' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* 报名海报区域 */}
      <div className="w-full bg-gradient-to-b from-purple-900 to-black pt-14">
        <div className="max-w-[1440px] min-w-[1270px] mx-auto">
          <a href="https://km.sankuai.com/collabpage/2704338587" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://nocode.meituan.com/photo/search?keyword=poster,competition&width=1440&height=800" 
              alt="Competition Poster"
              className="w-full object-cover"
            />
          </a>
        </div>
      </div>

      {/* 比赛详情区域 */}
      <div id="competition-details" className="max-w-[1440px] min-w-[1270px] mx-auto relative">
        <AnchorNav sections={sections} />

        {/* 大赛说明 */}
        <div id="competition-intro" className="relative">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=competition,introduction&width=1440&height=600" 
            alt="Competition Introduction"
            className="w-full object-cover"
          />
          <a 
            href="https://km.sankuai.com/collabpage/2704898611"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[60px] bottom-6 bg-white bg-opacity-80 backdrop-blur-sm text-black text-sm font-normal h-12 px-6 rounded-full flex items-center"
          >
            查看提交模版
          </a>
        </div>

        {/* 赛道概览 */}
        <div id="track-overview">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=track,overview,header&width=1440&height=200" 
            alt="Track Overview Header"
            className="w-full object-cover"
          />
          <div className="h-[600px] overflow-y-auto">
            <img 
              src="https://nocode.meituan.com/photo/search?keyword=track,details&width=1440&height=1200" 
              alt="Track Details"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* 案例参考 */}
        <div id="case-reference">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=case,reference,header&width=1440&height=200" 
            alt="Case Reference Header"
            className="w-full object-cover"
          />
          <div className="grid grid-cols-3 gap-6 p-6">
            {[...Array(6)].map((_, i) => (
              <img 
                key={i}
                src={`https://nocode.meituan.com/photo/search?keyword=case,example${i+1}&width=400&height=300`}
                alt={`Case Example ${i+1}`}
                className="w-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* 赛程安排 */}
        <div id="schedule">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=competition,schedule&width=1440&height=600" 
            alt="Competition Schedule"
            className="w-full object-cover"
          />
        </div>

        {/* 奖项设置 */}
        <div id="awards">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=awards,prizes&width=1440&height=600" 
            alt="Awards"
            className="w-full object-cover"
          />
        </div>

        {/* 比赛帮助 */}
        <div id="help">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=competition,help&width=1440&height=600" 
            alt="Competition Help"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
