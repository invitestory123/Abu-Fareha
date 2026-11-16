import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio.mp3");
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    // Attempt gentle autoplay on user interaction if possible
    const handleFirstClick = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay blocked by browser policy until explicit button click
          });
      }
      window.removeEventListener("click", handleFirstClick);
    };

    window.addEventListener("click", handleFirstClick, { once: true });

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      window.removeEventListener("click", handleFirstClick);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex items-center gap-2">
      <motion.button
        type="button"
        onClick={togglePlay}
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: 1.03 }}
        aria-label={isPlaying ? "Pause wedding ambience" : "Play wedding ambience"}
        className="group relative flex items-center gap-2.5 rounded-full border border-gold/50 bg-[#072219]/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-gold hover:shadow-[0_0_25px_rgba(230,195,110,0.4)]"
      >
        <span className="relative flex h-4 w-4 items-center justify-center">
          {isPlaying ? (
            <span className="flex items-end gap-[2px] h-3.5">
              <span
                className="w-[3px] bg-[#e5c178] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"
                style={{ height: "70%" }}
              />
              <span
                className="w-[3px] bg-[#e5c178] rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s]"
                style={{ height: "100%" }}
              />
              <span
                className="w-[3px] bg-[#e5c178] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]"
                style={{ height: "55%" }}
              />
            </span>
          ) : (
            <Music className="h-4 w-4 text-gold/80 group-hover:text-gold" />
          )}
        </span>

        <div className="flex flex-col text-left">
          <span className="text-[0.68rem] font-semibold tracking-wider text-cream uppercase">
            {isPlaying ? "Music Playing" : "Play Music"}
          </span>
          <span className="text-[0.55rem] text-gold/80 font-normal truncate max-w-[130px]">
            Maula Ya Salli (Rabab)
          </span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            type="button"
            onClick={toggleMute}
            whileTap={{ scale: 0.92 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-[#072219]/90 text-gold shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-gold hover:text-gold-soft"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AudioPlayer;
