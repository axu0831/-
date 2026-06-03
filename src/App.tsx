import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hls from "hls.js";
import { 
  ArrowUpRight, 
  ChevronRight, 
  Clock, 
  ArrowRight, 
  Mail, 
  Phone, 
  Award, 
  User, 
  Briefcase, 
  ExternalLink,
  Bot,
  MessageSquare,
  FileText,
  MousePointerClick,
  Monitor,
  Cpu,
  Layers,
  Heart,
  ChevronDown,
  X,
  Sparkles,
  ArrowUp,
  Copy,
  Check,
  ArrowDown
} from "lucide-react";

import LoadingScreen from "./components/LoadingScreen";
import ResumeModal from "./components/ResumeModal";
import AudioPlayer from "./components/AudioPlayer";
import CompetencyReport from "./components/CompetencyReport";
import ProjectCarousel, { CAROUSEL_IMAGES } from "./components/ProjectCarousel";
import PromoKvCarousel from "./components/PromoKvCarousel";
import IntelCarousel from "./components/IntelCarousel";
import YangcheCarousel from "./components/YangcheCarousel";
import { PERSONAL_INFO, PROJECTS, JOURNAL_ENTRIES, EXPLORATIONS, WORK_HISTORY } from "./data";
import { Project, JournalEntry } from "./types";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("18686123406");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };
  
  // Project & Journal details modal/drawer state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedJournal, setSelectedJournal] = useState<JournalEntry | null>(null);
  const [selectedExploration, setSelectedExploration] = useState<any | null>(null);

  // Video Ref variables for HLS stream
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const footerVideoRef = useRef<HTMLVideoElement | null>(null);

  // GSAP element references for entrance animations
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const ctaButtonsRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  // Explorations Parallax references
  const explorationsSectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedContentRef = useRef<HTMLDivElement | null>(null);
  const parallaxColumnsRef = useRef<HTMLDivElement | null>(null);

  // Floating Nav background change on scroll
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Role switching state
  const roles = [
    "E-commerce Designer",
    "C4D 3D Artist",
    "High-CTR Visual Strategist",
    "Charismatic Host"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  // Website protection mechanism: prevent saving or dragging images
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "IMG" || target.closest("img") || target.style.backgroundImage)) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "IMG" || target.closest("img"))) {
        e.preventDefault();
      }
    };

    // Global listeners to prevent right-click copy and drag on images
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress percentage
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (winScroll / height) * 100)));
      } else {
        setScrollPercent(0);
      }

      // Track active section for custom scrollbar indicator
      const sections = ["home", "work", "journal", "methodology", "explorations", "contact"];
      let currentSection = "home";
      let minDistance = Infinity;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distanceToThreshold = Math.abs(rect.top - window.innerHeight * 0.25);
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            currentSection = id;
            break;
          } else if (distanceToThreshold < minDistance) {
            minDistance = distanceToThreshold;
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize right away
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Role state cycler
  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isLoading]);

  // HLS stream loader loop
  useEffect(() => {
    const heroStreamUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    const footerStreamUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    const loadHLS = (videoElement: HTMLVideoElement | null, streamUrl: string) => {
      if (!videoElement) return;
      videoElement.muted = true;
      videoElement.autoplay = true;
      videoElement.setAttribute("muted", "");
      videoElement.setAttribute("playsinline", "");
      if (Hls.isSupported()) {
        const hls = new Hls({ enableWorker: false });
        hls.loadSource(streamUrl);
        hls.attachMedia(videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoElement.play().catch(err => console.log("Auto-play blocked, waiting for interaction:", err));
        });
      } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src = streamUrl;
        videoElement.addEventListener("canplay", () => {
          videoElement.play().catch(err => console.log("Auto-play blocked native:", err));
        });
      }
    };

    if (!isLoading) {
      loadHLS(heroVideoRef.current, heroStreamUrl);
      loadHLS(footerVideoRef.current, footerStreamUrl);
    }
  }, [isLoading]);

  // GSAP Entrance Animations for Hero (after loading screen exits)
  useEffect(() => {
    if (isLoading) return;

    // Reset layout elements opacity for transition jump-prevention
    gsap.set([".name-reveal", ".blur-in"], { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Stagger animation for logo and nav
    tl.fromTo(".nav-pill", 
      { y: -30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    );

    // Title reveal
    tl.fromTo(".name-reveal", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2 },
      "-=0.8"
    );

    // Eyebrow and Description blur-in
    tl.fromTo(".blur-in", 
      { y: 20, opacity: 0, filter: "blur(10px)" }, 
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1, stagger: 0.15 },
      "-=0.9"
    );

    // CTA and indicators nudge-up
    tl.fromTo(".hero-cta-button",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1 },
      "-=0.7"
    );

    // Scroll indicator fade-in
    tl.fromTo(".scroll-indicator-fade",
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.4"
    );

  }, [isLoading]);

  // GSAP ScrollTrigger for Parallax Explorations Section
  useEffect(() => {
    if (isLoading) return;

    // We check if screen width supports parallax (at least 768px for clean rendering)
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    let ctx = gsap.context(() => {
      if (mediaQuery.matches && explorationsSectionRef.current && pinnedContentRef.current) {
        // Pin Section left side
        ScrollTrigger.create({
          trigger: explorationsSectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinnedContentRef.current,
          pinSpacing: false,
          id: "explorationPin"
        });

        // Parallax elements scroll inside right columns
        const parallaxCards = gsap.utils.toArray<HTMLElement>(".parallax-card");
        parallaxCards.forEach((card) => {
          const speed = card.getAttribute("data-speed") || "0.5";
          gsap.fromTo(card, 
            { y: 60 },
            { 
              y: -80,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );
        });
      }
    });

    // Marquee scroll timeline (endless loop right to left)
    const marqueeWidth = document.querySelector(".marquee-group")?.clientWidth || 500;
    gsap.to(".marquee-inner-container", {
      xPercent: -50,
      ease: "none",
      duration: 32,
      repeat: -1
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-accent-start/40 selection:text-text-primary select-none overflow-x-hidden antialiased">
      
      {/* 1. Loading screen overlay */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 2. Primary layout pages */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          
          {/* Header Navigation Float bar */}
          <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
            <div 
              className={`nav-pill inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/85 px-3 py-2 transition-all duration-300 ${
                scrolled ? "shadow-lg shadow-black/40 scale-95 border-accent-start/20 bg-bg/95" : ""
              }`}
            >
              {/* Brand Logo with accent ring */}
              <a 
                href="#home"
                className="group relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden transition-all duration-300"
              >
                {/* Accent border with rotating transition on hover */}
                <span className="absolute inset-0 rounded-full accent-gradient group-hover:rotate-180 transition-transform duration-700" />
                <span className="absolute inset-[1.5px] rounded-full bg-bg flex items-center justify-center">
                  <span className="font-display italic text-base font-extrabold text-text-primary tracking-tight">ZJX</span>
                </span>
              </a>

              {/* Decorative divider */}
              <div className="w-px h-5 bg-stroke mx-3 hidden sm:block" />

              {/* Anchor links */}
              <nav className="flex items-center gap-1">
                {[
                  { name: "代表项目", anchor: "#work" },
                  { name: "工作经历", anchor: "#journal" },
                  { name: "设计方法论", anchor: "#methodology" },
                  { name: "作品展示", anchor: "#explorations" },
                  { name: "联系我", anchor: "#contact" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.anchor}
                    className="text-xs sm:text-xs rounded-full px-3 py-1.5 font-medium text-muted hover:text-text-primary hover:bg-stroke/40 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Decorative divider */}
              <div className="w-px h-5 bg-stroke mx-3" />

              {/* Resume opener */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="relative group overflow-hidden inline-flex items-center gap-1.5 text-xs font-semibold bg-stroke hover:bg-stroke/80 border border-white/5 px-4.5 py-1.5 rounded-full text-text-primary transition-all active:scale-95 cursor-pointer"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-start to-accent-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <FileText size={11} className="group-hover:rotate-12 transition-transform" />
                <span>在线简历</span>
                <span className="text-[9px] font-mono opacity-80 bg-bg/40 text-accent-start font-bold px-1.5 py-0.2 rounded group-hover:text-white transition-colors">Resume</span>
              </button>
            </div>
          </header>

          {/* Section 2: Hero */}
          <section id="home" className="relative w-full min-h-screen bg-[#000000] text-white flex flex-col justify-center items-center px-6 text-center select-none overflow-hidden">
            
            {/* Background Streaming Video with HLS.js */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
              
              {/* Background Video Layer */}
              <video
                ref={heroVideoRef}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Smooth bottom transition fade out */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
            </div>

            {/* Content box */}
            <div className="relative z-10 max-w-5xl mx-auto items-center text-center mt-20 pt-16 space-y-12">
              
              {/* Eyebrow label */}
              <div className="blur-in inline-flex items-center gap-2 bg-surface/40 hover:bg-surface/70 border border-stroke rounded-full px-3.5 py-1.5 cursor-default transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] md:text-xs text-muted uppercase tracking-[0.25em] font-mono leading-none">
                  PORTFOLIO COLLECTION '26
                </span>
              </div>

              {/* Large Display Name */}
              <div className="space-y-1">
                <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-serif-italic italic font-light tracking-[0.15em] text-text-primary leading-[0.95] uppercase">
                  PORTFOLIO
                </h1>
                <div className="blur-in text-lg md:text-2xl font-mono text-accent-start uppercase tracking-[0.4em] font-medium opacity-90 mt-2">
                  庄嘉绪作品集
                </div>
              </div>

              {/* Dynamic cycling roles text */}
              <div className="blur-in text-lg md:text-2xl font-body text-text-primary/95 flex items-center justify-center gap-2 max-w-xl mx-auto py-1">
                <span className="text-muted tracking-wide">A</span>
                <div className="h-9 flex items-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="font-display italic text-accent-start font-bold lowercase tracking-wide text-2xl md:text-3xl"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-muted tracking-wide">based in Beijing.</span>
              </div>

              {/* Paragraph Intro */}
              <div className="blur-in flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-2xl mx-auto font-body leading-relaxed mt-4">
                <div className="flex-1 bg-surface/50 border border-stroke/85 rounded-2xl p-4 text-left flex flex-col justify-center space-y-1">
                  <h3 className="text-xs font-bold text-text-primary tracking-wide flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent-start" />
                    数据驱动的视觉设计师
                  </h3>
                  <p className="text-[11px] text-neutral-400 leading-normal">
                    以数据洞察为核心锚点，将用户行为转化为高转化率的商业视觉解决方案。
                  </p>
                </div>
                <div className="flex-1 bg-surface/50 border border-stroke/85 rounded-2xl p-4 text-left flex flex-col justify-center space-y-1">
                  <h3 className="text-xs font-bold text-text-primary tracking-wide flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent-start" />
                    AIGC赋能的创新实践者
                  </h3>
                  <p className="text-[11px] text-neutral-400 leading-normal">
                    探索前沿生成式技术与设计的深度融合，重构创意工作流，提升商业产出效率。
                  </p>
                </div>
              </div>

              {/* CTA trigger elements */}
              <div className="flex justify-center pt-4">
                <a
                  href="#work"
                  className="hero-cta-button relative group overflow-hidden inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-text-primary text-bg px-8 py-3.5 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-start to-accent-end opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 group-hover:text-text-primary transition-colors">
                    <span>浏览代表作品 // SEE WORKS</span>
                    <ArrowDown size={13} className="group-hover:translate-y-1 transition-transform" />
                  </span>
                </a>
              </div>

            </div>

            {/* Scroll indicators at bottom center */}
            <div className="absolute bottom-6 scroll-indicator-fade flex flex-col items-center gap-2">
              <span className="text-[9px] text-muted uppercase tracking-[0.3em] font-mono font-medium">
                SCROLL TO EXPLORE
              </span>
              <div className="w-5 h-8 border border-stroke rounded-full flex justify-center p-1.5 relative bg-surface/30">
                <span className="w-1 h-2 rounded-full bg-accent-start ring-1 ring-accent-start/30 animate-scroll-down" />
              </div>
            </div>

          </section>

          {/* Section 3: Selected Works (Bento Layout) */}
          <section id="work" className="relative bg-bg py-24 md:py-32 border-t border-stroke scroll-mt-24">
            <div className="max-w-[1240px] mx-auto px-6 md:px-10">
              
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
              >
                <div className="space-y-3 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-start" />
                    <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-mono">SELECTED CASUISTRY</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-medium text-text-primary tracking-tight">
                    代表项目 · Representative <span className="font-display italic font-bold text-accent-start text-5xl md:text-6xl">Projects</span>
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-400 font-body leading-relaxed">
                    以数据为导向，将设计能力转化为可衡量的业务价值。从单点的素材优化到全链路的效率升级，再到直接的业务增长，我始终致力于通过专业设计为品牌营销提供强劲的视觉驱动力与商业增量。
                  </p>
                </div>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-text-primary hover:text-accent-start hover:underline transition-all cursor-pointer self-start"
                >
                  <span>查看全部履历与业绩</span>
                  <div className="w-6 h-6 rounded-full bg-stroke flex items-center justify-center text-text-primary group-hover:bg-accent-start group-hover:text-bg transition-colors">
                    <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </motion.div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {PROJECTS.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.65, delay: idx * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className={`${project.gridSpan} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between`}
                  >
                    {/* Media representation container */}
                    <div className={`${project.id === "proj_01" ? "aspect-[1176/555] w-full" : (project.id === "proj_02" || project.id === "proj_04") ? "aspect-[16/9] w-full" : project.ratioClass} relative w-full overflow-hidden`}>
                      {project.id === "proj_01" ? (
                        <ProjectCarousel />
                      ) : project.id === "proj_02" ? (
                        <IntelCarousel autoplayInterval={4500} />
                      ) : project.id === "proj_04" ? (
                        <YangcheCarousel autoplayInterval={4500} />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      )}
                      
                      {/* Dark gradient shadow inside */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 pointer-events-none" />

                      {/* Halftone offset overlay */}
                      <div className="absolute inset-0 noise-overlay opacity-15 pointer-events-none mix-blend-multiply" />

                      {/* Brand client badge inside container */}
                      <span className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-[10px] font-mono uppercase font-semibold text-text-primary/95 border border-white/10 px-3 py-1 rounded-full z-20">
                        {project.client}
                      </span>

                      {/* Special info invitation for carousel card */}
                      {(project.id === "proj_01" || project.id === "proj_02" || project.id === "proj_04") && (
                        <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md text-[10px] font-mono text-accent-start px-3 py-1 rounded-full border border-accent-start/20 flex items-center gap-1 z-20 pointer-events-none">
                          <ArrowUpRight size={11} className="animate-pulse" />
                          <span>点击查看详细内容</span>
                        </div>
                      )}

                      {/* Hover action banner overlay for other cards */}
                      {project.id !== "proj_01" && project.id !== "proj_02" && project.id !== "proj_04" && (
                        <div className="absolute inset-0 bg-surface/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6">
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-start">
                              {project.tag}
                            </span>
                            <span className="w-7 h-7 rounded-full bg-bg border border-stroke flex items-center justify-center text-text-primary shadow-lg">
                              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                            </span>
                          </div>
                          
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono text-muted uppercase">CASE PREVIEW //</span>
                            <h4 className="text-xl font-bold font-sans text-text-primary">
                              {project.title}
                            </h4>
                            <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex items-center gap-1.5 text-xs text-accent-start font-semibold border-b border-dashed border-accent-start/30 w-max pb-0.5 mt-2">
                              <span>点击研读深度战报 (Full Case Details)</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom strip for native viewport display */}
                    <div className="p-6 flex justify-between items-center bg-surface border-t border-stroke relative">
                      <div className="space-y-1">
                        <div className="text-[11px] font-mono text-muted uppercase">
                          {project.enCategory}
                        </div>
                        <h3 className="text-base font-bold text-text-primary truncate max-w-[240px] md:max-w-xs">
                          {project.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-accent-start bg-accent-start/10 border border-accent-start/20 px-2.5 py-1 rounded-full font-medium sm:block hidden">
                          {project.tag.split("•")[0]}
                        </span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* Section 4: Experience / Projects & Strategic Practices */}
          <section id="journal" className="relative bg-bg py-24 md:py-32 border-t border-stroke scroll-mt-24">
            {/* Low contrast fading downward guide arrow */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-25 select-none pointer-events-none">
              <span className="text-[8px] font-mono tracking-[0.3em] text-stone-500 uppercase">EXPLORE MORE</span>
              <motion.div
                animate={{ y: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <ChevronDown size={14} className="text-stone-400" />
              </motion.div>
            </div>
            
            <div className="max-w-[1140px] mx-auto px-6 md:px-10">
              
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
              >
                <div className="space-y-3 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-start" />
                    <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-mono">PROFESSIONAL EXPERIENCE</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-medium text-text-primary tracking-tight">
                    工作经历 • Work & <span className="font-display italic font-bold text-accent-start text-5xl md:text-6xl">Experience</span>
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-400 font-body leading-relaxed">
                    一名兼具设计美感与商业思维的电商设计师。过去5年工作中，我通过数据驱动的设计实践，在提升点击率、优化效率和驱动业务增长方面取得了切实成果。我善于运用新技术(如AIGC)解决实际问题，并乐于在团队中发挥领导力，将专业经验沉淀为可复用的方法，带动团队共同成长与业务价值的持续跃升。
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="text-xs uppercase font-mono bg-stroke/50 border border-white/5 text-muted px-4 py-1.5 rounded-full">
                    源东项目案例 // BRAND CASES
                  </span>
                </div>
              </motion.div>

              {/* Dynamic Competency Report slide/tabs panel */}
              <CompetencyReport />

            </div>
          </section>

          {/* Section 5: Explorations (Parallax Visual Gallery) */}
          <section id="explorations" ref={explorationsSectionRef} className="relative bg-bg py-16 md:py-20 border-t border-stroke min-h-[100vh] md:min-h-[125vh] scroll-mt-24">
            <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-16 w-full">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative items-start w-full">
                
                  {/* Left Column: Title and Description */}
                  <div ref={pinnedContentRef} className="space-y-6 md:sticky md:top-36 md:h-auto flex flex-col justify-start py-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-start" />
                        <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-mono">VISUAL REPOSITORY</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-text-primary tracking-tight">
                        分类目作品 • Categorized <span className="font-display italic font-bold text-accent-start text-5xl md:text-7xl block md:inline">Works</span>
                      </h2>
                      <p className="text-xs md:text-sm text-neutral-400 font-body leading-relaxed max-w-sm">
                        深入理解产品特性与目标用户画像，敏锐洞察当下的类目视觉流行趋势，为设计确立精准的基调方向。
                      </p>

                      {/* Right-pointing guidance arrow and text */}
                      <div className="flex items-center gap-2 pt-2 group pointer-events-none select-none">
                        <span className="text-xs text-neutral-500 font-sans tracking-widest flex items-center gap-2">
                          点击右侧图片查看更多作品
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stroke/30 border border-white/5 text-[#a1a1aa] animate-[pulse_1.8s_infinite_ease-in-out_alternate]">
                            <ArrowRight className="w-3.5 h-3.5 text-accent-start animate-bounce-x" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                {/* Layer 2: Right Parallax Columns (2 columns scroll offset) */}
                <div ref={parallaxColumnsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 pt-10 md:pt-0">
                  {EXPLORATIONS.map((item, idx) => (
                    <div
                      key={item.id}
                      data-speed={idx % 2 === 0 ? "0.4" : "0.7"}
                      onClick={() => setSelectedExploration(item)}
                      className="parallax-card relative group bg-surface border border-stroke rounded-2xl p-4 flex flex-col gap-3 shadow-lg hover:border-accent-start/30 transition-all duration-300 cursor-pointer"
                      style={{
                        transform: `rotate(${item.rotation})`,
                      }}
                    >
                      {/* Image Frame */}
                      <div className="aspect-square w-full rounded-xl overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-[10px] font-mono text-accent-start bg-bg px-2.5 py-1 rounded-full uppercase border border-white/5 shadow">
                            点击进入专栏 // VIEW SERIES
                          </span>
                        </div>
                      </div>

                      {/* Header tags */}
                      <div className="flex justify-between items-start px-1 mt-1">
                        <div className="flex-1 min-w-0 pr-1">
                          <span className="text-[9px] font-mono text-accent-start uppercase tracking-widest block">{item.category}</span>
                          {item.subImages ? (
                            <div className="mt-1 mb-1">
                              <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary leading-tight group-hover:text-accent-start transition-colors">
                                {item.title}
                              </h3>
                              {item.enTitle && (
                                <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 tracking-wide uppercase">
                                  {item.enTitle}
                                </span>
                              )}
                            </div>
                          ) : (
                            <h4 className="text-xs font-bold text-text-primary leading-tight mt-1 group-hover:text-accent-start transition-colors">
                              {item.title}
                            </h4>
                          )}
                          <p className="text-[10px] text-muted line-clamp-2 mt-1 leading-normal text-justify">
                            {item.description}
                          </p>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-stroke flex items-center justify-center shrink-0 mt-1">
                          <MousePointerClick size={10} className="text-muted group-hover:text-text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* Section 6: Stats & Hard Metrics */}
          <section className="relative bg-surface py-20 border-t border-b border-stroke overflow-hidden select-none">
            <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
            <div className="max-w-[1100px] mx-auto px-6 md:px-10">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-stroke">
                {[
                  { metric: "5年+", enPrefix: "EXPERIENCE", label: "5年电商投放设计领域经验", sub: "提供兼具美学价值与商业实效的可持续解决方案" },
                  { metric: "130%", enPrefix: "CONVERSION CTR", label: "核心大促销量破纪录激增", sub: "为品牌客户带来飞跃的实质收益" },
                  { metric: "50+", enPrefix: "BRAND COOPERATING", label: "知名明星级品牌精美服务", sub: "覆盖飞利浦、京东系列、美的、LG等" }
                ].map((stat, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center md:items-start text-center md:text-left md:px-12 space-y-2 first:pl-0 last:pr-0 pt-8 md:pt-0 first:pt-0">
                    <span className="text-[10px] font-mono text-accent-start uppercase tracking-[0.2em]">
                      // {stat.enPrefix}
                    </span>
                    <div className="text-5xl md:text-6xl font-display font-medium text-text-primary tracking-tighter">
                      {stat.metric}
                    </div>
                    <p className="text-xs font-semibold text-text-primary/90">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-muted leading-relaxed max-w-[240px]">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Section 7: Complex interactive resume block inline with smooth UX before footer */}
          <section id="resume" className="relative bg-bg py-24 md:py-32 select-none border-b border-stroke">
            <div className="max-w-[760px] mx-auto px-6 text-center space-y-12">
              <div className="space-y-4">
                <div className="flex justify-center items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-mono">SELECTION REQUISITION</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-medium">
                  正在物色契合的团队伙伴吗？
                </h2>
                <p className="text-xs md:text-sm text-neutral-400 font-body leading-relaxed max-w-lg mx-auto">
                  我的5年完整电商美术积累，与敏捷的数据优化适应力，能迅速赋能业务大盘转化。您可以随时调阅、打印我的完整简历单页。
                </p>
              </div>

              {/* Styled Resume Preview Card with actions */}
              <div className="relative p-6 pr-6 rounded-3xl bg-surface border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-left hover:border-accent-start/20 transition-all group overflow-hidden">
                <div className="absolute left-0 bottom-0 top-0 w-1.5 accent-gradient" />
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted font-mono">
                    <Award size={12} className="text-accent-start" />
                    <span>本科视觉传达专业  •  5年工作经验</span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary leading-tight">
                    庄嘉绪 - 资深电商与投放设计师
                  </h3>
                  <p className="text-xs text-muted leading-relaxed max-w-[450px]">
                    深耕5年京东广告投放设计，专注于用户体验与商业转化的视觉探索者，热衷于用设计语言解决实际业务问题。
                  </p>
                </div>

                <div className="flex flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
                  <button
                    onClick={() => setIsResumeOpen(true)}
                    className="flex-1 text-center justify-center inline-flex items-center gap-2 text-xs bg-text-primary text-bg font-semibold px-5 py-3 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <FileText size={12} />
                    <span>阅读详细简历</span>
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* Section 8: Contact / Footer */}
          <footer id="contact" className="relative bg-bg pt-20 pb-12 overflow-hidden select-none scroll-mt-24">
            
            {/* Background Stream Video flipped vertically with heavier black overlay */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
              <video
                ref={footerVideoRef}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-20 filter blur-[0.8px] scale-y-[-1]"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            </div>

            {/* GSAP endless marquee loop row */}
            <div className="relative z-10 w-full border-t border-b border-stroke/50 py-4.5 bg-black/35 backdrop-blur-sm overflow-hidden mb-16">
              <div className="marquee-group flex whitespace-nowrap overflow-hidden">
                <div className="marquee-inner-container flex gap-12 font-display text-xs md:text-sm tracking-[0.4em] text-muted/60 font-bold select-none uppercase">
                  <span>庄嘉绪 • ELEVATING COMMERCE • JIAXU ZHUANG • 3D RENDER • HIGH CONVERSION • </span>
                  <span>庄嘉绪 • ELEVATING COMMERCE • JIAXU ZHUANG • 3D RENDER • HIGH CONVERSION • </span>
                  <span>庄嘉绪 • ELEVATING COMMERCE • JIAXU ZHUANG • 3D RENDER • HIGH CONVERSION • </span>
                  <span>庄嘉绪 • ELEVATING COMMERCE • JIAXU ZHUANG • 3D RENDER • HIGH CONVERSION • </span>
                </div>
              </div>
            </div>

            {/* Core Contact Content */}
            <div className="relative z-10 max-w-[960px] mx-auto px-6 text-center space-y-10">
              
              <div className="space-y-4">
                <p className="text-[10px] text-accent-start uppercase tracking-[0.3em] font-mono py-1">
                  // INITIATE CONTACT / CHATTER
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-text-primary tracking-tight">
                  期待与你创造 *大作*
                </h2>
                <p className="text-xs md:text-sm text-neutral-400 font-body max-w-md mx-auto">
                  随时欢迎各位猎头、HR、老板联系我，期待与您合作，用设计创造商业价值！
                </p>
              </div>

              {/* Centered Email mailto box */}
              <div className="flex flex-col items-center justify-center gap-5">
                <a 
                  href="mailto:axu0831@163.com"
                  className="inline-flex items-center gap-3 bg-surface/50 hover:bg-surface border border-stroke hover:border-accent-start/40 px-6 py-4 rounded-full transition-all group scale-100 hover:scale-105 active:scale-95"
                >
                  <Mail className="text-accent-start group-hover:rotate-6 transition-transform" size={18} />
                  <span className="text-xs md:text-[13px] font-mono text-text-primary font-semibold">
                    axu0831@163.com
                  </span>
                  <div className="w-5 h-5 rounded-full bg-stroke group-hover:bg-text-primary group-hover:text-bg flex items-center justify-center text-text-primary transition-all">
                    <ArrowRight size={11} />
                  </div>
                </a>

                {/* WeChat & Phone prompt indicators */}
                <div className="flex flex-wrap justify-center gap-5 text-xs text-muted font-mono pt-2">
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 p-1 px-3.5 rounded bg-[#161619]/45 hover:bg-[#1c1c21]/90 border border-stroke/40 hover:border-accent-start/40 text-muted hover:text-text-primary transition-all cursor-pointer group active:scale-95"
                    title="点击复制电话/微信号"
                  >
                    <Phone size={13} className="text-accent-start group-hover:scale-110 transition-transform" />
                    <span>电话 / 微信: <strong className="text-text-primary font-semibold select-all">186-8612-3406</strong></span>
                    {copiedPhone ? (
                      <span className="text-[10px] text-emerald-400 font-sans ml-1 flex items-center gap-0.5 animate-pulse">
                        <Check size={11} className="text-emerald-500" /> 已复制
                      </span>
                    ) : (
                      <Copy size={11} className="text-muted/60 group-hover:text-accent-start transition-colors ml-1.5" />
                    )}
                  </button>
                  <div className="hidden sm:block text-stroke font-light self-center">|</div>
                  <div className="flex items-center gap-1.5 self-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 font-sans font-medium">现居北京 · 随时到岗</span>
                  </div>
                </div>
              </div>

              {/* Bottom footer copyright details */}
              <div className="pt-20 border-t border-stroke flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted font-mono tracking-widest uppercase">
                <div>
                  © 2026 JIAXU ZHUANG COMPILATION. ALL RIGHTS RESERVED.
                </div>
                
                {/* Social platforms links */}
                <div className="flex gap-4">
                   <button 
                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                     className="hover:text-text-primary hover:underline transition-colors cursor-pointer"
                   >
                     BACK TO TOP ↑
                   </button>
                </div>
              </div>

            </div>

          </footer>

          {/* 3. Detailed Modals (Rendered dynamically based on selection stats) */}
          
          {/* Project Details Sheet / Drawer */}
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ scale: 0.95, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 20, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="relative w-full max-w-3xl overflow-hidden bg-surface border border-stroke rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl max-h-[85vh] overflow-y-auto"
                >
                  {/* Close header */}
                  <div className="flex justify-between items-center border-b border-stroke pb-4 shrink-0">
                    <div>
                      <span className="text-[10px] font-mono text-accent-start uppercase tracking-widest">{selectedProject.client} • CASE STUDY</span>
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-1">{selectedProject.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-1.5 bg-stroke hover:bg-stroke/80 rounded-full text-text-primary hover:scale-105 transition-all text-sm cursor-pointer"
                    >
                      <X size={15} />
                    </button>
                  </div>

                  {/* Wide picture placeholder */}
                  {selectedProject.id === "proj_02" ? (
                    <div className="w-full shrink-0 relative">
                      <IntelCarousel />
                    </div>
                  ) : selectedProject.id === "proj_04" ? (
                    <div className="w-full shrink-0 relative">
                      <YangcheCarousel />
                    </div>
                  ) : (
                    <div className={`w-full ${selectedProject.id === "proj_01" ? "aspect-[1176/555]" : "aspect-[16/9]"} rounded-2xl overflow-hidden bg-bg border border-stroke shrink-0 relative`}>
                      {selectedProject.id === "proj_01" ? (
                        <ProjectCarousel />
                      ) : (
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                        />
                      )}
                      <div className="absolute top-4 right-4 bg-black/75 px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono text-accent-start z-35">
                        {selectedProject.tag}
                      </div>
                    </div>
                  )}

                  {/* Body textual list */}
                  <div className="space-y-4 text-xs md:text-sm text-muted">
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-text-primary uppercase tracking-wide">项目概述</h4>
                      <p className="leading-relaxed text-justify">{selectedProject.description}</p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <h4 className="font-bold text-text-primary uppercase tracking-wide">
                        {selectedProject.id === "proj_01" || selectedProject.id === "proj_02" || selectedProject.id === "proj_04" ? "工作内容" : "实战要点 & 设计方法"}
                      </h4>
                      <ul className={`${selectedProject.id === "proj_01" || selectedProject.id === "proj_02" || selectedProject.id === "proj_04" ? "list-none space-y-3" : "list-decimal pl-4.5 space-y-2"} leading-relaxed`}>
                        {selectedProject.details.map((detail, dIdx) => {
                          if (selectedProject.id === "proj_01" || selectedProject.id === "proj_02" || selectedProject.id === "proj_04") {
                            const colonIdx = detail.indexOf("：");
                            if (colonIdx !== -1) {
                              const title = detail.substring(0, colonIdx);
                              const text = detail.substring(colonIdx + 1);
                              return (
                                <li key={dIdx} className="text-justify flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent-start mt-2 shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
                                  <span>
                                    <strong className="text-text-primary font-bold">{title}：</strong>
                                    {text}
                                  </span>
                                </li>
                              );
                            }
                          }
                          return <li key={dIdx} className="text-justify">{detail}</li>;
                        })}
                      </ul>
                    </div>

                    {/* Brand promotional vertical poster image/carousel for proj_01 */}
                    {selectedProject.id === "proj_01" && (
                      <div className="space-y-3 pt-3">
                        <h4 className="font-bold text-text-primary uppercase tracking-wide">
                          KV展示 / KV Display
                        </h4>
                        <PromoKvCarousel />
                      </div>
                    )}
                    
                    {/* Meta tag matrix */}
                    <div className="grid grid-cols-2 gap-4 border-t border-stroke pt-4 text-xs">
                      <div>
                        <span className="text-stone-500 block">品牌方 / Client:</span>
                        <strong className="text-text-primary font-bold">{selectedProject.client}</strong>
                      </div>
                      <div>
                        <span className="text-stone-500 block">业务领域 / Role Area:</span>
                        <strong className="text-text-primary font-bold">{selectedProject.category}</strong>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Journal Reader Sheet */}
          <AnimatePresence>
            {selectedJournal && (
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedJournal(null)}
                  className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ scale: 0.95, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 20, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="relative w-full max-w-2xl overflow-hidden bg-surface border border-stroke rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl max-h-[85vh] overflow-y-auto"
                >
                  {/* Reader header */}
                  <div className="flex justify-between items-center border-b border-stroke pb-4 shrink-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[10px] font-mono text-accent-start bg-accent-start/5 border border-accent-start/20 px-2 py-0.5 rounded">
                          {selectedJournal.category}
                        </span>
                        <span className="text-stone-500 font-mono">{selectedJournal.date}  •  {selectedJournal.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-text-primary leading-snug mt-1">
                        {selectedJournal.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedJournal(null)}
                      className="p-1.5 bg-stroke hover:bg-stroke/80 rounded-full text-text-primary hover:scale-105 transition-all text-sm cursor-pointer"
                    >
                      <X size={15} />
                    </button>
                  </div>

                  {/* Body markdown style details */}
                  <div className="space-y-4 text-xs md:text-sm text-neutral-300 leading-relaxed">
                    <div className="p-4 bg-bg border border-stroke rounded-2xl italic text-muted text-justify">
                      "{selectedJournal.summary}"
                    </div>
                    
                    <p className="text-justify font-sans">
                      {selectedJournal.content}
                    </p>

                    <p className="text-justify font-sans">
                      我们在电商视觉里往往把大部分时间花在了排版与找素材上，忽略了商业设计的本质——‘用户视线的有效引导即是点击漏斗的第一步’。优秀的极简几何排版配合C4D恰当的光影折射与物理质地，能够自然激发起消费者内心的仪式感与信赖感。这也是这几年来我在飞利浦、京东系列品牌等大项目实战中，屡次协助团队销量超等预期突破的理论坚石。
                    </p>

                    <div className="p-4 border-l-2 border-accent-start bg-stroke/20 text-xs italic">
                      若要索取该文章中涉及的 C4D 物理多源打光预设工程包，或有招聘意向探讨，可点击下方按钮直接给作者发送邮件联系。
                    </div>

                    <div className="flex justify-end pt-4">
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="inline-flex items-center gap-2 text-xs bg-accent-start text-text-primary font-semibold py-2 px-4 rounded-full hover:scale-105 transition-transform"
                      >
                        <Mail size={12} />
                        <span>邮件洽谈 // GET TOUCH</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Exploration Image Catalog Reader Modal */}
          <AnimatePresence>
            {selectedExploration && (
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedExploration(null)}
                  className="absolute inset-0 bg-black/90 backdrop-blur-md"
                />
                
                <motion.div
                  initial={{ scale: 0.95, y: 30, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 30, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="relative w-full max-w-5xl overflow-hidden bg-bg border border-stroke rounded-3xl flex flex-col shadow-2xl max-h-[92vh]"
                >
                  {/* Modal Header */}
                  <div className="flex justify-between items-center bg-surface border-b border-stroke px-6 py-5 shrink-0 z-10">
                    <div>
                      <span className="text-[10px] font-mono text-accent-start uppercase tracking-[0.2em] block">
                        {selectedExploration.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary leading-tight mt-0.5">
                        {selectedExploration.title}
                      </h3>
                      {selectedExploration.enTitle && (
                        <p className="text-[10px] md:text-xs font-mono text-neutral-400 tracking-wide uppercase mt-0.5">
                          {selectedExploration.enTitle}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedExploration(null)}
                      className="p-2 bg-stroke hover:bg-stroke/80 rounded-full text-text-primary hover:scale-105 transition-all text-sm cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Body layout */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Main Image Scrollable Section */}
                    <div 
                      className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 custom-scrollbar scroll-smooth"
                      id="exploration-images-container"
                      onScroll={(e) => {
                        const container = e.currentTarget;
                        const children = container.querySelectorAll('[id^="subimg-"]');
                        let bestIdx = 0;
                        let minDiff = Infinity;
                        children.forEach((child, idx) => {
                          const rect = child.getBoundingClientRect();
                          const containerRect = container.getBoundingClientRect();
                          const diff = Math.abs((rect.top + rect.height/2) - (containerRect.top + containerRect.height/2));
                          if (diff < minDiff) {
                            minDiff = diff;
                            bestIdx = idx;
                          }
                        });
                        
                        // Dynamically update active index in side indicator
                        const indicatorDots = document.querySelectorAll('[id^="indicator-dot-"]');
                        indicatorDots.forEach((dot, dotIdx) => {
                          if (dotIdx === bestIdx) {
                            dot.classList.add("bg-accent-start", "border-accent-start", "scale-110", "font-bold", "text-white");
                            dot.classList.remove("border-stroke", "text-muted");
                          } else {
                            dot.classList.remove("bg-accent-start", "border-accent-start", "scale-110", "font-bold", "text-white");
                            dot.classList.add("border-stroke", "text-muted");
                          }
                        });
                      }}
                    >
                      {/* Sub-Images Series or Main Image if no sub images */}
                      {selectedExploration.subImages && selectedExploration.subImages.length > 0 ? (
                        selectedExploration.subImages.map((imgUrl: string, sIdx: number) => (
                          <div 
                            key={sIdx} 
                            id={`subimg-${sIdx}`} 
                            className="w-full flex flex-col items-center gap-3 border-b border-stroke/30 pb-8 last:border-b-0 last:pb-0"
                          >
                            <div className={`rounded-xl overflow-hidden border border-stroke flex items-center justify-center shadow-xl w-fit max-w-full mx-auto ${selectedExploration.id === 'exp_04' ? 'bg-transparent' : 'bg-black/40'}`}>
                              <img 
                                src={imgUrl} 
                                alt={`${selectedExploration.title} Series - ${sIdx + 1}`}
                                referrerPolicy="no-referrer"
                                className={`h-auto object-contain max-h-[70vh] rounded-xl ${selectedExploration.id === 'exp_04' ? 'w-auto' : 'w-full'}`} 
                              />
                            </div>
                            <div className="w-full flex flex-row justify-between items-center text-[10px] font-mono text-muted px-2 select-none">
                              <span className="text-accent-start font-bold uppercase tracking-widest">// ITEM_SERIES_INDEX: {(sIdx + 1).toString().padStart(2, '0')}</span>
                              <span>
                                {selectedExploration.id === "exp_04" 
                                  ? "1080 × 1920 (9:16 WEBP)" 
                                  : selectedExploration.id === "exp_05"
                                  ? "800 × 800 (1:1 HD WEBP)"
                                  : "1280 × 720 (16:9 HD WEBP)"}
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div id="subimg-0" className="w-full flex flex-col items-center gap-3">
                          <div className={`rounded-xl overflow-hidden border border-stroke flex items-center justify-center shadow-xl w-fit max-w-full mx-auto ${selectedExploration.id === 'exp_04' ? 'bg-transparent' : 'bg-black/40'}`}>
                            <img 
                              src={selectedExploration.image} 
                              alt={selectedExploration.title} 
                              referrerPolicy="no-referrer"
                              className={`h-auto object-contain max-h-[70vh] rounded-xl ${selectedExploration.id === 'exp_04' ? 'w-auto' : 'w-full'}`} 
                            />
                          </div>
                          <p className="text-xs text-muted font-body leading-relaxed max-w-xl text-center mt-2 px-6">
                            {selectedExploration.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Numeric Side Scroll Indicator Bar (Visible on mid devices) */}
                    {selectedExploration.subImages && selectedExploration.subImages.length > 0 && selectedExploration.id !== "exp_04" && (
                      <div className="hidden md:flex flex-col gap-1.5 items-center justify-start py-6 px-4 border-l border-stroke bg-surface/20 min-w-[75px] select-none h-full overflow-y-auto scrollbar-none">
                        <span className="text-[8px] font-mono text-muted uppercase tracking-[0.2em] mb-4 text-center">NAV MAP</span>
                        {selectedExploration.subImages.map((_: string, sIdx: number) => (
                          <button
                            key={sIdx}
                            id={`indicator-dot-${sIdx}`}
                            onClick={() => {
                              const target = document.getElementById(`subimg-${sIdx}`);
                              if (target) {
                                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              }
                            }}
                            className={`w-7 h-7 rounded-full border text-[9px] font-mono flex items-center justify-center transition-all cursor-pointer ${
                              sIdx === 0
                                ? 'bg-accent-start border-accent-start text-white scale-110 font-bold' 
                                : 'border-stroke text-muted hover:border-neutral-400'
                            }`}
                            title={`Jump to image ${(sIdx + 1).toString().padStart(2, '0')}`}
                          >
                            {(sIdx + 1).toString().padStart(2, '0')}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Interactive full Resume modal sheet */}
          <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

          {/* Mobile indicator line on top of screen */}
          <div 
            className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-accent-start to-accent-end z-[110] transition-all duration-75 pointer-events-none"
            style={{ width: `${scrollPercent}%` }}
          />

          {/* Right side sci-fi progress bar & section indicator */}
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[45] hidden xl:flex flex-col items-center gap-5 py-6 px-3 bg-[#0a0a0b]/80 backdrop-blur-xl rounded-full border border-stroke/40 select-none shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            {/* Top vertical label */}
            <span className="text-[7.5px] font-mono tracking-[0.25em] text-stone-500 uppercase select-none [writing-mode:vertical-lr] scale-90 mb-1">
              PROGRESS
            </span>

            {/* Glowing vertical progress line track */}
            <div className="w-[2px] h-24 bg-[#18181b] rounded-full relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-start to-accent-end rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)] transition-all duration-75"
                style={{ height: `${scrollPercent}%` }}
              />
            </div>

            {/* Live percentage ticker */}
            <span className="font-mono text-[9px] font-bold text-accent-start select-none w-7 text-center tabular-nums">
              {Math.round(scrollPercent).toString().padStart(2, "0")}%
            </span>

            {/* Tiny spacer */}
            <div className="w-4 h-[1px] bg-stroke/30" />

            {/* Interactive Section Dot Nodes */}
            <div className="flex flex-col gap-3.5">
              {[
                { id: "home", label: "首页 / Top" },
                { id: "work", label: "代表项目 / Projects" },
                { id: "journal", label: "工作经历 / Experience" },
                { id: "methodology", label: "设计方法论 / Methodology" },
                { id: "explorations", label: "作品展示 / Gallery" },
                { id: "contact", label: "联系我 / Contact" }
              ].map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => {
                    const target = document.getElementById(sec.id);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="group relative flex items-center justify-center p-0.5 cursor-pointer"
                  title={sec.label}
                >
                  <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === sec.id 
                      ? "bg-accent-start scale-110 shadow-[0_0_8px_rgba(14,165,233,0.9)]" 
                      : "bg-[#1f1f23] hover:bg-stone-500 hover:scale-105"
                  }`} />
                  <span className="absolute right-7 py-1 px-2.5 rounded-md bg-[#0a0a0b]/95 border border-stroke/70 text-[9px] text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none shadow-2xl">
                    {sec.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Floating Back to Top button with AnimatePresence */}
          <AnimatePresence>
            {scrollPercent > 12 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 15 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 z-[49] p-3 rounded-full bg-[#0a0a0b]/80 backdrop-blur-md border border-stroke hover:border-accent-start/40 text-text-primary hover:text-accent-start shadow-2xl flex items-center justify-center cursor-pointer group"
                title="回到顶部 / Back to Top"
              >
                <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                
                {/* Visual tooltip */}
                <span className="absolute right-12 opacity-0 group-hover:opacity-100 bg-[#0a0a0b]/90 border border-stroke text-[9px] text-text-primary font-mono py-1 px-2 rounded-md whitespace-nowrap transition-opacity pointer-events-none shadow-lg">
                  回到顶部 / BACK TO TOP
                </span>
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      )}

      {/* Floating Background Music Player */}
      <AudioPlayer isLoading={isLoading} />

    </div>
  );
}
