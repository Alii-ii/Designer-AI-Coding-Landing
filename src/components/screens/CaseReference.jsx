import { AnimatedTitle } from "@/components/AnimatedTitle";
import caseExample1Image from '@/assets/images/case/case-example1.svg';
import caseExample2Image from '@/assets/images/case/case-example2.svg';
import caseExample3Image from '@/assets/images/case/case-example3.svg';
import caseExample4Image from '@/assets/images/case/case-example4.svg';
import caseExample5Image from '@/assets/images/case/case-example5.svg';
import caseExample6Image from '@/assets/images/case/case-example6.svg';

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
                    className="w-full object-cover rounded-xl transition-all duration-200 group-hover:ring-2 group-hover:ring-white active:brightness-80"
                  />
                </a>
              ) : (
                <img 
                  src={item.image}
                  alt={`Case Example ${i+1}`}
                  className="w-full object-cover rounded-xl transition-all duration-200 group-hover:ring-2 group-hover:ring-white active:brightness-80"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 