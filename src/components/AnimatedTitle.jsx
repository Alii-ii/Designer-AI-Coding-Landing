import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const AnimatedTitle = ({ text }) => {
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