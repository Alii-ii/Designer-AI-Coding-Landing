import { useState, useRef } from 'react';
import { Music2, Pause } from 'lucide-react';
import { cn } from "@/lib/utils";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed left-8 bottom-8 z-50">
      <button
        onClick={togglePlay}
        className={cn(
          "w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center",
          "hover:scale-110 transition-transform duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Music2 className="w-6 h-6" />
        )}
      </button>
      <audio
        ref={audioRef}
        src="/music/background-music.mp3"
        loop
      />
    </div>
  );
};

export default MusicPlayer; 