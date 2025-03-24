
export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-[15vh] overflow-x-hidden overflow-y-hidden gap-[8vh]">
      
      {/* Slogen */}
      <div className="text-[72px] leading-[80px] tracking-[0.1em] font-['JetBrains_Mono'] font-normal text-center mb-8">
        <div className={`
          bg-[length:200%_100%]
          bg-gradient-to-r from-[#3E3E3E] via-[#FFFFFF] to-[#3E3E3E]
          inline-block
          text-transparent
          bg-clip-text
          animate-[shine_8s_linear_infinite]
        `}>
          Design for better life
          <br />
          with ai coding
        </div>
        <style jsx>{`
          @keyframes shine {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>


      <div className="relative w-full flex flex-col items-center gap-1 ">
        {/* 分割线 */}
        <div className="w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* 第一行文字 */}
        <p className="text-white/60 text-[14px] font-['PingFang_SC'] font-normal leading-[20px] text-center mt-4">
          核心本地商业/美团平台/平台产品部/设计部
        </p>

        {/* 第二行文字 */}
        <p className="text-center text-white/30 text-xs font-normal leading-[20px] font-['PingFang_SC']">
          感谢基础研发平台 Nocode 项目组、美团 App HRBP 团队、美团平台学习发展团队对本活动的大力支持
        </p>
      </div>
      
    </footer>
  );
}; 