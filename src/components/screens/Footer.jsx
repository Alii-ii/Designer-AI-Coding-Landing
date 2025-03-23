import footerImage from '@/assets/images/footer/footer.svg';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center mt-[100px] overflow-x-hidden overflow-y-hidden">
      <div className="text-center mb-8">
        <div className="text-[60px] leading-[80px] tracking-[0.1em] text-[#3E3E3E] font-['JetBrains_Mono'] font-normal shine-text">
          Design for a better life
        </div>
        <div className="text-[60px] leading-[80px] tracking-[0.1em] text-[#3E3E3E] font-['JetBrains_Mono'] font-normal shine-text">
          with ai coding
        </div>
      </div>
      <img 
        src={footerImage}
        alt="Footer"
        className="w-[1440px] object-contain"
      />
    </footer>
  );
}; 