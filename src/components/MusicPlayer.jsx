import { useState, useRef, useEffect } from 'react';
import { Music2 } from 'lucide-react';

// 音乐播放器组件
export const MusicPlayer = () => {
  // 播放状态和音频引用
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 组件挂载时自动播放并设置音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // 设置音量
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  // 切换播放/暂停
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
        {/* 播放时的动画效果 */}
        {isPlaying && (
          <>
            <div className="absolute inset-0 rounded-full animate-[ping_2s_ease-in-out_infinite] bg-white/20" />
            <div className="absolute inset-[-4px] rounded-full animate-[ping_2.5s_ease-in-out_infinite] bg-white/10" />
            <div className="absolute inset-[-8px] rounded-full animate-[ping_3s_ease-in-out_infinite] bg-white/5" />
          </>
        )}
        {/* 播放按钮 */}
        <button
          onClick={togglePlay}
          className={`relative w-[36px] h-[36px] rounded-full border-[1.5px] border-white/30 flex items-center justify-center transition-all duration-3000 cursor-pointer bg-white/5 hover:bg-white/10 ${
            isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''
          }`}
        >
          {isPlaying ? (
            <Music2 className="w-4 h-4 text-white" />
          ) : (
            <div className="relative">
              <Music2 className="w-4 h-4 text-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[18px] h-[1.5px] bg-white rotate-45 transform origin-center" />
              </div>
            </div>
          )}
        </button>
      </div>
      {/* 音频元素 */}
      <audio
        ref={audioRef}
        src="/music/background-music.mp3"
        loop
      />
    </div>
  );
}; 