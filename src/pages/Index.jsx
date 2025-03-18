import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-black/75 backdrop-blur-md z-50 w-full">
      <div className="w-full h-full flex items-center px-6">
        <img src="https://nocode.meituan.com/photo/search?keyword=logo,gray&width=28&height=28" alt="Logo" className="w-7 h-7" />
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
      
      <div className="w-full bg-gradient-to-b from-purple-900 to-black pt-14">
        <div className="max-w-[1440px] min-w-[1270px] mx-auto">
          <a 
            href="https://km.sankuai.com/collabpage/2704338587" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group relative"
          >
            <div className="relative overflow-hidden">
              <img 
                src="https://nocode.meituan.com/photo/search?keyword=poster,competition&width=1440&height=800" 
                alt="Competition Poster"
                className="w-full object-cover transition-all duration-300 
                  group-hover:scale-[1.025] group-hover:brightness-105
                  active:brightness-95"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
            </div>
          </a>
        </div>
      </div>

      <div id="competition-details" className="max-w-[1440px] min-w-[1270px] mx-auto relative">
        <AnchorNav sections={sections} />

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

        <div id="case-reference">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=case,reference,header&width=1440&height=200" 
            alt="Case Reference Header"
            className="w-full object-cover"
          />
          <div className="grid grid-cols-3 gap-6 p-6">
            {[
              {
                url: 'https://km.sankuai.com/collabpage/2677633608',
                clickable: true
              },
              {
                url: 'https://km.sankuai.com/collabpage/2704573004',
                clickable: true
              },
              {
                url: 'https://km.sankuai.com/community/article/2703079719',
                clickable: true
              },
              { clickable: false },
              { clickable: false },
              { clickable: false }
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
                      src={`https://nocode.meituan.com/photo/search?keyword=case,example${i+1}&width=400&height=300`}
                      alt={`Case Example ${i+1}`}
                      className="w-full object-cover rounded-xl transition-all duration-200 
                        group-hover:ring-2 group-hover:ring-white
                        active:brightness-80"
                    />
                  </a>
                ) : (
                  <img 
                    src={`https://nocode.meituan.com/photo/search?keyword=case,example${i+1}&width=400&height=300`}
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

        <div id="schedule">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=competition,schedule&width=1440&height=600" 
            alt="Competition Schedule"
            className="w-full object-cover"
          />
        </div>

        <div id="awards">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=awards,prizes&width=1440&height=600" 
            alt="Awards"
            className="w-full object-cover"
          />
        </div>

        <div id="help" className="bg-black py-16">
          <div className="max-w-[1440px] min-w-[1270px] mx-auto px-6">
            <div className="grid grid-cols-2 gap-12">
              {/* 左列：常见问题 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-normal text-white">常见问题</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://nocode.meituan.com/photo/search?keyword=faq,question${i}&width=600&height=200`}
                      alt={`FAQ Question ${i}`}
                      className="w-full rounded-xl"
                    />
                  ))}
                </div>
              </div>

              {/* 右列：推荐工具和技术加油站 */}
              <div className="space-y-12">
                {/* 推荐工具 */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-normal text-white">推荐工具</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {[
                      { name: 'NoCode', url: 'https://nocode.sankuai.com/' },
                      { name: 'MCopilot', url: 'https://mcopilot.sankuai.com/' },
                      { name: 'Cursor', url: 'https://www.cursor.com/cn' },
                      { name: 'Onlook', url: 'https://onlook.com/' },
                      { name: 'V0', url: 'https://v0.dev/' }
                    ].map((tool, i) => (
                      <div key={i} className="text-center">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <img
                            src={`https://nocode.meituan.com/photo/search?keyword=tool,${tool.name.toLowerCase()}&width=200&height=200`}
                            alt={tool.name}
                            className="w-full rounded-xl transition-all duration-200 
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
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400"
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

      {/* 页脚 */}
      <footer className="w-full h-[90px]">
        <img 
          src="https://nocode.meituan.com/photo/search?keyword=footer,placeholder,gray&width=1920&height=90" 
          alt="Footer"
          className="w-full h-full object-cover"
        />
      </footer>
    </div>
  );
};

export default Index;
