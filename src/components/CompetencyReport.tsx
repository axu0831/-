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
    <div className="w-full flex flex-col gap-10 font-sans">
      
      {/* ==========================================
          Part A: Current Company Experience Card 
         =========================================== */}
      <div className="relative rounded-3xl bg-surface/40 border border-stroke p-6 md:p-8 space-y-6 overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent-start/5 blur-[80px] rounded-full -z-10" />
        
        {/* Title and Meta Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stroke">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-start" />
              <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">北京源东运营宝科技有限公司</h3>
            </div>
            <p className="text-xs text-stone-400 font-mono tracking-wider">// 广告投放视觉设计师 & 投放设计组长</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#89AACC] border border-accent-start/30 bg-accent-start/5 px-3.5 py-1 rounded-full bg-black/40">
              2022.07 - 至今
            </span>
          </div>
        </div>

        {/* Brands Section */}
        <div className="space-y-2.5">
          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block">// 深度服务头部大品牌 (SERVICED BRANDS)</span>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand, i) => (
              <div 
                key={i}
                className="px-3.5 py-1.5 rounded-full bg-surface/80 border border-white/5 text-[11px] flex items-center gap-1.5 transition-colors hover:border-[#89AACC]/30"
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
          <div className="p-5 rounded-2xl bg-black/20 border border-stroke/50 space-y-3.5">
            <div className="flex items-center gap-2">
              <Briefcase size={14} className="text-accent-start" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">核心工作范围 // WORK SCOPE</h4>
            </div>
            <ul className="text-xs text-neutral-300 space-y-3 list-none pl-1">
              <li className="flex items-start gap-2 text-justify">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span>统筹飞利浦、倍轻松、澳佳宝、同仁堂等知名品牌京东自营全链路广告视觉与投放设计；</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span><strong>站内：</strong>负责店铺品专、京选资源位、商品车主图、首页首焦 Banner 全点位素材迭代与日常店铺视觉运维；</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span><strong>站外：</strong>承接爱奇艺、QQ 音乐、腾讯新闻等多平台站外开屏、信息流广告视觉落地，完成全品类竞标广告创意制作；</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-accent-start text-[14px] leading-none mt-0.5">•</span>
                <span>围绕 618 / 双 11 / 双 12 等大促节点独立落地全周期营销设计，同步带教新人、输出工作方法论。</span>
              </li>
            </ul>
          </div>

          {/* Core Performance block */}
          <div className="p-5 rounded-2xl bg-black/20 border border-stroke/50 space-y-3.5">
            <div className="flex items-center gap-2">
              <Award size={14} className="text-[#89AACC]" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-bold">工作业绩与可衡量成果 // PERFORMANCE</h4>
            </div>
            <ul className="text-xs text-neutral-300 space-y-3 list-none pl-1">
              <li className="flex items-start gap-2 text-justify">
                <span className="text-[#89AACC] text-[14px] leading-none mt-0.5">•</span>
                <span><strong>大促业绩：</strong>负责的京东店铺 618 大促整体销量同比上涨 130%，优化素材版式持续提升广告点击率与产品转化；</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-[#89AACC] text-[14px] leading-none mt-0.5">•</span>
                <span><strong>项目口碑：</strong>输出投放素材多次获得合作品牌官方认可，助力部门拿下京东京牌营销、五星广告代理商资质；</span>
              </li>
              <li className="flex items-start gap-2 text-justify">
                <span className="text-[#89AACC] text-[14px] leading-none mt-0.5">•</span>
                <span><strong>团队赋能：</strong>担任新人导师，帮扶组员快速上手电商设计业务，连续两届主持公司年会。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ==========================================
          Part B: Extended Competency沉淀 Report
         =========================================== */}
      <div id="methodology" className="space-y-6 pt-16 border-t border-stroke/50 mt-10 scroll-mt-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 items-center"
        >
          {/* Left Column: Title, Description, and SOP Switch Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-pulse" />
                <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-mono">DESIGN METHODOLOGY & PROCESS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-text-primary tracking-tight leading-tight">
                设计方法论 • Design & <span className="font-display italic font-bold text-accent-start text-5xl md:text-6xl">Methodology</span>
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 font-body leading-relaxed max-w-2xl">
                在日常以及大促期间，通过总结的工作方法论与AIGC工具，在保障极高级视觉美学的同时，CTR点击率整体提高。
              </p>
            </div>

            {/* Action buttons/badges */}
            <div className="flex flex-wrap gap-2.5 items-center pt-2">
              <span className="text-[10px] md:text-xs uppercase font-mono bg-stroke/50 border border-white/5 text-muted px-4 py-1.5 rounded-full">
                SOP 方法体系 // STRATEGIC FRAMEWORK
              </span>
              <button 
                onClick={() => {
                  const nextTabMap: Record<string, "cognition" | "metrics" | "methodology" | "roadmap"> = {
                    cognition: "metrics",
                    metrics: "methodology",
                    methodology: "roadmap",
                    roadmap: "cognition",
                  };
                  setActiveTab(nextTabMap[activeTab]);
                }}
                className="flex gap-2 items-center justify-center px-4 py-1.5 bg-accent-start text-bg hover:opacity-90 rounded-full text-xs font-semibold tracking-wider transition-all shadow-[0_0_15px_rgba(137,170,204,0.3)] hover:scale-105 active:scale-95 cursor-pointer group"
              >
                <Sparkles size={11} className="animate-spin-slow text-[#222]" />
                <span className="text-[#222]">点击切换 // SWITCH VIEW</span>
                <ChevronRight size={11} className="transition-transform group-hover:translate-x-1 text-[#222]" />
              </button>
            </div>
          </div>

          {/* Right Column: Beautiful Image Showcase Thumbnail */}
          <div className="lg:col-span-5 w-full">
            <div 
              onClick={() => setIsZoomed(true)} 
              className="relative group rounded-2xl overflow-hidden border border-stroke/80 bg-surface/30 p-2 shadow-2xl transition-all duration-500 hover:border-accent-start/40 hover:shadow-[0_0_30px_rgba(137,170,204,0.15)] max-w-lg mx-auto lg:max-w-none cursor-pointer"
            >
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-stone-950">
                {/* Shiny gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                
                {/* Realistic image */}
                <img 
                  src="https://i.postimg.cc/xTm47LK6/zuo-pin-hui-zong-1280X720.png" 
                  alt="作品汇总 Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay with action button */}
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(true);
                  }}
                  className="w-full h-full absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 transition-all duration-300 backdrop-blur-[2px] z-20 cursor-pointer text-left border-0 outline-none"
                >
                  <div className="p-3 rounded-full bg-accent-start/90 text-bg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <Sparkles size={16} className="text-[#222]" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#89AACC] font-bold uppercase translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    查看完整大图 // VIEW FULL WORK
                  </span>
                </button>
              </div>
              
              {/* Lower boundary lines */}
              <div className="flex justify-between items-center px-2 pt-2.5 pb-1 text-[8px] font-mono text-muted uppercase tracking-wider">
                <span>[ SHOWCASE PREVIEW ]</span>
                <span className="text-stone-600">// 1280 × 720 PX</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Tabs bar */}
        <div className="relative flex flex-wrap gap-2 p-1.5 bg-surface border border-stroke rounded-2xl md:rounded-full justify-between items-center w-full">
          <div className="flex flex-wrap items-center gap-1 md:gap-0 flex-1 w-full">
            {tabs.map((tab, index) => {
              const isSelected = activeTab === tab.id;
              return (
                <div key={tab.id} className="flex items-center flex-1 w-full md:w-auto">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 md:px-5 md:py-3.5 rounded-xl md:rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer select-none text-left md:text-center flex-1 ${
                      isSelected 
                        ? "text-[#89AACC]" 
                        : "text-muted hover:text-text-primary hover:bg-stroke/40"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="report-active-tab"
                        className="absolute inset-0 rounded-xl md:rounded-full bg-bg border border-accent-start/50 shadow-[0_0_15px_rgba(137,170,204,0.15)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <div className="flex flex-row items-center justify-center gap-2">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded transition-all shrink-0 ${
                        isSelected 
                          ? "bg-[#89AACC]/20 text-[#89AACC] border border-[#89AACC]/20" 
                          : "bg-surface border border-stroke text-muted"
                      }`}>
                        {index + 1}
                      </span>
                      <div className="text-left md:text-center">
                        <div className="block leading-tight font-body font-bold text-xs md:text-sm">{tab.label}</div>
                        <div className={`hidden lg:block text-[9px] font-mono tracking-widest uppercase mt-0.5 ${isSelected ? "text-[#89AACC]/75" : "text-stone-500"}`}>
                          {tab.desc}
                        </div>
                      </div>
                    </div>
                  </button>
                  {index < tabs.length - 1 && (
                    <div className="hidden md:block w-4 lg:w-8 h-[1px] shrink-0 mx-1">
                      <div 
                        className="w-full h-full border-t border-dashed border-[#89AACC]/40" 
                        style={{ 
                          maskImage: "linear-gradient(to right, transparent, white, transparent)", 
                          WebkitMaskImage: "linear-gradient(to right, transparent, white, transparent)" 
                        }} 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative min-h-[500px] w-full rounded-3xl bg-surface/30 border border-stroke/80 p-6 md:p-10 overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-accent-start/5 via-transparent to-transparent -z-10" />
          
          <AnimatePresence mode="wait">
            {activeTab === "cognition" && (
              <motion.div
                key="cognition"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                {/* Introduction header */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 01 // JOB COGNITION</div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">从单点素材升级为全链路策略</h3>
                  <p className="text-xs md:text-sm text-neutral-400 max-w-2xl font-body leading-relaxed">
                    面对流量红利见顶与媒介形态的剧烈演化，电商投放设计已不能只停留在“美不美”的执行层。我们必须站到组织效率与生意大盘的全局高度，用策略驱动视觉。
                  </p>
                </div>

                {/* Three Core Challenges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-surface border border-white/5 space-y-3 hover:border-accent-start/20 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-accent-start/10 border border-accent-start/20 flex items-center justify-center text-accent-start">
                      <ShieldAlert size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-text-primary">行业分析：行业竞争红海化</h4>
                    <ul className="text-xs text-neutral-400 space-y-2 leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span>用户注意力碎片化，视频与长图开屏已成大促绝对主力。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span>技术爆发（AIGC）引发效率革命，单纯套图效率彻底掉队。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span>竞品素材同质化严重导致点击率（CTR）下坠，创意差异刻不容缓。</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-white/5 space-y-3 hover:border-accent-start/20 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-accent-start/10 border border-accent-start/20 flex items-center justify-center text-accent-start">
                      <Zap size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-text-primary">核心挑战：高昂成本与低效沟通</h4>
                    <ul className="text-xs text-neutral-400 space-y-2 leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span><strong>试错成本高：</strong>人力资源错配，无用测试极度消耗运营预算。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span><strong>多方协作低：</strong>大促等峰期核心诉求传达易失真，图纸返工率大。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span><strong>创意固化：</strong>单次爆品素材高度不可复制，缺乏系统逻辑体系沉淀。</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-white/5 space-y-3 hover:border-accent-start/20 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-accent-start/10 border border-accent-start/20 flex items-center justify-center text-accent-start">
                      <UserCheck size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-text-primary">核心演进：设计师三大高级角色</h4>
                    <ul className="text-xs text-neutral-400 space-y-2 leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span><strong>策略制定者：</strong>将投放大盘反馈精准翻译为视觉，追求爆款落地。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span><strong>团队赋能者：</strong>搭建资产库，用标准化SOP提升中初级设计产出。</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-accent-start font-bold mt-0.5">•</span>
                        <span><strong>资源整合者：</strong>密切联合推广与投放组，整合创意快速爆发出图。</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Core Goals breakdown */}
                <div className="p-6 md:p-8 rounded-2xl bg-surface border border-white/5 flex flex-col md:flex-row gap-6 justify-between items-center">
                  <div className="space-y-1 text-center md:text-left">
                    <h4 className="text-base font-bold text-text-primary">核心落地导向：降本、增效、创新</h4>
                    <p className="text-xs text-muted">用最理性的商业逻辑支撑极具视觉表现力与强转化的电商美学体系。</p>
                  </div>
                  
                  <div className="flex gap-4 w-full md:w-auto">
                    <div className="flex-1 md:w-32 bg-bg/50 border border-stroke px-4 py-3 rounded-xl text-center">
                      <div className="text-xs text-stone-500 font-mono tracking-widest">// 降本</div>
                      <div className="text-base font-bold text-text-primary mt-1 font-display italic">SOP 标准化</div>
                    </div>
                    <div className="flex-1 md:w-32 bg-bg/50 border border-stroke px-4 py-3 rounded-xl text-center">
                      <div className="text-xs text-stone-500 font-mono tracking-widest">// 增效</div>
                      <div className="text-base font-bold text-text-primary mt-1 font-display italic">数据可视化</div>
                    </div>
                    <div className="flex-1 md:w-32 bg-bg/50 border border-stroke px-4 py-3 rounded-xl text-center">
                      <div className="text-xs text-stone-500 font-mono tracking-widest">// 创新</div>
                      <div className="text-base font-bold text-text-primary mt-1 font-display italic">AIGC 提效链</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "metrics" && (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 02 // HARD DATA & COMPETENCY</div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">硬核大促数据验证与突围</h3>
                    <p className="text-xs md:text-sm text-neutral-400 max-w-xl">
                      在 2024 年核心大促期间，通过严谨的工作方法论与 AIGC 工具，在保障极高级视觉美学的同时，大幅超越大盘平均参考指标。
                    </p>
                  </div>
                  
                  {/* Metric mode switcher */}
                  <div className="flex rounded-full bg-bg border border-stroke p-1">
                    <button 
                      onClick={() => setMetricsMode("ctr")}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${metricsMode === "ctr" ? "bg-accent-start text-bg" : "text-muted hover:text-text-primary"}`}
                    >
                      素材综合点击率
                    </button>
                    <button 
                      onClick={() => setMetricsMode("time")}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${metricsMode === "time" ? "bg-accent-start text-bg" : "text-muted hover:text-text-primary"}`}
                    >
                      平均出图用时
                    </button>
                  </div>
                </div>

                {/* Data Visualization area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Visual Chart Panel */}
                  <div className="lg:col-span-7 bg-surface/50 border border-stroke rounded-2xl p-6 space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-text-primary">
                        {metricsMode === "ctr" ? "日常&大促期间 站外全渠道点击率（CTR）对比" : "大促项目 基础素材出图效率指标 (Hours)"}
                      </span>
                      <span className="text-xs text-accent-start font-mono font-bold block bg-accent-start/5 px-2 bg-accent-start/10 rounded-full py-0.5">
                        {metricsMode === "ctr" ? "点击综合跃升 +50%" : "敏捷响应提效 +53%"}
                      </span>
                    </div>

                    <div className="space-y-6 py-4">
                      {/* Bar 1: Others */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-neutral-400 font-bold">行业／组内其他成员平均水平</span>
                          <span className="font-mono text-muted">{metricsMode === "ctr" ? "8.00%" : "1.50 小时"}</span>
                        </div>
                        <div className="h-4 bg-bg rounded-full overflow-hidden border border-stroke">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: metricsMode === "ctr" ? "66.6%" : "100%" }}
                            transition={{ duration: 0.8 }}
                            className="h-full bg-stone-700 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Bar 2: Me */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-text-primary font-bold flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-ping" />
                            庄嘉绪 设计投放（高点击素材）
                          </span>
                          <span className="font-mono text-accent-start font-bold">
                            {metricsMode === "ctr" ? "12.00%" : "0.70 小时 (约40分钟)"}
                          </span>
                        </div>
                        <div className="h-4 bg-bg rounded-full overflow-hidden border border-accent-start/10">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: metricsMode === "ctr" ? "100%" : "46.6%" }}
                            transition={{ duration: 0.8 }}
                            className="h-full accent-gradient rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Highlights and footer text */}
                    <div className="text-[11px] text-muted leading-relaxed font-mono pt-2 border-t border-stroke flex items-start gap-2">
                      <BarChart4 size={14} className="text-accent-start shrink-0 mt-0.5" />
                      <span>成果说明:以建立标准化设计SOP规范与AIGC创意素材库为依托，在职期间，不仅成功实现平均CTR爬坡突破12%核心指标，而且极致压缩冗余找素材时间，均阶成片出图工时仅需40分钟左右。</span>
                    </div>
                  </div>

                  {/* Personal Growth timeline right bar */}
                  <div className="lg:col-span-5 space-y-4">
                    <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest">// 个人任职进阶2022-2026五年轨迹</h4>
                    
                    <div className="space-y-3 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-stroke">
                      
                      {/* Event 1 */}
                      <div className="flex gap-4 relative">
                        <div className="w-9 h-9 rounded-full bg-accent-start/10 border border-accent-start/30 flex items-center justify-center text-accent-start font-mono text-xs font-bold shrink-0 relative z-10 animate-pulse">
                          26
                        </div>
                        <div className="space-y-0.5 pt-1">
                          <div className="text-xs font-bold text-text-primary">2026 | 全域提效与大促卓越创意统筹</div>
                          <p className="text-[11px] text-neutral-400 leading-normal text-justify">
                            主导跨渠道大促视觉策略，全面推进标准化 AIGC 创意素材深度融入工作流程，确保顶级美学与效能最大化。
                          </p>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="flex gap-4 relative">
                        <div className="w-9 h-9 rounded-full bg-accent-start/10 border border-stroke flex items-center justify-center text-stone-400 font-mono text-xs shrink-0 relative z-10">
                          25
                        </div>
                        <div className="space-y-0.5 pt-1">
                          <div className="text-xs font-bold text-text-primary">2025 | SOP 标准化规范与成片极速落地</div>
                          <p className="text-[11px] text-neutral-400 leading-normal text-justify">
                            沉淀标准化建立设计规范与AIGC备战库，将高难度创意细磨精修系统化落地，使成片核心工时极致压缩。
                          </p>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className="flex gap-4 relative">
                        <div className="w-9 h-9 rounded-full bg-accent-start/10 border border-stroke flex items-center justify-center text-stone-400 font-mono text-xs shrink-0 relative z-10">
                          24
                        </div>
                        <div className="space-y-0.5 pt-1">
                          <div className="text-xs font-bold text-text-primary">2024 | 价值升级 与 AIGC 全功能提效</div>
                          <p className="text-[11px] text-neutral-400 leading-normal text-justify">
                            组内出图效率总排名第一；独立主导 30+ 直客竞标，密切协作投手；将 AI 辅助素材建库提效链在设计组内全面落地，大幅缩短开发创意周期。
                          </p>
                        </div>
                      </div>

                      {/* Event 4 */}
                      <div className="flex gap-4 relative">
                        <div className="w-9 h-9 rounded-full bg-accent-start/10 border border-stroke flex items-center justify-center text-stone-400 font-mono text-xs shrink-0 relative z-10">
                          23
                        </div>
                        <div className="space-y-0.5 pt-1">
                          <div className="text-xs font-bold text-text-primary">2023 | 效率突围 与 超百款全线活动攻尖</div>
                          <p className="text-[11px] text-neutral-400 leading-normal text-justify">
                            全流程高质量拿下京东家电、3C数码、大商超等 100+ 关键竞标直客大促节点，系统化提炼推广材料及方法，个人成片提效超 20%+.
                          </p>
                        </div>
                      </div>

                      {/* Event 5 */}
                      <div className="flex gap-4 relative">
                        <div className="w-9 h-9 rounded-full bg-accent-start/10 border border-stroke flex items-center justify-center text-stone-400 font-mono text-xs shrink-0 relative z-10">
                          22
                        </div>
                        <div className="space-y-0.5 pt-1">
                          <div className="text-xs font-bold text-text-primary">2022 | 扎根筑基 与 组织认知建立</div>
                          <p className="text-[11px] text-neutral-400 leading-normal text-justify">
                            入职初期快速吸收并融入各品类商业主图及详情排版，快速打磨基础，积累丰富多赛道行业投放经验与业务心智。
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Designers 5 Core Abilities */}
                <div className="space-y-4 pt-4 border-t border-stroke">
                  <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest">// 战略级设计师 5 维胜任力雷达</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {[
                      { title: "1. 沟通与表达", rate: "90%", desc: "10+校际晚会主持经验，精准剖析设计诉求拉齐认知，控图更控场。" },
                      { title: "2. 设计与审美", rate: "95%", desc: "扎实7年美术美学功底，熟稔质感、版式网格原理等金律。" },
                      { title: "3. 整合与创新", rate: "92%", desc: "深度重构客户原始需求碎片，快速探秘并锚定创意高转。 " },
                      { title: "4. 视野与思考", rate: "88%", desc: "跳脱执行思维，换位运营及大盘逻辑看设计，算细账要大转化。" },
                      { title: "5. 学习与反思", rate: "90%", desc: "持之以恒输入 AIGC 前沿工具流，日盘复盘迭代，不设边界。" }
                    ].map((ability, index) => (
                      <div key={index} className="p-4 rounded-xl bg-stroke/40 border border-white/5 space-y-2 text-left">
                        <div className="text-[11px] font-bold text-text-primary tracking-wide leading-tight">{ability.title}</div>
                        <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                          <div className="h-full accent-gradient" style={{ width: ability.rate }} />
                        </div>
                        <p className="text-[10px] text-stone-400 leading-relaxed leading-[1.3] pt-0.5 text-justify">{ability.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "methodology" && (
              <motion.div
                key="methodology"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 03 // DESIGN METHODOLOGY & TOOLCHAIN</div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">爆款视觉方法论与 AIGC 工具链</h3>
                  <p className="text-xs md:text-sm text-neutral-400 max-w-xl">
                    优秀设计来自于对核心类目的精细剖析：总结并落实一整套可量化的“黄金大促高点击率视觉”操作手册。
                  </p>
                </div>

                {/* Sub tabs for Category Methodology */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Category selector buttons */}
                  <div className="flex md:flex-col gap-2 shrink-0 md:w-48">
                    {[
                      { id: "beauty", label: "美妆品类 💄", sub: "LA MER, 赫莲娜" },
                      { id: "appliances", label: "家电数码 🔌", sub: "海信, 小米" },
                      { id: "auto", label: "车载出行 🚗", sub: "京东养车, 壳牌" }
                    ].map((cat) => {
                      const isSel = methodologyCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setMethodologyCategory(cat.id as any)}
                          className={`px-4 py-3 rounded-xl border text-left flex flex-col justify-center gap-0.5 transition-all w-full cursor-pointer select-none ${isSel ? "border-accent-start/30 bg-accent-start/5 text-accent-start" : "border-stroke bg-transparent text-stone-400 hover:text-text-primary hover:bg-stroke/30"}`}
                        >
                          <span className="text-xs font-bold">{cat.label}</span>
                          <span className={`text-[9px] font-mono uppercase tracking-wider ${isSel ? "text-accent-start/85" : "text-stone-500"}`}>{cat.sub}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Tab Content area showing rules */}
                  <div className="flex-1 bg-surface/40 border border-stroke rounded-2xl p-5 md:p-6 min-h-[170px] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-stroke">
                        <span className="text-xs font-mono uppercase tracking-widest text-text-primary font-bold">// 视觉黄金法则及核心质感</span>
                        <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">精确对齐</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {methodologyCategory === "beauty" && (
                          <>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">核心气度</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">极致体现“高级质感”、“极奢细腻”、“国际化大排版”格调体系。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">材质表现</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">通透流光玻璃感、晶体折射颗粒。微透高光反射沙龙影调。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">代表KV落点</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">主打高饱和度经典产品微距打光悬浮，去除无谓的大块面杂物，突出配方科技。</p>
                            </div>
                          </>
                        )}

                        {methodologyCategory === "appliances" && (
                          <>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">核心气度</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">着重凸显“强烈的沉浸式氛围感”与“虚实对撞的温馨家庭科技感”。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">材质表现</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">硬铝拉丝、亚光碳纤维。恰如其分的温暖折射线、轻微的数字粒子流烘托。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">代表KV落点</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">用真实的C4D搭建拟真家居与极客发烧级沙龙。详情楼层版式极高度对齐，参数极简卡片化。</p>
                            </div>
                          </>
                        )}

                        {methodologyCategory === "auto" && (
                          <>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">核心气度</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">重点突出“超强的浸润式代入感”与“张力四射的速度性能场域”。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">材质表现</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">磨砂炭黑漆质。动态轮胎橡胶重擦地感痕、飞驰光影虚化流光，冷灰基底色对撞霓虹灯效。</p>
                            </div>
                            <div className="space-y-1">
                              <h5 className="text-xs font-bold text-text-primary">代表KV落点</h5>
                              <p className="text-[11px] text-stone-400 leading-normal">突出“爆品直降折扣”信息冲击、赛车或引擎微距光晕引爆，展现极限抓睛力。</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stroke text-[11px] text-stone-500 font-mono italic">
                      {methodologyCategory === "beauty" && "“La Mer 或 赫莲娜：用极致纯粹的呼吸打底色，使每一个晶透玻璃瓶身仿佛具有灵魂的意境，促使用户停留和加购。”"}
                      {methodologyCategory === "appliances" && "“家电数码：不走平铺直叙，构建温润的智能居家光线过渡，让生硬冷冰冰的产品化身家里必不可少的奢美生活美学。”"}
                      {methodologyCategory === "auto" && "“汽车出行：用惊人的飞驰流光穿透，第一秒就调动起男性用户心底狂野的澎湃性能共鸣，数据简单粗暴抓睛。”"}
                    </div>
                  </div>
                </div>

                {/* Three Product Highlight Golden Rules */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-4 rounded-xl bg-stroke/20 border border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-accent-start">// 黄金律 01 //</span>
                    <h4 className="text-xs font-bold text-text-primary">一、卖点秒懂 (Slight Point)</h4>
                    <p className="text-[11px] text-stone-400 leading-normal text-justify">
                      拒绝漫无目的的信息堆积。利用黄金比例文字焦距对齐，配合大粗线无衬线字体。最精简洗炼的黄金一秒让大脑瞬间完成价值解码。
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stroke/20 border border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-accent-start">// 黄金律 02 //</span>
                    <h4 className="text-xs font-bold text-text-primary">二、情景代入 (Scenario Drift)</h4>
                    <p className="text-[11px] text-stone-400 leading-normal text-justify">
                      不只干瘪地贴商品，而是用三维空间在消费者脑袋里搭建一个“未来全息橱窗”。让他们切身感受它握在手里的重量与环境的高端气度。
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stroke/20 border border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-accent-start">// 黄金律 03 //</span>
                    <h4 className="text-xs font-bold text-text-primary">三、数据强化 (Data Boost)</h4>
                    <p className="text-[11px] text-stone-400 leading-normal text-justify">
                      把各种复杂的直属促销（如国补、满减、立折）卡片化并与产品阴影实现极致嵌入渲染。用克制却极度引人瞩目的亮金色/银色去抓住跳跃的视线。
                    </p>
                  </div>
                </div>

                {/* AI Tools & SOP comparison widget */}
                <div className="p-6 rounded-2xl bg-surface border border-white/5 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Cpu size={14} className="text-accent-start animate-pulse" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                        AIGC 提效工具栈与前后端工作流革命 (SOP comparison)
                      </h4>
                    </div>
                    <span className="text-[10px] text-muted font-mono bg-bg px-2.5 py-0.5 rounded-full border border-stroke">
                      SOP提效高达 30% ~ 50%+
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                    <div className="bg-bg/40 border border-stroke p-3 rounded-xl">
                      <span className="text-[10px] font-mono text-stone-500 uppercase block">01 / MIDJOURNEY</span>
                      <span className="text-xs font-bold text-text-primary leading-none mt-1.5 block">通用拟真背景渲染</span>
                    </div>
                    <div className="bg-bg/40 border border-stroke p-3 rounded-xl">
                      <span className="text-[10px] font-mono text-stone-500 uppercase block">02 / STABLE DIFFUSION</span>
                      <span className="text-xs font-bold text-text-primary leading-none mt-1.5 block">定制物体细节拼贴</span>
                    </div>
                    <div className="bg-bg/40 border border-stroke p-3 rounded-xl">
                      <span className="text-[10px] font-mono text-stone-500 uppercase block">03 / PHOTOSHOP BETA</span>
                      <span className="text-xs font-bold text-text-primary leading-none mt-1.5 block">敏捷扩图与调光融合</span>
                    </div>
                    <div className="bg-bg/40 border border-stroke p-3 rounded-xl">
                      <span className="text-[10px] font-mono text-stone-500 uppercase block">04 / OPENAI GPT-4</span>
                      <span className="text-xs font-bold text-text-primary leading-none mt-1.5 block">核心痛点文案解构</span>
                    </div>
                  </div>

                  {/* Vertical Comparison bar charts */}
                  <div className="space-y-4 pt-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">// 工作周期降幅对比 (以大促详情完成为例)</span>
                      <span className="text-[10px] font-mono text-accent-start uppercase tracking-widest bg-accent-start/10 border border-accent-start/20 px-2.5 py-1 rounded">SOP 标准化 • 数据可视化</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Old SOP */}
                      <div className="p-4 bg-bg/25 border border-stroke rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                        <div className="space-y-2.5 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                            <strong className="text-stone-500 font-bold block">传统视觉设计工作流 S-SOP</strong>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-stone-400">
                            <span className="px-1.5 py-0.5 bg-neutral-800/40 border border-stroke/60 rounded">需求 0.5D</span>
                            <span className="text-stone-600">→</span>
                            <span className="px-1.5 py-0.5 bg-neutral-800/40 border border-stroke/60 rounded">草图 1D</span>
                            <span className="text-stone-600">→</span>
                            <span className="px-1.5 py-0.5 bg-neutral-800/40 border border-stroke/60 rounded">绘制 2D</span>
                            <span className="text-stone-600">→</span>
                            <span className="px-1.5 py-0.5 bg-neutral-800/40 border border-stroke/60 rounded">反复修改 2D</span>
                          </div>
                          {/* Data Visualization mini bar */}
                          <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden mt-1.5">
                            <div className="h-full bg-stone-600 rounded-full" style={{ width: "100%" }} />
                          </div>
                        </div>
                        <div className="text-left sm:text-right shrink-0 flex flex-col justify-center border-l sm:border-l-0 sm:pl-3 pl-3">
                          <div className="text-xs font-bold text-neutral-400 font-mono">总计耗时 5.5 天</div>
                          <span className="text-[9px] text-stone-600 uppercase block tracking-wider font-extrabold mt-1">High resource cost</span>
                        </div>
                      </div>

                      {/* AIGC SOP */}
                      <div className="p-4 bg-accent-start/5 border border-accent-start/20 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-start/5 blur-[20px] rounded-full pointer-events-none" />
                        <div className="space-y-2.5 flex-1 z-10">
                          <div className="flex items-center gap-2">
                            <Sparkles size={12} className="text-accent-start animate-pulse" />
                            <strong className="text-accent-start font-bold block">AIGC 提效轻量级工作流 S-SOP</strong>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-text-primary/90">
                            <span className="px-1.5 py-0.5 bg-accent-start/10 border border-accent-start/20 rounded font-semibold text-[#89AACC]">需求沟通 0.5D</span>
                            <span className="text-accent-start/60">→</span>
                            <span className="px-1.5 py-0.5 bg-accent-start/10 border border-accent-start/20 rounded font-semibold text-[#89AACC]">合成草图 1D</span>
                            <span className="text-accent-start/60">→</span>
                            <span className="px-1.5 py-0.5 bg-accent-start/10 border border-accent-start/20 rounded font-semibold text-[#89AACC]">AI精修与重绘 2D</span>
                          </div>
                          {/* Data Visualization mini bar */}
                          <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden mt-1.5">
                            <div className="h-full bg-accent-start rounded-full" style={{ width: "63.6%" }} />
                          </div>
                        </div>
                        <div className="text-left sm:text-right shrink-0 flex flex-col justify-center border-l sm:border-l-0 sm:pl-3 pl-3 z-10">
                          <div className="text-xs font-bold text-accent-start font-mono flex items-center sm:justify-end gap-1">
                            <span>总计耗时 3.5 天</span>
                          </div>
                          <span className="text-[9px] text-[#89AACC] uppercase block tracking-wider font-extrabold mt-1">提效 36% 稳健交付</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "roadmap" && (
              <motion.div
                key="roadmap"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-accent-start uppercase tracking-[0.3em]">// PART 04 // FUTURE PLANNING & OKR</div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">降本增效、团队未来规划机制</h3>
                  <p className="text-xs md:text-sm text-neutral-400 max-w-xl">
                    以极客、严密、可量化的形式进行全周期团队精简与效率优化：加减法并用，构建团队长期视觉竞争力。
                  </p>
                </div>

                {/* Math graph representation: Addition & Subtraction */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Addition Card */}
                  <div className="p-5.5 rounded-2xl bg-surface border border-accent-start/15 relative overflow-hidden">
                    <div className="absolute right-4 top-4 text-3xl font-display italic font-light opacity-10 text-accent-start scale-150 font-bold font-mono">+ ADDITION</div>
                    <div className="space-y-3">
                      <span className="text-xs font-mono font-bold text-accent-start bg-accent-start/10 border border-accent-start/20 px-2.5 py-0.5 rounded-full uppercase">// 加法 : 放大核心价值与能力深度</span>
                      <ul className="text-xs text-neutral-300 space-y-2.5 list-disc pl-4.5 pt-2 leading-relaxed">
                        <li><strong>专业技术提档：</strong>深耕AI领域，强化核心专业技能，搭建AI知识库，与团队成员定期开展美学意识培训。</li>
                        <li><strong>跨界跨部门协作：</strong>与投手、运营团队进行日频深度业务对齐，精准捕获痛点击。</li>
                        <li><strong>数据反哺机制：</strong>建立“大促CTR/CVR数据库”，把每一张图的表现记录在档，让创意有迹可循。</li>
                      </ul>
                    </div>
                  </div>

                  {/* Subtraction Card */}
                  <div className="p-5.5 rounded-2xl bg-surface border border-stone-800 relative overflow-hidden">
                    <div className="absolute right-4 top-4 text-3xl font-display italic font-light opacity-10 text-stone-600 scale-150 font-bold font-mono">- SUBTRACTION</div>
                    <div className="space-y-3">
                      <span className="text-xs font-mono font-bold text-stone-500 bg-stone-900 border border-stone-850 px-2.5 py-0.5 rounded-full uppercase">// 减法 : 削减低效成本与冗余劳动</span>
                      <ul className="text-xs text-neutral-300 space-y-2.5 list-disc pl-4.5 pt-2 leading-relaxed">
                        <li><strong>砍掉无谓打样：</strong>批量导入 A/B 灰度进行先锋验证，终结盲目试错导致的预算和周期浪费。</li>
                        <li><strong>减少基础重复劳：</strong>模板化主图与基本款Banner（打通PSD自动化出图），释放设计师高级创意精力。</li>
                        <li><strong>沟通漏斗打通：</strong>打磨高度标准化的首发 SOP 详细对接单，降低因模糊表意带来的跨部门损耗。</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Three Steps Milestone Timeline */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono text-stone-500 uppercase tracking-widest">// 分阶段交付三步曲路标</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-stroke/30 border border-white/5 space-y-2 relative">
                      <div className="absolute -top-3.5 left-5 bg-stone-900 border border-stone-800 rounded-full w-7 h-7 text-[10px] font-mono font-bold flex items-center justify-center text-accent-start">01</div>
                      <div className="pt-2">
                        <div className="text-xs font-bold text-text-primary">阶段 1: 基础效率验证 (1 - 3 个月)</div>
                        <p className="text-[11px] text-stone-400 leading-normal mt-1 leading-[1.3] text-justify">
                          搭建完成品类专属基础版款库。主图自动化成图占比提至 40%。确保 AIGC 提效素材引入率大面积落地且其点击率转化不逊于纯人工操作。
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-stroke/30 border border-white/5 space-y-2 relative">
                      <div className="absolute -top-3.5 left-5 bg-stone-900 border border-stone-800 rounded-full w-7 h-7 text-[10px] font-mono font-bold flex items-center justify-center text-accent-start">02</div>
                      <div className="pt-2">
                        <div className="text-xs font-bold text-text-primary">阶段 2: 结构全面优化 (4 - 6 个月)</div>
                        <p className="text-[11px] text-stone-400 leading-normal mt-1 leading-[1.3] text-justify">
                          建立内部高拟真 AIGC 原创专属素材库（3D辅助零件、人物、风景图）。在设计组内全面导入精细 OKR 驱动机制，完成组织阵列精简与效能双增。
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-stroke/30 border border-white/5 space-y-2 relative">
                      <div className="absolute -top-3.5 left-5 bg-stone-900 border border-stone-800 rounded-full w-7 h-7 text-[10px] font-mono font-bold flex items-center justify-center text-accent-start">03</div>
                      <div className="pt-2">
                        <div className="text-xs font-bold text-text-primary">阶段 3: 爆款稳定交付 (7 - 12 个月)</div>
                        <p className="text-[11px] text-stone-400 leading-normal mt-1 leading-[1.3] text-justify">
                          形成系统的电商大促转化方法论闭环。高拟真 3D 素材库全面支持多条核心品牌直客。团队在高峰期整体交付效能爬高 20% 以上，高点击爆图数量翻番。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Values and OKR Metrics */}
                <div className="p-5 bg-surface rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      致力于打造电商行业标杆化影响力（e-commerce industry）
                    </h4>
                    <p className="text-[11px] text-stone-400">以数据为导向，将设计能力转化为可衡量的业务价值。从单点的素材优化到全链路的效率升级，再到直接的业务增长，我始终致力于通过专业设计为品牌营销提供强劲的视觉驱动力与商业增量。</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-mono font-bold bg-bg border border-stroke text-muted px-2.5 py-1 rounded-full">勤奋 / DILIGENCE</span>
                    <span className="text-[9px] font-mono font-bold bg-bg border border-stroke text-muted px-2.5 py-1 rounded-full">进取 / PROGRESS</span>
                    <span className="text-[9px] font-mono font-bold bg-bg border border-stroke text-muted px-2.5 py-1 rounded-full">高效 / EFICIENCY</span>
                    <span className="text-[9px] font-mono font-bold bg-bg border border-stroke text-muted px-2.5 py-1 rounded-full">担当 / RESPONSIBILITY</span>
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
          <div className="fixed inset-0 z-[200] overflow-y-auto bg-black/95 backdrop-blur-md pb-16">
            <div className="min-h-screen py-8 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-start pointer-events-none relative">
              {/* Background click listener to dismiss */}
              <div 
                className="absolute inset-0 cursor-pointer pointer-events-auto" 
                onClick={() => setIsZoomed(false)} 
              />
              
              <motion.div
                initial={{ scale: 0.97, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.97, y: 15, opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
                className="relative w-full max-w-5xl bg-[#0b0b0d] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col gap-8 shadow-2xl pointer-events-auto z-10 my-4"
              >
                {/* Header Meta Row */}
                <div className="flex items-center justify-between pb-4 border-b border-stroke/80 select-none">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-start animate-ping" />
                      <span className="text-[10px] font-mono tracking-[0.25em] text-accent-start uppercase font-bold">AIGC Sop & Implementation Methodologies</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-text-primary">
                      AIGC 提效方法论 • 实施步骤拆解
                    </h3>
                  </div>
                  
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setIsZoomed(false)}
                    className="p-2 text-[#a1a1aa] bg-[#161619] hover:bg-[#222] rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all outline-none border border-white/5 flex items-center justify-center shrink-0"
                    title="关闭视窗 Close Window"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Main Visual Showcase Image */}
                <div className="space-y-3">
                  <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121215] p-2 shadow-xl">
                    <img 
                      src="https://i.postimg.cc/xTm47LK6/zuo-pin-hui-zong-1280X720.png" 
                      alt="作品汇总 Showcase Fullscreen"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain max-h-[60vh] select-none rounded-xl" 
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between text-[9px] md:text-[10px] font-mono text-muted px-1.5 select-none">
                    <span className="text-accent-start font-bold uppercase tracking-widest">// 实战投放核心作品成果一览 (5年优秀视觉大盘)</span>
                    <span>HD 1280 × 720 PX WEBP</span>
                  </div>
                </div>

                {/* Subtitle Divider / Intro */}
                <div className="space-y-2 text-center pt-2 select-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-start/5 border border-accent-start/20 rounded-full text-[10px] font-semibold text-accent-start tracking-wider uppercase">
                    <Sparkles size={11} className="text-[#89AACC] animate-spin-slow" />
                    实务全流程解构 · 人机智能无缝衔接协作 model
                  </div>
                  <p className="text-xs text-neutral-400 max-w-2xl mx-auto leading-relaxed font-body">
                    AIGC不是替代设计师，而是放大其价值。通过“AI处理重复性琐碎素材，人类聚焦创意架构与排版微雕”的闭环，可实现效率与创意的双重突破。
                  </p>
                </div>

                {/* Grid interactive tab bar for PDF implementation steps */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5 p-1 bg-[#121215] border border-stroke rounded-xl select-none">
                  <button
                    onClick={() => setModalStepTab("kpi")}
                    className={`px-3 py-2 text-[11px] rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center gap-0.5 text-center ${modalStepTab === "kpi" ? "bg-accent-start text-bg font-bold shadow-md" : "text-[#a1a1aa] hover:text-text-primary hover:bg-[#1c1c22]"}`}
                  >
                    <TrendingUp size={12} className={modalStepTab === "kpi" ? "text-bg" : "text-accent-start"} />
                    <span>🔥 提效对比量化</span>
                  </button>
                  <button
                    onClick={() => setModalStepTab("step1")}
                    className={`px-3 py-2 text-[11px] rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center gap-0.5 text-center ${modalStepTab === "step1" ? "bg-accent-start text-bg font-bold shadow-md" : "text-[#a1a1aa] hover:text-text-primary hover:bg-[#1c1c22]"}`}
                  >
                    <Boxes size={12} className={modalStepTab === "step1" ? "text-bg" : "text-accent-start"} />
                    <span>📸 01. 视角素材变焦</span>
                  </button>
                  <button
                    onClick={() => setModalStepTab("step2")}
                    className={`px-3 py-2 text-[11px] rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center gap-0.5 text-center ${modalStepTab === "step2" ? "bg-accent-start text-bg font-bold shadow-md" : "text-[#a1a1aa] hover:text-text-primary hover:bg-[#1c1c22]"}`}
                  >
                    <Layers size={12} className={modalStepTab === "step2" ? "text-bg" : "text-accent-start"} />
                    <span>🛠️ 02. 全链路AI协同</span>
                  </button>
                  <button
                    onClick={() => setModalStepTab("step3")}
                    className={`px-3 py-2 text-[11px] rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center gap-0.5 text-center ${modalStepTab === "step3" ? "bg-accent-start text-bg font-bold shadow-md" : "text-[#a1a1aa] hover:text-text-primary hover:bg-[#1c1c22]"}`}
                  >
                    <Cpu size={12} className={modalStepTab === "step3" ? "text-bg" : "text-accent-start"} />
                    <span>🤖 03. 模型智能选型</span>
                  </button>
                  <button
                    onClick={() => setModalStepTab("step4")}
                    className={`px-3 py-2 text-[11px] rounded-lg cursor-pointer transition-all flex flex-col items-center justify-center gap-0.5 text-center ${modalStepTab === "step4" ? "bg-accent-start text-bg font-bold shadow-md" : "text-[#a1a1aa] hover:text-text-primary hover:bg-[#1c1c22]"}`}
                  >
                    <Zap size={12} className={modalStepTab === "step4" ? "text-bg" : "text-accent-start"} />
                    <span>🍬 04. 徐福记二创实战</span>
                  </button>
                </div>

                {/* Sub Tab Content Container */}
                <div className="bg-[#121215]/80 border border-stroke rounded-2xl p-5 md:p-6 min-h-[300px]">
                  <AnimatePresence mode="wait">
                    {/* KPI TAB */}
                    {modalStepTab === "kpi" && (
                      <motion.div
                        key="kpi"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 维度评估量化 (Core Highlight)</span>
                          <h4 className="text-base font-bold text-text-primary">非常有特色的一大亮点：构筑 AI 提效生命线</h4>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed font-body">
                          构建了 <strong className="text-accent-start">“文案设计 - 背景生成 - 素材排版”</strong> 全链路 AI 协同工作流，摒弃了单一、割裂环节的优化，实现全案端到端的极速交付，并在项目全流程中达成完美的 100% 可复制性。
                        </p>
                        
                        {/* KPI comparative grid cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                          <div className="p-4 rounded-xl bg-bg border border-stroke hover:border-accent-start/30 transition-colors space-y-1">
                            <span className="text-[10px] font-mono text-stone-500 uppercase">AIGC 提速对比 // EFFICIENCY</span>
                            <div className="text-xl font-bold text-accent-start flex items-baseline gap-1">
                              <span>单张/40分钟</span>
                              <span className="text-xs text-neutral-500 font-normal line-through">传统2小时</span>
                            </div>
                            <p className="text-[11px] text-stone-400 leading-normal">
                              极速出图。通过AI场景生成将工时缩减 66.7%，在大促期间能完成常态下无法达成的敏捷裂变。
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-bg border border-stroke hover:border-accent-start/30 transition-colors space-y-1">
                            <span className="text-[10px] font-mono text-stone-500 uppercase">人机配合度 // MANPOWER OVERLAP</span>
                            <div className="text-xl font-bold text-[#89AACC] flex items-baseline gap-1">
                              <span>综合成本 3.5人</span>
                              <span className="text-xs text-neutral-500 font-normal line-through">原本需要5人</span>
                            </div>
                            <p className="text-[11px] text-stone-400 leading-normal">
                              综合工时减少 30% 以上。有效减少因素材不一、频繁改版、反复返工带来的人力重压。
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-bg border border-stroke hover:border-accent-start/30 transition-colors space-y-1">
                            <span className="text-[10px] font-mono text-stone-500 uppercase">稿件通过率 // ACCURACY</span>
                            <div className="text-xl font-bold text-emerald-400 flex items-baseline gap-1">
                              <span>错误率降至仅 2%</span>
                              <span className="text-xs text-neutral-500 font-normal line-through">原本达 15%</span>
                            </div>
                            <p className="text-[11px] text-stone-400 leading-normal">
                              模型精准选型 + 设计师经验介入。利用局部分区重绘、垫图调色，极大控制返工率。
                            </p>
                          </div>
                        </div>

                        {/* Custom comparative visual timeline slider */}
                        <div className="pt-2 space-y-2">
                          <span className="text-[10px] font-mono text-[#a1a1aa] block uppercase tracking-wider">// SOP 标准时间占比对照表 (以大促详情完成为例)</span>
                          <div className="space-y-2 bg-[#0e0e11] p-4 rounded-xl border border-stroke">
                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px] font-mono">
                                <span className="text-stone-500">传统视觉设计 S-SOP: 总耗时 5.5 天</span>
                                <span className="text-stone-500">100%</span>
                              </div>
                              <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden">
                                <div className="h-full bg-stone-700" style={{ width: "100%" }} />
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-[11px] font-mono">
                                <span className="text-accent-start font-bold">AIGC 轻量提效工作流 SOP: 仅 3.5 天</span>
                                <span className="text-accent-start font-bold">缩减约 36.3%</span>
                              </div>
                              <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden">
                                <div className="h-full bg-accent-start accent-gradient" style={{ width: "63.7%" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 1 TAB */}
                    {modalStepTab === "step1" && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 01 // PERSPECTIVE & RETOUCHING RESOLUTION</span>
                          <h4 className="text-base font-bold text-text-primary">破局业务痛点：多维视角重构与智能抠图精修</h4>
                        </div>
                        <div className="space-y-2 bg-bg p-4 rounded-xl border border-stroke">
                          <h5 className="text-xs font-bold text-accent-start flex items-center gap-1.5 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-start" />
                            遭遇的业务难题 (Problem)
                          </h5>
                          <p className="text-xs text-neutral-300 leading-relaxed text-justify font-body">
                            真实电商素材往往拍摄杂乱、打光平面、分辨率欠饱满，若重新安排摄影返工，费用高昂且跟不上飞快更迭的大促工期。
                          </p>
                        </div>

                        {/* Cases of AI Assistance */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono text-[#a1a1aa] block uppercase tracking-wider">// AI辅助实操前后重绘对比 (精选产品实例)</span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2">
                              <div className="flex justify-between items-center text-[10px] font-mono text-muted border-b border-stroke pb-1.5">
                                <span>[ 实例 01 ] 松茸鲜、有机料酒</span>
                                <span className="text-accent-start font-bold">视角完美变换</span>
                              </div>
                              <p className="text-xs text-stone-400 font-body leading-relaxed">
                                原始宽扁平面图 ➔ 辅以 AI 一键精细重绘，完美变换为带有黄金透视夹角的 3D 俯视微距质感，配合侧面反光高光打底，立体生动。
                              </p>
                            </div>

                            <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2">
                              <div className="flex justify-between items-center text-[10px] font-mono text-muted border-b border-stroke pb-1.5">
                                <span>[ 实例 02 ] 沙琪玛主图、调制品包装</span>
                                <span className="text-accent-start font-bold">质感细节增补</span>
                              </div>
                              <p className="text-xs text-stone-400 font-body leading-relaxed">
                                平淡粗糙的原图 ➔ AI 深度细节修饰，强化了食品色泽的焦焦酥脆感。对塑料包材增加立体投影阴影，避免传统设计合成的生硬和悬空。
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Real-time benefit block */}
                        <div className="p-4 rounded-xl bg-accent-start/5 border border-accent-start/15 text-xs text-[#89AACC] font-body leading-relaxed flex items-start gap-2">
                          <CheckCircle2 size={14} className="shrink-0 mt-0.5" />
                          <div>
                            <strong>提速成果：</strong>省去繁琐繁重的实景棚拍、手动勾勒路径和多角度精细矫正。直接把以前耗时几数小时的复杂图片处理直接压缩在<strong>短短几分钟</strong>里，高效产出巨量商业级细节作品，大幅提升一次接手成功概率！
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2 TAB */}
                    {modalStepTab === "step2" && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 02 // ALL-CHAIN AI INTEGRATION WORKFLOW</span>
                          <h4 className="text-base font-bold text-text-primary">中枢协同：AI 生成全链路的三步闭环</h4>
                        </div>
                        
                        {/* 3 Step Timeline flow cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-bg/60 border border-stroke p-4 rounded-xl space-y-2 flex flex-col justify-between">
                            <div className="space-y-1.5">
                              <strong className="text-xs text-text-primary block font-mono">01 / 以图推词 (豆包)</strong>
                              <p className="text-[11px] text-stone-400 leading-normal">
                                导入基础品，通过多极点图片语义特征解析，反向推导和自动纠偏生成最适宜产品光照质感的提示词矩阵。
                              </p>
                            </div>
                            <span className="text-[9px] bg-[#161619] border border-white/5 py-0.5 px-2 rounded-full text-accent-start font-mono block w-max">PROMPT RECONSTRUCT</span>
                          </div>

                          <div className="bg-bg/60 border border-stroke p-4 rounded-xl space-y-2 flex flex-col justify-between">
                            <div className="space-y-1.5">
                              <strong className="text-xs text-text-primary block font-mono">02 / 背景生成 (PS / Midjourney)</strong>
                              <p className="text-[11px] text-stone-400 leading-normal">
                                输入反推生成的词库, 自行抽卡筛选拟真材质场景。借助 AI 自动修调环境折射与阴影融合。
                              </p>
                            </div>
                            <span className="text-[9px] bg-[#161619] border border-white/5 py-0.5 px-2 rounded-full text-accent-start font-mono block w-max">BACKGROUND FLOW</span>
                          </div>

                          <div className="bg-bg/60 border border-stroke p-4 rounded-xl space-y-2 flex flex-col justify-between">
                            <div className="space-y-1.5">
                              <strong className="text-xs text-text-primary block font-mono">03 / 字意裂变 (即梦 AI)</strong>
                              <p className="text-[11px] text-stone-400 leading-normal">
                                键入品类艺术大标题名（例: “家用五金宝藏类目”），通过 AIGC 生成自带凹凸浮雕印、白金国潮纹理的艺术金字。
                              </p>
                            </div>
                            <span className="text-[9px] bg-[#161619] border border-white/5 py-0.5 px-2 rounded-full text-accent-start font-mono block w-max">TYPOGRAPHY ACTION</span>
                          </div>
                        </div>

                        {/* Prompt vault bank tags */}
                        <div className="bg-bg border border-stroke p-4 rounded-xl space-y-3">
                          <span className="text-[10px] font-mono text-[#a1a1aa] block uppercase tracking-wider">// 专属提示词模板与实测成果 (VAULT PREVIEW)</span>
                          <div className="flex flex-wrap gap-2 text-[11px] font-sans">
                            <span className="bg-surface border border-white/5 px-2.5 py-1 rounded text-neutral-300"><b>艺术字提示</b>：手意书法字，白金色，微立体金属，极佳阴影</span>
                            <span className="bg-surface border border-white/5 px-2.5 py-1 rounded text-neutral-300"><b>背景提示</b>：中式春日红色调，折扇，微距打光，自然影调</span>
                            <span className="bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded text-emerald-400"><b>大盘实测数据</b>：融合改版后点击率 CTR 从 <b>9.82% → 16.34%</b></span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3 TAB */}
                    {modalStepTab === "step3" && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 03 // SMART TOOLCHAIN SELECTIVITY MATRIX</span>
                          <h4 className="text-base font-bold text-text-primary">模型无缝嵌合：因物制宜的高效 AIGC 矩阵</h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2">
                            <div className="w-7 h-7 rounded-lg bg-accent-start/10 text-accent-start flex items-center justify-center text-xs font-mono font-bold">MJ</div>
                            <strong className="text-xs text-text-primary block font-sans">Midjourney</strong>
                            <p className="text-[11px] text-stone-400 leading-normal">
                              通用高写实环境。生成毫无拼贴痕迹底景，光晕影调自然，是最佳“摄影棚打光”代替者。
                            </p>
                          </div>

                          <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2">
                            <div className="w-7 h-7 rounded-lg bg-[#89AACC]/10 text-[#89AACC] flex items-center justify-center text-xs font-mono font-bold">SD</div>
                            <strong className="text-xs text-text-primary block font-sans">Stable Diffusion</strong>
                            <p className="text-[11px] text-stone-400 leading-normal">
                              高操控性的精准重采样。通过 ControlNet 精确掌控包装瓶罐、汽车边缘，防止图像拉伸崩裂。
                            </p>
                          </div>

                          <div className="p-4 bg-[#89AACC]/5 border border-[#89AACC]/10 rounded-xl space-y-2">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">PS</div>
                            <strong className="text-xs text-text-primary block font-sans">Photoshop Beta</strong>
                            <p className="text-[11px] text-stone-400 leading-normal">
                              一键边界重构与无痕扩图。快捷把1:1主图物料拓充到 16:9 站外开屏画板，完成局部修色。
                            </p>
                          </div>

                          <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2">
                            <div className="w-7 h-7 rounded-lg bg-accent-start/10 text-accent-start flex items-center justify-center text-xs font-mono font-bold">KL</div>
                            <strong className="text-xs text-text-primary block font-sans">可灵 AI / GPT4</strong>
                            <p className="text-[11px] text-stone-400 leading-normal">
                              超清面部重构与痛点解构。大幅精雕由于素材模糊产生的人脸崩坏，让表情温和灵动。
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-bg border border-stroke text-[11px] text-stone-500 font-mono italic text-center rounded-xl">
                          “根据不同的深度品类（美妆、数码、快消、汽车），将多重模型交叉调用并形成标化流水线，是设计的底层必修功。”
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4 TAB */}
                    {modalStepTab === "step4" && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="space-y-6"
                      >
                        <div className="space-y-1 pb-3 border-b border-stroke">
                          <span className="text-[10px] font-mono uppercase text-accent-start font-bold">// 步骤 04 // PRACTICAL BRAND CAMPAIGN CASE STUDY</span>
                          <h4 className="text-base font-bold text-text-primary">实战徐福记：从创意草图到高转化率成稿</h4>
                        </div>

                        {/* Flow steps container */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono text-[#a1a1aa] block uppercase tracking-wider">// 拼图阶段工作细则解构 (4-SOP)</span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                            <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2.5">
                              <span className="text-[10px] bg-accent-start/10 text-accent-start border border-accent-start/20 px-2.5 py-0.5 rounded font-mono font-bold">STEP 01</span>
                              <strong className="text-text-primary block">关键字生初版底图</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed font-body">
                                根据“中式喜庆、沙琪玛特写”生成大体背景与产品初始色温配比。
                              </p>
                            </div>

                            <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2.5">
                              <span className="text-[10px] bg-accent-start/10 text-accent-start border border-accent-start/20 px-2.5 py-0.5 rounded font-mono font-bold">STEP 02</span>
                              <strong className="text-text-primary block">高精背景多选大抽卡</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed font-body">
                                抽取大提速素材。包含红金雕花、大闸蟹国潮祥云、蟹黄咸香氛围的微距细节碎片。
                              </p>
                            </div>

                            <div className="p-4 bg-bg border border-stroke rounded-xl space-y-2.5">
                              <span className="text-[10px] bg-[#89AACC]/10 text-[#89AACC] border border-[#89AACC]/20 px-2.5 py-0.5 rounded font-mono font-bold">STEP 03</span>
                              <strong className="text-text-primary block">螃蟹剪影与智能抠图</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed font-body">
                                针对痛点，智能抽卡并局部合成出带真实金丝光影的螃蟹包装背景元素。
                              </p>
                            </div>

                            <div className="p-2 sm:p-4 bg-[#89AACC]/5 border border-[#89AACC]/15 rounded-xl space-y-2.5">
                              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded font-mono font-bold">STEP 04</span>
                              <strong className="text-text-primary block">大标题微浮雕字定制</strong>
                              <p className="text-[11px] text-stone-400 leading-relaxed font-body">
                                即梦AI产出带有红泥浮雕感的“蟹黄味”文字细节，放入PS高精排版包装产出。
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Final summary recommendation */}
                        <div className="p-4 rounded-xl bg-[#000]/60 border border-stroke text-xs text-stone-300 font-body leading-relaxed flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <strong>最终大盘结果：</strong>通过 AI 智能生包装方案极大减轻了初版探索的繁复。改版后的视觉大促图拥有更细腻生动的蟹黄香，并在投放数据上持续领先！真正实现了<strong>以创意为本，设计重塑价值</strong>的目标。
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Lightbox Footer text details */}
                <div className="flex flex-row items-center justify-between text-[10px] text-stone-500 font-mono select-none border-t border-stroke/60 pt-4">
                  <span>JIAXU ZHUANG DIGITAL PRESENTATION</span>
                  <span>PREVIEW OPTIMIZED // PRESS ESC TO CLOSE</span>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
