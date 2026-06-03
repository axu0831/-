import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PROMO_KV_IMAGES = [
  "https://i.postimg.cc/3wWMH2wZ/yu-beikv-fei-li-pu-MG-7.jpg",
  "https://i.postimg.cc/W4tRP049/yu-bei-ban-shi1.jpg",
  "https://i.postimg.cc/zf3m1TfQ/yu-bei-ban-shi2.jpg",
  "https://i.postimg.cc/TY0dGsFR/1080x1920-25nian-Q2she-ji-bi-sai-zhuang-jia-xu.jpg"
];

interface PromoKvCarouselProps {
  className?: string;
  autoplayInterval?: number;
}

export default function PromoKvCarousel({ className = "", autoplayInterval = 5000 }: PromoKvCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const [aspectRatios, setAspectRatios] = useState<Record<number, number>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamically load image aspects on mount
  useEffect(() => {
    PROMO_KV_IMAGES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.referrerPolicy = "no-referrer";
      img.onload = () => {
        if (img.naturalWidth && img.naturalHeight) {
          setAspectRatios((prev) => ({
            ...prev,
            [idx]: img.naturalWidth / img.naturalHeight
          }));
        }
      };
    });
  }, []);

  const currentAspect = aspectRatios[index] || (1080 / 1920); // default to perfect 9:16 portrait aspect ratio for 1080x1920

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setIndex((prev) => (prev === PROMO_KV_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? PROMO_KV_IMAGES.length - 1 : prev - 1));
  };

  const setSlide = (targetIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(targetIndex > index ? 1 : -1);
    setIndex(targetIndex);
  };

  // Autoplay effect
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, isHovered, autoplayInterval]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      id="custom-promo-kv-carousel"
      className={`relative w-full overflow-hidden bg-transparent rounded-2xl border border-stroke/60 max-w-[420px] mx-auto shadow-2xl hover:border-accent-start/30 ${className}`}
      style={{
        aspectRatio: currentAspect,
        transition: "aspect-ratio 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="absolute inset-x-0 inset-y-0 w-full h-full flex items-center justify-center p-0.5">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={PROMO_KV_IMAGES[index]}
            alt={`Philips Promo KV ${index + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl pointer-events-none select-none"
          />
        </AnimatePresence>
      </div>

      {/* Slide Index Badge */}
      <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono text-accent-start z-20 shadow-md">
        {index + 1} / {PROMO_KV_IMAGES.length}
      </div>

      {/* Navigation Chevrons */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-text-primary backdrop-blur-sm transition-all active:scale-90 z-20 cursor-pointer shadow-lg"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-text-primary backdrop-blur-sm transition-all active:scale-90 z-20 cursor-pointer shadow-lg"
            >
              <ChevronRight size={18} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Dynamic Slide Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5 shadow-md">
        {PROMO_KV_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => setSlide(i, e)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-accent-start w-3" : "bg-neutral-500 hover:bg-neutral-300"
            } cursor-pointer`}
          />
        ))}
      </div>

      {/* Overlay Ambient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none" />
    </div>
  );
}
