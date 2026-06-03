import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CAROUSEL_IMAGES = [
  "https://i.postimg.cc/m240gvDt/1176X555jing-xuan-618-fei-li-pu-MG-wang-da-lu-shi-jian.jpg",
  "https://i.postimg.cc/MKwhpCTT/1176X555jing-xuan-618-fei-li-pu-MG-gai2-3.jpg",
  "https://i.postimg.cc/TYxZ3zwy/1176X555jing-xuan-fei-li-pu-MG-qing-ren-jie-hei-jin.jpg",
  "https://i.postimg.cc/vHypZJBm/1176x555-bian-xing-jin-gang-qian-se.jpg"
];

interface ProjectCarouselProps {
  className?: string;
  autoplayInterval?: number;
}

export default function ProjectCarousel({ className = "", autoplayInterval = 4000 }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setIndex((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
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
      id="custom-project-carousel"
      className={`relative w-full overflow-hidden bg-black/40 rounded-t-3xl border-b border-stroke/40 aspect-[1176/555] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={CAROUSEL_IMAGES[index]}
            alt={`Philips Shaver Ad ${index + 1}`}
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
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </AnimatePresence>
      </div>

      {/* Slide Index Badge */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono text-accent-start z-20">
        {index + 1} / {CAROUSEL_IMAGES.length}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-text-primary backdrop-blur-sm transition-all active:scale-90 z-20 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-text-primary backdrop-blur-sm transition-all active:scale-90 z-20 cursor-pointer"
            >
              <ChevronRight size={18} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Dynamic Slide Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
        {CAROUSEL_IMAGES.map((_, i) => (
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
}
