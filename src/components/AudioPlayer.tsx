import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Music, HelpCircle, Check, X } from "lucide-react";

interface AudioPlayerProps {
  isLoading?: boolean;
}

export default function AudioPlayer({ isLoading = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Initial intent is paused until user confirms
  const [isActuallyPlaying, setIsActuallyPlaying] = useState(false); // Hardware play state
  const [volume, setVolume] = useState(0.4); // Default 40% volume for background playback
  const [isMuted, setIsMuted] = useState(false);

  // YES / NO prompting state
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Audio sources: NetEase Cloud Music direct address of requested song ID 2068165905 (with previous ID as fallback mirror)
  const audioSources = [
    "https://music.163.com/song/media/outer/url?id=2068165905.mp3",
    "https://music.163.com/song/media/outer/url?id=20180795.mp3"
  ];
  
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);

  // Trigger prompt once loading is fully complete (100% progress screen disappeared)
  useEffect(() => {
    if (!isLoading && !hasPrompted) {
      // Small timeout for smooth entry
      const timer = setTimeout(() => {
        setShowPrompt(true);
        setHasPrompted(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading, hasPrompted]);

  // Initialize and load the audio object
  useEffect(() => {
    const audio = new Audio(audioSources[currentSourceIndex]);
    audio.loop = true;
    audio.volume = isMuted ? 0 : volume;
    audio.muted = isMuted;
    audioRef.current = audio;

    // Attach listeners to sync Hardware Playback status with state
    const onPlay = () => {
      setIsActuallyPlaying(true);
      setIsPlaying(true);
    };
    const onPause = () => {
      setIsActuallyPlaying(false);
      setIsPlaying(false);
    };
    
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("playing", onPlay);

    // Failover callback for network issues
    const handleError = () => {
      console.warn(`Audio streaming failed at source index ${currentSourceIndex}. Re-routing to backup.`);
      if (currentSourceIndex < audioSources.length - 1) {
        setCurrentSourceIndex((prev) => prev + 1);
      }
    };

    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("playing", onPlay);
      audio.removeEventListener("error", handleError);
      audioRef.current = null;
    };
  }, [currentSourceIndex]);

  // Sync mute and volume values when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Handle YES choice: active user action allows instant, uninhibited browser playback
  const handleConfirmYes = () => {
    if (!audioRef.current) return;
    setShowPrompt(false);
    
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        setIsActuallyPlaying(true);
        console.log("Interactive gesture accepted. Background atmospheric reading audio is now online.");
      })
      .catch((error) => {
        console.error("Autoplay attempt via interactive gesture failed", error);
      });
  };

  // Handle NO choice: remains muted, hides card
  const handleConfirmNo = () => {
    setShowPrompt(false);
    setIsPlaying(false);
    setIsActuallyPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  // Handle manual Play/Pause controls on Floating Player
  const handleTogglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Play command blocked by browser action requirements", error);
        });
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Adjust volume slider target on audio context
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  // Toggle audio mute status
  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      {/* 1. Immersive Reading Mode Music Confirmation Overlay Panel */}
      {showPrompt && (
        <div id="immersive-audio-prompt-overlay" className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#030303]/75 backdrop-blur-md animate-fade-in transition-all duration-500">
          <div 
            id="immersive-audio-prompt-card" 
            className="w-full max-w-sm bg-[#0d0d11]/95 border border-[#27272a]/80 rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.9)] text-center transform scale-100 transition-transform duration-300 animate-[pulse_3s_infinite_ease-out_alternate]"
          >
            {/* Visual Icon Header */}
            <div className="mx-auto w-12 h-12 rounded-full bg-accent-start/10 border border-accent-start/30 flex items-center justify-center mb-4 text-accent-start animate-pulse">
              <Music className="w-5 h-5" />
            </div>

            {/* Main Prompt Headers */}
            <h3 className="text-base font-semibold text-stone-200 tracking-wide mb-1.5 font-sans">
              是否开启背景音乐沉浸式阅读？
            </h3>
            <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
              为您配上了精心定制的背景氛围乐，开启沉浸式体验。
            </p>

            {/* Answer Control Action Buttons */}
            <div className="flex gap-3 justify-center">
              <button
                id="prompt-btn-yes"
                onClick={handleConfirmYes}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-accent-start to-accent-end text-neutral-950 font-semibold text-xs tracking-wider cursor-pointer active:scale-95 hover:shadow-[0_0_20px_rgba(var(--accent-start-rgb),0.3)] transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <Check size={14} className="stroke-[2.5]" />
                YES / 开启
              </button>
              <button
                id="prompt-btn-no"
                onClick={handleConfirmNo}
                className="flex-1 py-2.5 px-4 rounded-xl bg-neutral-900 border border-[#27272a] text-stone-400 font-medium text-xs tracking-wider cursor-pointer active:scale-95 hover:text-stone-200 hover:border-stone-600 transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <X size={14} />
                NO / 暂不
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Background Music Player Mini Controller (Always accessible after loaded) */}
      <div 
        className={`fixed left-6 top-6 z-[100] font-sans pointer-events-auto transition-all duration-700 ${
          isLoading ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-center gap-2 bg-[#0a0a0b]/85 backdrop-blur-xl border border-stroke/75 px-3 py-1.5 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:border-accent-start/40 transition-all duration-300">
          
          {/* Equalizer Wave / Audio Status Icon */}
          <button
            onClick={handleTogglePlay}
            className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#18181b] border border-stroke/40 text-text-primary hover:text-accent-start cursor-pointer active:scale-95 transition-transform flex-shrink-0 animate-none"
            title={isActuallyPlaying ? "点击暂停配乐" : "点击播放配乐"}
          >
            {isActuallyPlaying ? (
              <div className="flex items-end gap-[1.5px] w-3 h-3 overflow-hidden">
                <span className="w-[1.5px] bg-accent-start h-full animate-[pulse_1.2s_infinite_ease-in-out_alternate]" />
                <span className="w-[1.5px] bg-accent-start h-2/3 animate-[pulse_0.8s_infinite_ease-in-out_alternate]" style={{ animationDelay: "0.2s" }} />
                <span className="w-[1.5px] bg-accent-start h-4/5 animate-[pulse_1s_infinite_ease-in-out_alternate]" style={{ animationDelay: "0.4s" }} />
                <span className="w-[1.5px] bg-accent-start h-1/2 animate-[pulse_1.4s_infinite_ease-in-out_alternate]" style={{ animationDelay: "0.1s" }} />
              </div>
            ) : (
              <Music size={11} className="text-muted animate-pulse" />
            )}
          </button>

          {/* Play & Pause Control Buttons */}
          <button
            onClick={handleTogglePlay}
            className="p-1 rounded text-stone-400 hover:text-text-primary hover:bg-stroke/30 transition-all cursor-pointer flex-shrink-0"
            title={isActuallyPlaying ? "暂停音乐" : "播放音乐"}
          >
            {isActuallyPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>

          {/* Mute toggle button */}
          <button
            onClick={handleToggleMute}
            className="p-1 rounded text-stone-400 hover:text-text-primary hover:bg-stroke/30 transition-all cursor-pointer flex-shrink-0"
            title={isMuted ? "取消静音" : "静音配乐"}
          >
            {isMuted ? <VolumeX size={12} className="text-accent-start animate-pulse" /> : <Volume2 size={12} />}
          </button>

          {/* Volume sliding control range */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-14 h-1 rounded bg-[#27272a] appearance-none cursor-pointer accent-accent-start flex-shrink-0"
            title="调节背景音乐音量"
          />
        </div>
      </div>
    </>
  );
}

