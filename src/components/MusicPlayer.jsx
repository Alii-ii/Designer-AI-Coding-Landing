import { useState, useRef, useEffect } from 'react';
import { Music2, Volume2, VolumeX } from 'lucide-react';

// 音乐播放器组件
export const MusicPlayer = () => {
  // 播放状态和音频引用
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // 设置默认音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // 设置默认音量为 30%
    }
  }, []);

  // 监听页面交互
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('播放失败:', error);
        });
        setIsPlaying(true);
      }
      // 移除事件监听器，因为我们只需要第一次交互
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  // 处理音频错误
  const handleError = (e) => {
    console.error('音频加载错误:', e);
    setIsPlaying(false);
  };

  // 处理音频加载
  const handleLoadedData = () => {
    console.log('音频加载成功');
    if (hasInteracted) {
      audioRef.current.play().catch(error => {
        console.error('播放失败:', error);
      });
    }
  };

  // 切换播放/暂停
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    setHasInteracted(true);
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error('播放失败:', error);
      });
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
        src="https://s3plus.meituan.net/nocode/nocode_image/%E8%AE%BE%E8%AE%A1%E9%83%A8%20AI%20Coding%20Landing%20Asset/background-music.mp3"
        loop
        onError={handleError}
        onLoadedData={handleLoadedData}
      />
    </div>
  );
}; 