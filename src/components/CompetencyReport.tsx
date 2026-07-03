import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, 
  Clock, 
  Lightbulb, 
  ShieldAlert, 
  UserCheck, 
  Cpu, 
  Compass, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Bookmark, 
  Boxes,
  Briefcase,
  Layers,
  ChevronRight,
  Sparkles,
  BarChart4,
  ExternalLink,
  Award,
  X
} from "lucide-react";

export default function CompetencyReport() {
  const [activeTab, setActiveTab] = useState<"cognition" | "metrics" | "methodology" | "roadmap">("cognition");
  const [methodologyCategory, setMethodologyCategory] = useState<"beauty" | "appliances" | "auto">("beauty");
  const [metricsMode, setMetricsMode] = useState<"ctr" | "time">("ctr");
  const [isZoomed, setIsZoomed] = useState(false);
  const [modalStepTab, setModalStepTab] = useState<"kpi" | "step1" | "step2" | "step3" | "step4">("kpi");

  const tabs = [
    { id: "cognition", label: "岗位认知与痛点策略", desc: "Job Cognition & Roles" },
    { id: "metrics", label: "数据对比与成长轨迹", desc: "Data Metrics & History" },
    { id: "methodology", label: "爆款方法论与 AIGC 链", desc: "Methodology & AIGC SOP" },
    { id: "roadmap", label: "团队规划、加减法与 OKR", desc: "Roadmap & OKR Targets" }
  ] as const;

  const brands = [
    { name: "飞利浦 / Philips", category: "美妆/个护" },
    { name: "京东养车", category: "汽车服务" },
    { name: "京东超市", category: "商超百货" },
    { name: "京东健康", category: "医疗健康" },
    { name: "菲拉格慕 / Ferragamo", category: "国际轻奢" },
    { name: "洋河股份", category: "国品白酒" },
    { name: "倍轻松", category: "健康按摩" },
    { name: "同仁堂", category: "传统国药" },
    { name: "21金维他", category: "营养保健" },
    { name: "澳佳宝 / Blackmores", category: "国际膳食" }
  ];

  return (
    <div id="competency-report-container" className="w-full flex flex-col gap-10 font-sans">
      
      {/* ==========================================
          Part A: Current Company Experience Card 
         =========================================== */}
      <div id="company-experience-card" className="relative rounded-3xl bg-surface/40 border border-stroke p-6 md:p-8 space-y-6 overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent-start/5 blur-[80px] rounded-full -z-10" />
        
        {/* Title and Meta Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stroke">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-start" />
              <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">北京源东运营宝科技有限公司</h3>
            </div>
            <p className="text-xs text-stone-400 font-mono tracking-wider">// 电商广告投放设计师 & 视觉设计师</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#89AACC] border border-accent-start/30 bg-accent-start/5 px-3.5 py-1 rounded-full bg-black/40">
              2022.07 - 至今
            </span>
          </div>
        </div>

        {/* Brands Section */}
        <div id="brands-section" className="space-y-2.5">
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block">// 深度服务头部大品牌 (SERVICED BRANDS)</span>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand, i) => (
              <div 
                key={i}
                className="px-3 py-1 rounded-full bg-surface/80 border border-white/5 text-[11px] flex items-center gap-1.5 transition-colors hover:border-[#89AACC]/30"
              >
                <span className="text-text-primary font-bold">{brand.name}</span>
                <span className="text-[9px] text-stone-500 font-mono px-1 rounded bg-bg/50">{brand.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Work duties & Achievements grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Work scope list */}
          <div className="p-5 rounded-2xl bg-black/20 border border-stroke/55 space-y-3">
            <div className="flex items-center gap-2">
              <Briefcase size={14} className="text-accent-start" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">核心工作范围 // WORK SCOPE</h4>
            </div>
            <ul className="text-xs text-neutral-300 space-y-2.5 list-none pl-1">
              <li className="flex items-start gap-2">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span>统筹飞利浦、倍轻松、澳佳宝、同仁堂等品牌京东自营全链路广告视觉与投放设计；</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span><strong>站内：</strong>负责日常店铺视觉运维、店铺品专、京选资源位、商品车图及首焦大图精修；</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span><strong>站外：</strong>承接爱奇艺、腾讯、QQ音乐等各大平台开屏及信息流广告的视觉落地；</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span>围绕 618 / 双 11 / 双 12 等大促节点，带领组员独立完成高强度全周期营销设计。</span>
              </li>
            </ul>
          </div>

          {/* Core Performance block */}
          <div className="p-5 rounded-2xl bg-black/20 border border-stroke/55 space-y-3">
            <div className="flex items-center gap-2">
              <Award size={14} className="text-[#89AACC]" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">工作业绩与可衡量成果 // PERFORMANCE</h4>
            </div>
            <ul className="text-xs text-neutral-300 space-y-2.5 list-none pl-1">
              <li className="flex items-start gap-2">
                <span className="text-[#89AACC] text-[14px] leading-none mt-0.5">•</span>
                <span><strong>大促业绩：</strong>负责期间店铺 618 大销额同比提升 130%，多项高光主视觉极大提高点击率；</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#89AACC] text-[14px] leading-none mt-0.5">•</span>
                <span><strong>直客认可：</strong>优秀商业视觉素材获品牌官方直接认可赞扬，助力部门荣膺五星代理商资质；</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#89AACC] text-[14px] leading-none mt-0.5">•</span>
                <span><strong>团队赋能：</strong>制定投放大促 SOP 设计规范提升产效，且热心帮带多名组内初等设计师融入岗位。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ==========================================
          Part B: Extended Competency Report
         =========================================== */}
      <div id="methodology" className="space-y-6 pt-12 border-t border-stroke/50 mt-4 scroll-mt-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column: Title and SOP Switch Button */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-pulse" />
                <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-mono">DESIGN METHODOLOGY & PROCESS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-text-primary tracking-tight leading-none">
                设计方法论 • Design & <span className="font-display italic font-bold text-accent-start text-4xl md:text-5xl">Methodology</span>
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 font-body leading-relaxed max-w-2xl">
                多维度聚焦大促期间的高转商业逻辑，在保持高标准美学的同时，利用 AI 复合流程最大效率提升出图效能。
              </p>
            </div>

            {/* Action buttons/badges */}
            <div className="flex flex-wrap gap-2 items-center pt-1">
              <span className="text-[10px] uppercase font-mono bg-stroke/50 border border-white/5 text-muted px-3 py-1 rounded-full">
                SOP 方法体系 // STRATEGIC FRAMEWORK
              </span>
              <button 
                type="button"
                onClick={() => {
                  const nextTabMap: Record<string, "cognition" | "metrics" | "methodology" | "roadmap"> = {
                    cognition: "metrics",
                    metrics: "methodology",
                    methodology: "roadmap",
                    roadmap: "cognition",
                  };
                  setActiveTab(nextTabMap[activeTab]);
                }}
                className="flex gap-2 items-center justify-center px-4 py-1 bg-accent-start text-bg hover:opacity-90 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer group"
              >
                <Sparkles size={11} className="animate-spin-slow text-[#222]" />
                <span className="text-[#222]">切换视图 // SWITCH VIEW</span>
                <ChevronRight size={11} className="transition-transform group-hover:translate-x-1 text-[#222]" />
              </button>
            </div>
          </div>

          {/* Right Column: Image Showcase Thumbnail */}
          <div className="lg:col-span-5 w-full">
            <div 
              onClick={() => setIsZoomed(true)} 
              className="relative group rounded-2xl overflow-hidden border border-stroke/80 bg-surface/30 p-1.5 shadow-xl transition-all duration-300 hover:border-accent-start/40 max-w-lg mx-auto lg:max-w-none cursor-pointer"
            >
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-950">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                
                <img 
                  src="https://i.postimg.cc/xTm47LK6/zuo-pin-hui-zong-1280X720.png" 
                  alt="作品汇总 Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                />

                {/* Hover overlay */}
                <div className="w-full h-full absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 backdrop-blur-[2px] z-20">
                  <div className="p-2.5 rounded-full bg-accent-start/95 text-bg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Sparkles size={14} className="text-[#222]" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#89AACC] font-bold uppercase">
                    查看完整大图 // VIEW FULL WORK
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center px-1.5 pt-2 pb-0.5 text-[8px] font-mono text-muted uppercase tracking-wider">
                <span>[ SHOWCASE PREVIEW ]</span>
                <span className="text-stone-600">// Click to enlarge</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Tabs bar */}
        <div className="relative flex flex-wrap gap-1 p-1 bg-surface border border-stroke rounded-2xl md:rounded-full justify-between items-center w-full">
          <div className="flex flex-wrap items-center gap-1 md:gap-0 flex-1 w-full">
            {tabs.map((tab, index) => {
              const isSelected = activeTab === tab.id;
              return (
                <div key={tab.id} className="flex items-center flex-1 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer select-none text-left md:text-center flex-1 ${
                      isSelected 
                        ? "text-[#89AACC]" 
                        : "text-muted hover:text-text-primary hover:bg-stroke/40"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="report-active-tab-indicator"
                        className="absolute inset-0 rounded-xl md:rounded-full bg-bg border border-accent-start/40 shadow-[0_0_10px_rgba(137,170,204,0.1)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <div className="flex flex-row items-center justify-center gap-2">
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded transition-all shrink-0 ${
                        isSelected 
                          ? "bg-[#89AACC]/20 text-[#89AACC] border border-[#89AACC]/20" 
                          : "bg-surface border border-stroke text-muted"
                      }`}>
                        {index + 1}
                      </span>
                      <div className="text-left md:text-center">
                        <div className="block leading-tight font-body font-bold text-xs">{tab.label}</div>
                        <div className={`hidden lg:block text-[8px] font-mono tracking-widest uppercase mt-0.5 ${isSelected ? "text-[#89AACC]/75" : "text-stone-550"}`}>
                          {tab.desc}
                        </div>
                      </div>
                    </div>
                  </button>
                  {index < tabs.length - 1 && (
                    <div className="hidden md:block w-3 lg:w-6 h-[1px] shrink-0 mx-0.5">
                      <div className="w-full h-full border-t border-dashed border-[#89AACC]/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative min-h-[460px] w-full rounded-3xl bg-surface/30 border border-stroke/70 p-5 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-accent-start/5 via-transparent to-transparent -z-10" />
          
          <AnimatePresence mode="wait">
            {activeTab === "cognition" && (
              <motion.div
                key="cognition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 01 // JOB COGNITION</div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary tracking-tight">从单点素材开发演进为全链路商业策略</h3>
                  <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
                    在存量流量大盘与媒介碎片形式中，设计不再只是局部的静态修图，而是必须与大盘转化率（CTR）等经营核心紧密贴合。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Item 1 */}
                  <div className="p-4.5 rounded-xl bg-surface border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-start/10 border border-accent-start/20 flex items-center justify-center text-accent-start">
                      <ShieldAlert size={14} />
                    </div>
                    <h4 className="text-xs font-bold text-text-primary">行业痛点：素材严重陷入红海竞争</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed text-justify">
                      大促开屏素材极度同质化，粗放搬模板严重耗竭了用户耐心；缺乏敏捷探索手段导致测试成本过高。
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-4.5 rounded-xl bg-surface border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-start/10 border border-accent-start/20 flex items-center justify-center text-accent-start">
                      <Zap size={14} />
                    </div>
                    <h4 className="text-xs font-bold text-text-primary">核心挑战：缺乏标准化可复用沉淀</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed text-justify">
                      日常零散探索耗竭时间预算，单次爆品思路不可复制，设计大样由于多方理解歧义容易频繁沟通返工。
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="p-4.5 rounded-xl bg-surface border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-start/10 border border-accent-start/20 flex items-center justify-center text-accent-start">
                      <UserCheck size={14} />
                    </div>
                    <h4 className="text-xs font-bold text-text-primary">高阶角色：紧跟时代，重构赋能</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed text-justify">
                      设计师承担“团队高产赋能者”等重要角色，通过引入前沿 AIGC 多模型及搭建资产规范，驱动出图速度爆发。
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center text-xs">
                  <div>
                    <h4 className="font-bold text-text-primary">终极落地导向 // VALUE DESIGN</h4>
                    <p className="text-stone-400 tracking-wide mt-0.5">理性的数据度量结合卓越中式美学，构筑可量化的商业高产出。</p>
                  </div>
                  <div className="flex gap-2 text-center text-[11px] font-mono">
                    <span className="px-2.5 py-1 rounded bg-bg/50 border border-stroke text-stone-300">SOP 团队标准化</span>
                    <span className="px-2.5 py-1 rounded bg-bg/50 border border-stroke text-stone-300">提速减压 30%+</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "metrics" && (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-end">
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 02 // PERFORMANCE METRICS</div>
                    <h3 className="text-lg md:text-xl font-bold text-text-primary tracking-tight">硬核数据飞升与 5 年任职成长轨迹</h3>
                  </div>

                  {/* Switch button */}
                  <div className="flex rounded-full bg-bg border border-stroke p-0.5 text-[9px] font-bold">
                    <button 
                      type="button"
                      onClick={() => setMetricsMode("ctr")}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${metricsMode === "ctr" ? "bg-accent-start text-bg" : "text-muted hover:text-text-primary"}`}
                    >
                      大促高光点击率
                    </button>
                    <button 
                      type="button"
                      onClick={() => setMetricsMode("time")}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${metricsMode === "time" ? "bg-accent-start text-bg" : "text-muted hover:text-text-primary"}`}
                    >
                      出图工时改进
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Chart Panel */}
                  <div className="lg:col-span-7 bg-surface/50 border border-stroke rounded-2xl p-5 space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-text-primary uppercase tracking-wider font-mono">
                        {metricsMode === "ctr" ? "日常/大促 站外全渠道综合 CTR 指标" : "单张大促高质素材出图时间指标"}
                      </span>
                      <span className="text-accent-start font-mono font-bold bg-[#89AACC]/10 px-2 py-0.5 rounded-full">
                        {metricsMode === "ctr" ? "数据攀高逾 +50%" : "敏捷度提升 +53%"}
                      </span>
                    </div>

                    <div className="space-y-4 py-2">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] text-stone-400">
                          <span>行业平均 / 组内常规水平</span>
                          <span>{metricsMode === "ctr" ? "8.00% CTR" : "1.50 Hours (90分钟)"}</span>
                        </div>
                        <div className="h-3 bg-bg rounded-full overflow-hidden border border-stroke">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: metricsMode === "ctr" ? "66%" : "100%" }}
                            className="h-full bg-stone-600"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] text-text-primary font-bold">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-ping" />
                            庄嘉绪 精雕创意（引入 AIGC SOP 支撑）
                          </span>
                          <span className="text-accent-start font-mono">{metricsMode === "ctr" ? "12.00% CTR" : "0.70 Hours (约40分钟)"}</span>
                        </div>
                        <div className="h-3 bg-bg rounded-full overflow-hidden border border-accent-start/20">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: metricsMode === "ctr" ? "100%" : "46%" }}
                            className="h-full bg-accent-start"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stroke text-[10px] text-stone-500 font-mono leading-relaxed flex items-start gap-1.5">
                      <BarChart4 size={12} className="text-accent-start shrink-0 mt-0.5" />
                      <span>通过沉淀的 AIGC 海量预设和标化模板库，CTR 水平极佳地在多赛道达成飞升，同时单幅成片的微多维开发耗时被完美压缩。</span>
                    </div>
                  </div>

                  {/* Year Timeline column */}
                  <div className="lg:col-span-5 space-y-4">
                    <h4 className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">// 五年职业轨迹成长与沉淀</h4>
                    
                    <div className="space-y-2 relative before:absolute before:left-3 before:top-1.5 before:bottom-1.5 before:w-px before:bg-stroke text-xs">
                      {[
                        { yr: "26", t: "全域大促高阶创意与 AIGC 深度提产", d: "主导深度 AI 模型全链路打通，最大化释放组员的基础劳动。" },
                        { yr: "25", t: "SOP 化规范沉淀与成稿效率改进", d: "主编品类大促视觉指南，使成片核心用时在重压期间仍保持精简。" },
                        { yr: "24", t: "30+ 品牌竞标高能拿下与协作", d: "组内出图效能第一，积极联同投放开发契合痛点的标杆高点素材。" },
                        { yr: "22-23", t: "快消、3C、汽车多赛道攻尖", d: "快速融入京东平台运维视觉，扎根积累了丰富的全品类商业实战经验。" }
                      ].map((item, id) => (
                        <div key={id} className="flex gap-3 pl-1.5 relative">
                          <div className="w-6 h-6 rounded-full bg-accent-start/10 border border-stroke flex items-center justify-center font-mono text-[9px] font-bold text-accent-start shrink-0 relative z-10">
                            {item.yr}
                          </div>
                          <div className="space-y-[1px]">
                            <span className="font-bold text-neutral-200">{item.t}</span>
                            <p className="text-[10px] text-stone-400 font-body leading-tight">{item.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "methodology" && (
              <motion.div
                key="methodology"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 03 // VISUAL GOLDEN LAWS</div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary tracking-tight">大促品类黄金法则与 AIGC 精细工具栈</h3>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                  {/* Selector Left */}
                  <div className="flex md:flex-col gap-1.5 md:w-44 shrink-0">
                    {[
                      { id: "beauty", label: "高端美妆品类 💄", desc: "高级流光、极奢细腻" },
                      { id: "appliances", label: "硬核数码家电 🔌", sub: "沉浸氛围、极客智慧" },
                      { id: "auto", label: "车载出行养车 🚗", desc: "张力飞驰、高点击爆降" }
                    ].map((cat) => {
                      const isSel = methodologyCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setMethodologyCategory(cat.id as any)}
                          className={`px-3 py-2 rounded-xl border text-left flex flex-col justify-center transition-all w-full cursor-pointer select-none ${isSel ? "border-accent-start/30 bg-accent-start/5 text-accent-start" : "border-stroke bg-transparent text-stone-400 hover:text-text-primary"}`}
                        >
                          <span className="text-[11px] font-bold">{cat.label}</span>
                          <span className="text-[8px] font-mono uppercase tracking-wider block mt-0.5 text-stone-500">{cat.desc || "家电数码"}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Content Right */}
                  <div className="flex-1 bg-surface/40 border border-stroke rounded-2xl p-4.5 min-h-[140px] flex flex-col justify-between text-xs">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-1.5 border-b border-stroke">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-text-primary font-bold">// 类目视觉特征核心 & 质感落脚点</span>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-450 border border-emerald-500/10 px-1.5 py-0.2 rounded font-mono font-medium">精准对齐</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body text-justify">
                        {methodologyCategory === "beauty" ? (
                          <>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">核心美学表达</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">强调通透无杂物的国际排版版面，突出极简。流露轻奢的高定呼吸空间。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">高光反色材质</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">细腻玻璃颗粒，带有微高透打光与典雅配方微距景深折射表现。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">落墨提词金位</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">主打产品特写，除去生硬乱套的边框，体现奢华品牌的原生高级质感。</p>
                            </div>
                          </>
                        ) : methodologyCategory === "appliances" ? (
                          <>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">核心美学表达</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">注重体现浓郁温润的三维居家灯光。使硬核设备完美融入智能家居橱窗。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">高光反色材质</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">拉丝阳极氧化铝，亚光金属质地，恰如其分的线条光流，体现未来感。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">落墨提词金位</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">全卡片规整网格参数，一目了然核心卖点。产品立体透视精确，科技温暖对撞。</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">核心美学表达</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">突出强韧有力的临空张力性能。打造飞驰的速度场，第一秒激发雄厚共鸣。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">高光反色材质</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">磨砂深暗橡胶与霓虹反光。飞速甩尾的橡胶磨砂与光粒子虚化，直截了当。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-bold text-text-primary">落墨提词金位</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">突出底价折扣冲击卡片，和大闸大开大促氛围深度包裹，具有无谓的极高吸取力。</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stroke text-[10px] text-stone-500 font-mono italic">
                      {methodologyCategory === "beauty" && "“La Mer 等高端个护设计要用纯粹呼吸的底打色，空灵而不失典雅，激发高知用户停留停留。”"}
                      {methodologyCategory === "appliances" && "“硬铝数码家电要讲究家居柔光对撞，生冷机器也有温馨家庭感，促成深度停留决策。”"}
                      {methodologyCategory === "auto" && "“出行养车则必须爆发直接感官抓取，光带呼应、折扣显眼，大促点击暴升第一要诀。”"}
                    </div>
                  </div>
                </div>

                {/* Golden Rules */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 bg-stroke/25 border border-white/5 rounded-xl space-y-1">
                    <span className="text-[9px] font-mono text-accent-start font-bold">// LAW 01 //</span>
                    <h5 className="text-[11px] font-bold text-white">卖点一秒识 (Clear Messaging)</h5>
                    <p className="text-[10px] text-stone-400 leading-normal text-justify">
                      大标题和核心大数值紧密咬合，拒绝漫无焦点的铺贴，让高压下的浏览者快速解密大促终极价值。
                    </p>
                  </div>
                  <div className="p-3.5 bg-stroke/25 border border-white/5 rounded-xl space-y-1">
                    <span className="text-[9px] font-mono text-accent-start font-bold">// LAW 02 //</span>
                    <h5 className="text-[11px] font-bold text-white">情态全代入 (Environment Shift)</h5>
                    <p className="text-[10px] text-stone-400 leading-normal text-justify">
                      通过模拟 3D 光感氛围在脑中构建“未来生活体验橱窗”，唤起切实的质地与把持感，大幅拉高信任。
                    </p>
                  </div>
                  <div className="p-3.5 bg-stroke/25 border border-white/5 rounded-xl space-y-1">
                    <span className="text-[9px] font-mono text-accent-start font-bold">// LAW 03 //</span>
                    <h5 className="text-[11px] font-bold text-white">立卡数据聚 (Clean Data Card)</h5>
                    <p className="text-[10px] text-stone-400 leading-normal text-justify">
                      打通国补、折算卡片与主图投影结合。用高级钛白/银亮/烫金去聚焦视点，既专业精致又粗暴高效。
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "roadmap" && (
              <motion.div
                key="roadmap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 04 // OKR & FUTURE PLANNING</div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary tracking-tight">降本增效与长期团队价值加减法</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Addition */}
                  <div className="p-4.5 rounded-xl bg-surface border border-accent-start/20 relative overflow-hidden">
                    <div className="absolute right-4 top-2 text-2xl font-mono italic opacity-5 font-bold">+ ADDITION</div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-accent-start bg-accent-start/10 px-2 py-0.5 rounded uppercase font-bold">// 加法：做实核心素质与 AIGC 精研</span>
                      <ul className="text-[11px] text-stone-300 space-y-2 list-disc pl-4 pt-1 leading-normal">
                        <li><strong>AI 技术全线赋能：</strong>制定完工度极高的大促预设备战库，定期组织交流提升团队整体水平。</li>
                        <li><strong>打通推广多维对齐：</strong>建立“大促高CTR案例库”，与投手、推广和运营深度对接，用数据量化创意。</li>
                      </ul>
                    </div>
                  </div>

                  {/* Subtraction */}
                  <div className="p-4.5 rounded-xl bg-surface border border-stone-800 relative overflow-hidden">
                    <div className="absolute right-4 top-2 text-2xl font-mono italic opacity-5 font-bold">- SUBTRACTION</div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-stone-500 bg-stone-900 px-2 py-0.5 rounded uppercase font-bold">// 减法：砍掉重复空耗与盲目低端探索</span>
                      <ul className="text-[11px] text-stone-300 space-y-2 list-disc pl-4 pt-1 leading-normal">
                        <li><strong>自动化批量出图：</strong>卡片化常规 Banner、主图边框（打通 PSD 自动化套图），解放高级设计师双手。</li>
                        <li><strong>灰度预选降低理解空耗：</strong>在大面积投产前快速抽卡 A/B 灰度测试反馈，终结冗余繁杂的打样空耗。</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Milestone Roadmap */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">// 行星交付一整年里程碑</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                    <div className="p-4 rounded-xl bg-stroke/30 border border-white/5 space-y-1.5 relative">
                      <div className="absolute -top-3.5 left-4 bg-stone-900 border border-stone-800 rounded-full w-6 h-6 text-[9px] font-mono font-bold flex items-center justify-center text-accent-start">01</div>
                      <div className="pt-1">
                        <strong className="text-text-primary text-[11px]">阶段 1: 建立基础版款式库 (1-3月)</strong>
                        <p className="text-[10px] text-stone-400 leading-snug mt-1 text-justify">
                          打通品类专属主视觉版式。自动化套图占比爬高至 40%，建立顺畅 AIGC 提速素材测试包。
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-stroke/30 border border-white/5 space-y-1.5 relative">
                      <div className="absolute -top-3.5 left-4 bg-stone-900 border border-stone-800 rounded-full w-6 h-6 text-[9px] font-mono font-bold flex items-center justify-center text-accent-start">02</div>
                      <div className="pt-1">
                        <strong className="text-text-primary text-[11px]">阶段 2: 团队效能彻底精进 (4-6月)</strong>
                        <p className="text-[10px] text-stone-400 leading-snug mt-1 text-justify">
                          设计组内部深度共享高写实中式红绸、立体科技 3D 配件资产预设，在高效 OKR 下实现人员的高阶赋能。
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-stroke/30 border border-white/5 space-y-1.5 relative">
                      <div className="absolute -top-3.5 left-4 bg-stone-900 border border-stone-800 rounded-full w-6 h-6 text-[9px] font-mono font-bold flex items-center justify-center text-accent-start">03</div>
                      <div className="pt-1">
                        <strong className="text-text-primary text-[11px]">阶段 3: 标杆长效高转输出 (7-12月)</strong>
                        <p className="text-[10px] text-stone-400 leading-snug mt-1 text-justify">
                          形成完善大促高转化设计指南，多品类直客交付通过率整体跃升 20% 以上，团队实现顶峰高转化率稳定产出。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Internal Zoom Lightbox Modal */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-[200] overflow-y-auto bg-black/95 backdrop-blur-md pb-16 font-sans">
            <div className="min-h-screen py-8 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start pointer-events-none relative">
              {/* Background click listener to dismiss */}
              <div 
                className="absolute inset-0 cursor-pointer pointer-events-auto" 
                onClick={() => setIsZoomed(false)} 
              />
              
              <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-5xl bg-bg border border-stroke rounded-3xl p-6 md:p-8 shadow-2xl pointer-events-auto z-10 flex flex-col gap-6"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="absolute top-4 right-4 p-2 rounded-full border border-stroke bg-surface hover:bg-stroke text-stone-400 hover:text-text-primary transition-colors cursor-pointer select-none"
                >
                  <X size={16} />
                </button>

                {/* Modal Title Banner */}
                <div className="space-y-1 pr-10">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-accent-start animate-pulse" />
                    <span className="text-[10px] font-mono uppercase text-accent-start tracking-wider">AIGC SOP & WORK COMPETENCY CASE STUDIES</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary tracking-tight">AI 提效全链路及核心案例展示 // ADVANCED AIGC WORKFLOW</h3>
                </div>

                {/* Modal Tabs Selector */}
                <div className="flex flex-wrap gap-2 pb-3 border-b border-stroke/60">
                  {[
                    { id: "kpi", label: "大盘效能对比", desc: "Core KPI" },
                    { id: "step1", label: "01.视角重构底稿", desc: "Perspective" },
                    { id: "step2", label: "02.全链路生成中枢", desc: "SOP Pipeline" },
                    { id: "step3", label: "03.多工具矩阵拼图", desc: "Synergy Matrix" },
                    { id: "step4", label: "04.徐福记大促首焦", desc: "Case Study" },
                  ].map((t) => {
                    const isSel = modalStepTab === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setModalStepTab(t.id as any)}
                        className={`px-4 py-2 text-xs rounded-full border transition-all cursor-pointer text-left flex-1 sm:flex-initial min-w-[120px] ${
                          isSel
                            ? "border-accent-start/50 bg-accent-start/10 text-accent-start font-bold"
                            : "border-stroke bg-surface/50 text-stone-400 hover:text-text-primary hover:bg-stroke/40"
                        }`}
                      >
                        <div className="font-bold leading-tight">{t.label}</div>
                        <div className="text-[9px] font-mono opacity-60 uppercase">{t.desc}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Panels */}
                <div className="bg-surface/30 border border-stroke rounded-2xl p-5 md:p-6 min-h-[300px]">
                  <AnimatePresence mode="wait">
                    {modalStepTab === "kpi" && (
                      <motion.div
                        key="kpi"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 维度评估量化 // CORE HIGHLIGHTS</span>
                          <h4 className="text-base font-bold text-text-primary">构筑 AI 提效生命线：端到端工作流革命</h4>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed font-body">
                          构建了 <strong className="text-accent-start">“文案设计 - 背景生成 - 素材排版”</strong> 全链路 AI 协同工作流，摒弃了单一、割裂环节的优化，实现大盘全案端到端的极速交付，并在项目流程中达成完美的 100% 可复制及赋能组员能力。
                        </p>
                        
                        {/* KPI Grid Breakdown */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
                          {/* Traditional Flow */}
                          <div className="border border-red-500/10 bg-red-950/5 rounded-2xl p-4 md:p-5 space-y-4">
                            <div className="flex items-center justify-between border-b border-red-500/10 pb-2">
                              <span className="text-[10px] font-mono text-red-400 font-bold tracking-wider uppercase">// 传统视觉执行 SOP (TRADITIONAL)</span>
                              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-red-500/10 text-red-400 font-semibold border border-red-500/20">LOW EFFICIENCY</span>
                            </div>
                            <div className="space-y-3 text-xs">
                              <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                <div className="space-y-0.5">
                                  <strong className="text-neutral-200 block">拍摄及素材返工依赖度极高</strong>
                                  <span className="text-neutral-400 leading-relaxed block">实拍往往角度或光影不合，安排影棚二次补拍拉长 2~3 天大促黄金周期，耗时耗财。</span>
                                </div>
                              </div>
                              <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-550 flex items-center justify-center font-bold shrink-0 mt-0.5">✕</span>
                                <div className="space-y-0.5">
                                  <strong className="text-neutral-200 block">常规多图层手工精修抠图</strong>
                                  <span className="text-neutral-400 leading-relaxed block">大促多品类日常堆叠，手工钢笔细节刻画耗费极高精力，单个主图初稿拼贴平均用时约 2 小时。</span>
                                </div>
                              </div>
                            </div>
                            <div className="pt-2 border-t border-red-500/10 flex justify-between items-baseline">
                              <span className="text-[10px] text-red-400 font-mono font-bold">综合交付用时:</span>
                              <span className="text-base font-bold text-red-400 font-mono">5.5 天 (5.5 Days)</span>
                            </div>
                          </div>

                          {/* AIGC Streamlined Flow */}
                          <div className="border border-emerald-500/20 bg-emerald-950/5 rounded-2xl p-4 md:p-5 space-y-4 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-2">
                              <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider uppercase">// AIGC 智能提效 SOP (OUR ADVANCED WORKFLOW)</span>
                              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">HIGH EFFICIENCY</span>
                            </div>
                            <div className="space-y-3 text-xs">
                              <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                <div className="space-y-0.5">
                                  <strong className="text-neutral-100 block">AI 变焦产品 3D 合影重绘</strong>
                                  <span className="text-neutral-300 leading-relaxed block">运用 Mj/SD 智能修正偏置光影，配合几何遮罩在几分钟内实现高拟真大促材质融合。</span>
                                </div>
                              </div>
                              <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold shrink-0 mt-0.5">✓</span>
                                <div className="space-y-0.5">
                                  <strong className="text-neutral-100 block">自适应漫反射智能柔和落影</strong>
                                  <span className="text-neutral-300 leading-relaxed block">商品边缘自然生影并极速融入，使单图纯开发时间提速至 40 分钟左右，完美承接海量日常上新。</span>
                                </div>
                              </div>
                            </div>
                            <div className="pt-2 border-t border-emerald-500/10 flex justify-between items-baseline">
                              <span className="text-[10px] text-emerald-400 font-mono font-bold">综合交付用时:</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-stone-500 line-through font-mono">5.5 天</span>
                                <span className="text-base font-bold text-emerald-400 font-mono">3.5 天 • 缩短 36% 研发工时</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quantitative Badges */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 font-mono">
                          <div className="p-3 bg-bg border border-stroke rounded-xl flex items-center gap-3">
                            <div className="w-9 h-9 rounded bg-accent-start/10 text-accent-start flex items-center justify-center font-bold text-xs shrink-0">-66%</div>
                            <div>
                              <strong className="text-xs text-white block">单图耗时锐减</strong>
                              <span className="text-[10px] text-stone-400 block">传统 2h 压缩至高效 40min</span>
                            </div>
                          </div>
                          <div className="p-3 bg-bg border border-stroke rounded-xl flex items-center gap-3">
                            <div className="w-9 h-9 rounded bg-accent-start/10 text-accent-start flex items-center justify-center font-bold text-xs shrink-0">-30%</div>
                            <div>
                              <strong className="text-xs text-white block">综合工时节省</strong>
                              <span className="text-[10px] text-stone-400 block">大促多版测试消耗大幅精简</span>
                            </div>
                          </div>
                          <div className="p-3 bg-bg border border-stroke rounded-xl flex items-center gap-3">
                            <div className="w-9 h-9 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">100%</div>
                            <div>
                              <strong className="text-xs text-white block">SOP 团队共享</strong>
                              <span className="text-[10px] text-stone-400 block">零门槛标准化流程全员复用</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {modalStepTab === "step1" && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 01 // PERSPECTIVE & RETOUCHING</span>
                          <h4 className="text-base font-bold text-text-primary">平面透视偏角校准与智能高精抠图</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
                            <div className="space-y-3">
                              <h5 className="text-xs font-mono text-accent-start uppercase block">// 战术核心 (TACTICS)</h5>
                              <strong className="text-sm text-white block">精确垫图辅助与多维透视自动计算</strong>
                              <p className="text-xs text-neutral-300 leading-relaxed font-body">
                                面对产品角度扁平不合理、平淡无奇的底图缺陷，AI 系统会引入原始几何轮廓、进行单维自纠偏，反演计算产品透视角。
                              </p>
                              <p className="text-xs text-neutral-400 leading-relaxed font-body">
                                自动贴合产品边缘，一键赋予 35° 俯仰黄金微距轴向，瞬间提升视觉观感的高级质地。
                              </p>
                            </div>
                          </div>

                          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Case 01 */}
                            <div className="bg-bg border border-stroke rounded-xl p-4 space-y-3 hover:border-accent-start/20 transition-all">
                              <div className="flex justify-between items-center text-[10px] font-mono pb-2 border-b border-stroke text-stone-500">
                                <span>CASE 01 • 松茸鲜 / 调味品</span>
                                <span className="text-accent-start font-bold">视角变焦</span>
                              </div>
                              <div className="h-24 rounded bg-surface/50 flex items-center justify-around text-center text-xs border border-white/5 font-mono p-2">
                                <div className="space-y-1">
                                  <div className="px-2 py-2 border border-red-500/20 bg-red-950/20 text-red-400 rounded">2D 平面图</div>
                                  <span className="text-[9px] text-stone-500">扁平死板原样</span>
                                </div>
                                <span className="text-accent-start text-sm">➔</span>
                                <div className="space-y-1">
                                  <div className="px-2 py-2 border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 font-bold rounded">3D 黄金偏角</div>
                                  <span className="text-[9px] text-emerald-400">大样拟真漫影</span>
                                </div>
                              </div>
                              <p className="text-[11px] text-stone-400 leading-normal">
                                平平无奇的货架原片 ➔ 输入 AI 算法重建高光折射，自动赋予立体透影。
                              </p>
                            </div>

                            {/* Case 02 */}
                            <div className="bg-bg border border-stroke rounded-xl p-4 space-y-3 hover:border-accent-start/20 transition-all">
                              <div className="flex justify-between items-center text-[10px] font-mono pb-2 border-b border-stroke text-stone-500">
                                <span>CASE 02 • 精品下午茶 / 糕点</span>
                                <span className="text-accent-start font-bold">材质柔和落影</span>
                              </div>
                              <div className="h-24 rounded bg-surface/50 flex items-center justify-around text-center text-xs border border-white/5 font-mono p-2">
                                <div className="space-y-1">
                                  <div className="px-2 py-2 border border-red-500/20 bg-red-950/20 text-red-400 rounded">常规拼贴</div>
                                  <span className="text-[9px] text-stone-500">边缘生硬不自然</span>
                                </div>
                                <span className="text-accent-start text-sm">➔</span>
                                <div className="space-y-1">
                                  <div className="px-2 py-2 border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 font-bold rounded">AI 场景生影</div>
                                  <span className="text-[9px] text-emerald-400">自适应环境透影</span>
                                </div>
                              </div>
                              <p className="text-[11px] text-stone-400 leading-normal">
                                去除生硬贴合。精塑商品焦脆质地孔隙，并在底座自然投射极高融合度阴影。
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {modalStepTab === "step2" && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 02 // SOP PIPELINE</span>
                          <h4 className="text-base font-bold text-text-primary">中枢协同：AI 生成全链路三步走 SOP</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="bg-bg border border-stroke rounded-xl p-4.5 space-y-2 relative">
                            <span className="text-xs font-mono font-bold text-accent-start tracking-wider uppercase block">01 / DISCOVERY</span>
                            <strong className="text-xs text-white block">图片特征反推出词</strong>
                            <p className="text-[11px] text-stone-400 leading-relaxed leading-[1.3]">
                              采用智能模型反演产品原片材质、高光、景深，提供匹配无缝的英文提示语 Prompt。
                            </p>
                          </div>

                          <div className="bg-bg border border-stroke rounded-xl p-4.5 space-y-2 relative">
                            <span className="text-xs font-mono font-bold text-accent-start tracking-wider uppercase block">02 / RENDERING</span>
                            <strong className="text-xs text-white block">高视角环境抽卡</strong>
                            <p className="text-[11px] text-stone-400 leading-relaxed leading-[1.3]">
                              Midjourney 抽卡获取写实的红木红绸场景。完美过渡，没有任何生影缺陷。
                            </p>
                          </div>

                          <div className="bg-bg border border-stroke rounded-xl p-4.5 space-y-2 relative">
                            <span className="text-xs font-mono font-bold text-accent-start tracking-wider uppercase block">03 / EMBOSS ART</span>
                            <strong className="text-xs text-white block">微浮雕艺术烫金文案</strong>
                            <p className="text-[11px] text-stone-400 leading-relaxed leading-[1.3]">
                              即梦 AI 多次重采样，生成质地华贵、含金属折光肌理的手写烫金大标题。
                            </p>
                          </div>

                          <div className="bg-accent-start/5 border border-accent-start/20 rounded-xl p-4.5 space-y-2 relative">
                            <span className="text-xs font-mono font-bold text-emerald-450 tracking-wider uppercase block">04 / FUSION RENDER</span>
                            <strong className="text-xs text-white block">最终大盘拼配交付</strong>
                            <p className="text-[11px] text-neutral-300 leading-relaxed leading-[1.3]">
                              合并多轴素材、用柔光和深度遮罩让环境极其自然、成品首焦完稿直接投运。
                            </p>
                          </div>
                        </div>

                        {/* Prompt Vault Section */}
                        <div className="bg-bg border border-stroke p-4 rounded-xl space-y-3 font-mono">
                          <span className="text-[10px] text-[#a1a1aa] block uppercase tracking-wider">// 真实提示词参考样册 (PROMPT VAULT)</span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="bg-[#0e0e11] p-3 rounded border border-white/5 space-y-1">
                              <span className="text-accent-start text-[10px] font-bold block">// 背景构筑 PROMPT (MIDJOURNEY)</span>
                              <p className="text-neutral-300 select-all leading-normal text-[11px]">
                                Chinese traditional red screen backdrop, dynamic golden sector fan decoration, organic wood tray platform table, atmospheric warm glow, cinematic depth, --ar 16:9 --style raw
                              </p>
                            </div>
                            <div className="bg-[#0e0e11] p-3 rounded border border-white/5 space-y-1">
                              <span className="text-emerald-400 text-[10px] font-bold block">// 书法字细节 PROMPT (JIEMENG AI)</span>
                              <p className="text-neutral-300 select-all leading-normal text-[11px]">
                                Hand-crafted ancient calligraphy word, 3D luxury gold texture, micro debossed metallic edge, smooth bounce shadow, isolated backdrop, high details
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {modalStepTab === "step3" && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 03 // MULTI-MODEL SYNERGY MATRIX</span>
                          <h4 className="text-base font-bold text-text-primary">因物制宜：高写实 AIGC 工具无缝拼图矩阵</h4>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed font-body">
                          在实际生成中把控创意稳定性的绝上方案，是将各模型依软件强项交叉拼配、协同调度：
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="p-4 bg-bg border border-stroke rounded-xl flex flex-col justify-between hover:border-accent-start/20 transition-all">
                            <div className="space-y-2">
                              <span className="w-8 h-8 rounded-lg bg-accent-start/10 text-accent-start flex items-center justify-center font-mono font-bold text-xs">MJ</span>
                              <strong className="text-xs text-white block">Midjourney v6</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed leading-[1.3]">
                                自带极致审美，光影极自然，是完美的摄影底片代替源。
                              </p>
                            </div>
                            <span className="text-[9.5px] font-mono text-stone-500 pt-2 border-t border-stroke mt-1 block">场景写实渲染: 95%</span>
                          </div>

                          <div className="p-4 bg-bg border border-stroke rounded-xl flex flex-col justify-between hover:border-[#89AACC]/20 transition-all">
                            <div className="space-y-2">
                              <span className="w-8 h-8 rounded-lg bg-[#89AACC]/10 text-[#89AACC] flex items-center justify-center font-mono font-bold text-xs">SD</span>
                              <strong className="text-xs text-white block">Stable Diffusion</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed leading-[1.3]">
                                ControlNet 线框控制，牢牢死锁商品包装轮廓预防形变。
                              </p>
                            </div>
                            <span className="text-[9.5px] font-mono text-stone-500 pt-2 border-t border-stroke mt-1 block">物理边缘细节拘束: 98%</span>
                          </div>

                          <div className="p-4 bg-[#89AACC]/5 border border-[#89AACC]/10 rounded-xl flex flex-col justify-between hover:border-emerald-500/20 transition-all">
                            <div className="space-y-2">
                              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">PS</span>
                              <strong className="text-xs text-text-primary block font-sans">Photoshop Firefly</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed leading-[1.3]">
                                智能扩图，完成从宽屏 16:9 比例开屏的即时拓展和精细改色。
                              </p>
                            </div>
                            <span className="text-[9.5px] font-mono text-stone-500 pt-2 border-t border-stroke mt-1 block">智能扩图无缝度: 90%</span>
                          </div>

                          <div className="p-4 bg-bg border border-stroke rounded-xl flex flex-col justify-between hover:border-accent-start/20 transition-all">
                            <div className="space-y-2">
                              <span className="w-8 h-8 rounded-lg bg-accent-start/15 text-white flex items-center justify-center font-mono font-bold text-xs">KL</span>
                              <strong className="text-xs text-white block">可灵 AI / GPT-4</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed leading-[1.3]">
                                深度重画受损人面细节，极速提炼最具点击吸睛力的广告词。
                              </p>
                            </div>
                            <span className="text-[9.5px] font-mono text-stone-500 pt-2 border-t border-stroke mt-1 block">人面词意修正: 92%</span>
                          </div>
                        </div>

                        <div className="p-4 bg-bg border border-stroke text-[11px] text-stone-500 font-mono italic text-center rounded-xl">
                          “将多重模型交叉协同并融入固定的设计流水线流程，是解决低质商业素材空耗的必然战略。”
                        </div>
                      </motion.div>
                    )}

                    {modalStepTab === "step4" && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 04 // PRACTICAL BRAND CASE STORYBOARD</span>
                          <h4 className="text-base font-bold text-text-primary">实战案例：徐福记蟹黄沙琪玛首焦生图流程</h4>
                        </div>

                        {/* Flow steps container */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono text-[#a1a1aa] block uppercase tracking-wider">// 红金喜庆大促生图拆盘流程 (4-SOP)</span>
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                            <div className="p-4 bg-bg border border-stroke rounded-xl flex flex-col justify-between hover:border-accent-start/20 transition-all">
                              <div className="space-y-1">
                                <span className="text-[9px] bg-accent-start/10 text-accent-start px-2 py-0.5 rounded font-mono font-bold">STAGE 01</span>
                                <strong className="text-white block mt-1">红金主图场景生景</strong>
                                <p className="text-[11px] text-stone-400 leading-snug">
                                  按照流沙蛋黄与浓郁中式红的主调抽卡，提供具有丰富景深的摄影棚背景底片。
                                </p>
                              </div>
                            </div>

                            <div className="p-4 bg-bg border border-stroke rounded-xl flex flex-col justify-between hover:border-[#89AACC]/20 transition-all">
                              <div className="space-y-1">
                                <span className="text-[9px] bg-accent-start/10 text-accent-start px-2 py-0.5 rounded font-mono font-bold">STAGE 02</span>
                                <strong className="text-white block mt-1">云纹配件底景道具拼配</strong>
                                <p className="text-[11px] text-stone-400 leading-snug">
                                  智能提炼出金色屏风、传统红木盘、桂花流沙碎片用作前景点缀极速构景。
                                </p>
                              </div>
                            </div>

                            <div className="p-4 bg-bg border border-stroke rounded-xl flex flex-col justify-between hover:border-accent-start/20 transition-all">
                              <div className="space-y-1">
                                <span className="text-[9px] bg-[#89AACC]/10 text-[#89AACC] px-2 py-0.5 rounded font-mono font-bold">STAGE 03</span>
                                <strong className="text-white block mt-1">实物包装智能生投影贴合</strong>
                                <p className="text-[11px] text-stone-400 leading-snug">
                                  一键高精抠出实物，置于檀木托上。AI 反向绘制带温润阴影边缘，完美不违和。
                                </p>
                              </div>
                            </div>

                            <div className="p-4 bg-[#89AACC]/5 border border-[#89AACC]/15 rounded-xl flex flex-col justify-between hover:border-emerald-500/20 transition-all">
                              <div className="space-y-1">
                                <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">STAGE 04</span>
                                <strong className="text-white block mt-1">烫金大字泥印标题重塑</strong>
                                <p className="text-[11px] text-neutral-300 leading-snug">
                                  智能重画“蟹黄味”烫金立体汉字置入中心，免去线下买道具的开销，大促效率飞升。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Final summary recommendation */}
                        <div className="p-4 rounded-xl bg-black/60 border border-stroke text-xs text-stone-300 leading-relaxed flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <strong>最终大盘成果：</strong>完美避开了重资产采选影棚摆景的成本死循环，高效生图大幅支持了大促秒级出稿的大战略，大图质地极佳、色彩极其吸睛，点击数据大幅跃居优秀水平！
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Lightbox Footer text details */}
                <div className="flex flex-row items-center justify-between text-[9px] text-stone-500 font-mono select-none border-t border-stroke/60 pt-4">
                  <span>JIAXU ZHUANG DIGITAL PRESENTATION</span>
                  <span>PREVIEW OPTIMIZED // PRESS CLOSE OR CLICK OUTSIDE TO RETURN</span>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
