import { AnimatedTitle } from "@/components/AnimatedTitle";
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import caseExample1Image from '@/assets/images/case/case1@2x.png';
import caseExample2Image from '@/assets/images/case/case2@2x.png';
import caseExample3Image from '@/assets/images/case/case3@2x.png';
import caseExample4Image from '@/assets/images/case/case4@2x.png';
import caseExample5Image from '@/assets/images/case/case5@2x.png';
import caseExample6Image from '@/assets/images/case/case6@2x.png';

export const CaseReference = () => {
  return (
    <section id="case-reference" className="w-full h-[80vh] min-h-[840px] flex flex-col items-center justify-start py-10">  
      {/* 1.标题 */}
      <div className="w-full h-[224px] flex items-end justify-center pb-10">
        <AnimatedTitle text="{ 案例参考 }" />
      </div>

      {/* 2.内容 */}
      <div className="w-[1300px] relative mx-auto">
        {/* 发光背景效果 */}
        <div className="absolute -inset-10 bg-[#00ffbb] opacity-30 blur-[80px] z-0 animate-glow-1" />
        <div className="absolute -inset-10 bg-[#0088ff] opacity-25 blur-[100px] -translate-x-1/2 z-0 animate-glow-2" />
        <div className="absolute -inset-10 bg-[#00ffea] opacity-25 blur-[100px] translate-x-1/2 z-0 animate-glow-3" />

        {/* 案例参考卡片 */}
        <div className="grid grid-cols-3 gap-6 relative z-10">
          {[
            {
              image: caseExample2Image,
              url: 'https://km.sankuai.com/collabpage/2706272402?kmId=2706272402&linkType=KM',
              title: '数据看板 · 刘致闻',
              distribution: '美团平台/用户增长与运营部'
            },
            {
              image: caseExample3Image,
              url: 'https://km.sankuai.com/community/article/2706524389',
              title: '浏览器插件 · 邹骁',
              distribution: '基础研发平台/企业平台研发部'
            },
            {
              image: caseExample4Image,
              url: 'https://km.sankuai.com/community/article/2703079719',
              title: 'B 端平台 · 任启盈',
              distribution: '基础研发平台/企业平台研发部'
            },
            {
              image: caseExample5Image,
              url: 'https://km.sankuai.com/collabpage/2663688834',
              title: '移动 App 开发 · 张政',
              distribution: '基础研发平台/计算智能和平台部'
            },
            {
              image: caseExample6Image,
              url: 'https://imd.sankuai.com/files/navigate-out?target=https%3A%2F%2Fkm.sankuai.com%2Fcollabpage%2F2704573004',
              title: '小程序开发 · 杨思娜',
              distribution: '外卖事业部/产品部'
            },
            {
              image: caseExample1Image,
              url: 'https://km.sankuai.com/collabpage/2677633608',
              title: '网页开发 · 黄奕礼',
              distribution: '平台产品部/设计部/基础研发平台设计中心'
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="relative group"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src={item.image}
                  alt={`Case Example ${i+1}`}
                  className="w-full object-cover rounded-xl transition-all duration-200 group-hover:ring-1 group-hover:ring-white active:brightness-80"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 px-4">
                    <p className="text-white text-base font-medium leading-6 font-['PingFang_SC']">
                      {item.title}
                    </p>
                    <p className="text-white/80 text-sm font-normal leading-6 font-['PingFang_SC']">
                      {item.distribution}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 