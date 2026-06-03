import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["DESIGN", "CREATE", "INSPIRE", "E-COMMERCE", "3D RENDER", "CHENGXIN"];
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const duration = 2400; // Counter reaches 100 over 2400ms

  useEffect(() => {
    // Word cycler every 800ms
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 800);

    // Precise requestAnimationFrame counter
    let animationFrameId: number;

    const animateCounter = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCounter);
      } else {
        // Count reached 100, wait 400ms then call onComplete
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(animateCounter);

    return () => {
      clearInterval(wordInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-16 select-none font-sans overflow-hidden">
      {/* Top Left Label */}
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-start accent-gradient animate-pulse" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            JIAXU ZHUANG • PORTFOLIO 2026
          </span>
        </motion.div>
      </div>

      {/* Center Word Cycler */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-24 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={wordIndex}
              initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 0.85, filter: "blur(0px)" }}
              exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic tracking-wider text-text-primary uppercase font-bold text-center"
            >
              {words[wordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom section with counter and progress bar */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="text-xs text-muted font-mono tracking-widest uppercase hidden sm:block"
          >
            LOADING COGNITIVE INTERFACE
          </motion.div>
          
          {/* Large tabular counter in Display font */}
          <div className="text-7xl md:text-9xl font-display text-text-primary tabular-nums font-bold tracking-tight leading-none ms-auto">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden relative">
          <div
            className="h-full accent-gradient rounded-full transition-transform duration-100 ease-out origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 12px rgba(137, 170, 204, 0.65)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
