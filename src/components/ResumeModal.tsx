import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Phone, Mail, Award, BookOpen, User, Star, Copy, Check } from "lucide-react";
import { useState } from "react";
import { PERSONAL_INFO, WORK_HISTORY } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content - Drawer sliding from right or center depending on size */}
          <motion.div
            initial={{ x: "100%", opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.9 }}
            transition={{ type: "spring", damping: 30, stiffness: 180 }}
            className="relative w-full max-w-4xl h-full bg-surface border-l border-stroke flex flex-col shadow-2xl "
          >
            {/* Action Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stroke bg-bg/50 backdrop-blur-md print:hidden">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-muted tracking-widest font-mono uppercase">
                  ONLINE CV // JIAXU ZHUANG
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 text-xs text-text-primary/80 bg-stroke hover:bg-stroke/80 border border-white/5 py-1.5 px-3 rounded-full hover:scale-105 transition-all cursor-pointer"
                  title="打印简历 / 保存PDF"
                >
                  <Printer size={13} />
                  <span>打印 / PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 bg-stroke hover:bg-stroke/80 border border-white/5 rounded-full text-text-primary transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Resume Base - Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 print:p-0 print:overflow-visible print:bg-white print:text-black">
              {/* Printable container styling wrapper */}
              <div className="max-w-3xl mx-auto space-y-10 print:text-neutral-900">
                
                {/* Header Header */}
                <div className="border-b border-stroke pb-8 print:border-neutral-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-display font-medium text-text-primary print:text-neutral-950">
                        {PERSONAL_INFO.name}
                      </h1>
                      <p className="text-sm text-muted font-mono tracking-widest uppercase mt-2 print:text-neutral-500">
                        {PERSONAL_INFO.enName}  •  电商设计师 / 视觉设计师
                      </p>
                      
                      {/* Technical tag pills */}
                      <div className="flex flex-wrap gap-2 mt-4 print:hidden">
                        <span className="text-[10px] uppercase font-mono tracking-wider bg-stroke border border-white/5 text-muted px-2.5 py-1 rounded-full">
                          5年实战
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider bg-stroke border border-white/5 text-muted px-2.5 py-1 rounded-full">
                          C4D三维
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider bg-stroke border border-white/5 text-muted px-2.5 py-1 rounded-full">
                          ENFJ主人公
                        </span>
                        <span className="text-[10px] uppercase font-mono tracking-wider bg-stroke border border-white/5 text-muted px-2.5 py-1 rounded-full">
                          7年美术基础
                        </span>
                      </div>
                    </div>

                    {/* Contact grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 text-xs text-muted md:text-right print:text-left print:text-neutral-800">
                      <div className="flex items-center gap-2 md:justify-end">
                        <Mail size={12} className="text-accent-start print:text-neutral-600" />
                        <span className="font-mono text-text-primary font-semibold">{PERSONAL_INFO.email}</span>
                        <button
                          onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                          className="p-1 hover:text-text-primary hover:bg-stroke rounded transition-colors cursor-pointer print:hidden"
                        >
                          {copiedText === "email" ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
                        </button>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end">
                        <Phone size={12} className="text-accent-start print:text-neutral-600" />
                        <span className="font-mono text-text-primary font-semibold">{PERSONAL_INFO.phone}</span>
                        <button
                          onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                          className="p-1 hover:text-text-primary hover:bg-stroke rounded transition-colors cursor-pointer print:hidden"
                        >
                          {copiedText === "phone" ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} />}
                        </button>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end">
                        <User size={12} className="text-accent-start print:text-neutral-600" />
                        <span>MBTI: {PERSONAL_INFO.mbti}</span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end">
                        <BookOpen size={12} className="text-accent-start print:text-neutral-600" />
                        <span>北京 / 现居</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cover profile statement */}
                <div className="relative p-6 rounded-2xl bg-surface/50 border border-white/5 print:bg-neutral-50 print:border-neutral-200 print:p-4">
                  <div className="absolute top-4 right-4 flex items-center pr-2 print:hidden text-accent-start">
                    <Star size={16} className="text-accent-start fill-accent-start/35" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-widest text-text-primary uppercase font-mono mb-2 flex items-center gap-2 print:text-neutral-900">
                    <span>个人优势 // PROFILE SUMMARY</span>
                  </h3>
                  <p className="text-xs leading-relaxed text-muted print:text-neutral-700 text-justify">
                    {PERSONAL_INFO.summary}
                  </p>
                </div>

                {/* Section: Work Experience */}
                <div className="space-y-6">
                  <h2 className="text-base font-bold tracking-widest text-text-primary uppercase font-mono border-b border-stroke pb-2 flex items-center gap-2 print:text-neutral-900 print:border-neutral-300">
                    <span>工作经历 // EXPERIENCE</span>
                  </h2>

                  <div className="space-y-8">
                    {WORK_HISTORY.map((exp, index) => (
                      <div key={index} className="relative group pl-4 md:pl-6 border-l-2 border-stroke hover:border-accent-start print:border-neutral-300 print:hover:border-neutral-300 transition-colors">
                        <div className="absolute w-3 h-3 rounded-full bg-accent-start -left-[7px] top-1.5 transition-all group-hover:scale-125 print:hidden" />
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                          <div>
                            <h3 className="text-base font-semibold text-text-primary print:text-neutral-950">
                              {exp.company}
                            </h3>
                            <p className="text-xs font-mono text-accent-start font-medium mt-0.5 print:text-neutral-600">
                              {exp.role}
                            </p>
                          </div>
                          <span className="text-xs font-mono text-muted bg-stroke/30 print:bg-neutral-100 print:text-neutral-500 border border-white/5 print:border-none px-2 py-0.5 rounded sm:self-start">
                            {exp.period}
                          </span>
                        </div>

                        {/* Co-op brands tags */}
                        {exp.brands && exp.brands.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            <span className="text-[10px] uppercase font-mono text-muted mr-1 self-center">服务品牌:</span>
                            {exp.brands.map((brand, bIdx) => (
                              <span key={bIdx} className="text-[9px] font-mono text-text-primary/70 bg-bg px-2 py-0.5 rounded border border-white/5 print:bg-neutral-50 print:text-neutral-700 print:border-neutral-200">
                                {brand}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Job descriptions */}
                        <div className="mt-4 space-y-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted font-mono print:text-neutral-700">工作内容:</h4>
                          <ul className="list-disc pl-4 space-y-1.5 text-xs text-muted print:text-neutral-700">
                            {exp.descriptions.map((desc, dIdx) => (
                              <li key={dIdx} className="leading-relaxed text-justify">{desc}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="mt-4 space-y-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-accent-start font-mono print:text-neutral-800">工作业绩 / 成果:</h4>
                          <ul className="list-disc pl-4 space-y-1.5 text-xs text-text-primary/90 print:text-neutral-900">
                            {exp.achievements.map((ach, aIdx) => (
                              <li key={aIdx} className="leading-relaxed font-medium text-justify">{ach}</li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid for Skills & Education / Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Left Column: Education & Certs */}
                  <div className="space-y-6">
                    <h2 className="text-base font-bold tracking-widest text-text-primary uppercase font-mono border-b border-stroke pb-2 print:text-neutral-900 print:border-neutral-300">
                      教育经历 // EDUCATION
                    </h2>
                    <div className="p-4 bg-surface/30 rounded-xl border border-white/5 print:border-neutral-100 print:bg-neutral-50">
                      <h4 className="text-sm font-semibold text-text-primary print:text-neutral-950">
                        {PERSONAL_INFO.education.school}
                      </h4>
                      <div className="flex justify-between items-center mt-1 text-xs text-muted print:text-neutral-600">
                        <span>{PERSONAL_INFO.education.degree}</span>
                        <span className="font-mono">{PERSONAL_INFO.education.period}</span>
                      </div>
                      <ul className="mt-3 list-disc pl-4 text-[11px] text-muted space-y-1 print:text-neutral-600">
                        <li>在校期间担任班长、学生会生活部干事，具备出色的协调及领导力。</li>
                        <li>曾任大学生记者站主持人，圆满主持学院迎新晚会和大型才艺赛事。</li>
                        <li>主修平面构成、色彩学、包装装潢、交互体验与新媒体视觉传播。</li>
                      </ul>
                    </div>

                    <h2 className="text-base font-bold tracking-widest text-text-primary uppercase font-mono border-b border-stroke pb-2 pt-2 print:text-neutral-900 print:border-neutral-300">
                      资格证书 // CREDENTIALS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted print:text-neutral-700">
                      {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 p-2.5 bg-bg border border-stroke rounded-xl print:bg-neutral-50 print:border-neutral-200">
                          <Award size={14} className="text-accent-start print:text-neutral-600 shrink-0" />
                          <span className="truncate leading-none">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Skills */}
                  <div className="space-y-5">
                    <h2 className="text-base font-bold tracking-widest text-text-primary uppercase font-mono border-b border-stroke pb-1.5 print:text-neutral-900 print:border-neutral-300">
                      技能雷达面 // SKILLS RADAR
                    </h2>
                    <div className="space-y-3 p-3 bg-surface/30 rounded-2xl border border-white/5 print:border-neutral-100 print:bg-neutral-50">
                      {PERSONAL_INFO.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="font-medium text-text-primary print:text-neutral-900">{skill.name}</span>
                            <span className="font-mono text-muted print:text-neutral-500">{skill.percent}%</span>
                          </div>
                          <div className="w-full h-1 bg-stroke rounded-full overflow-hidden print:bg-neutral-200">
                            <div
                              className="h-full accent-gradient rounded-full origin-left"
                              style={{ width: `${skill.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4.5 bg-bg/80 border border-stroke/90 rounded-2xl text-left space-y-2 print:bg-neutral-50 print:border-neutral-200">
                      <div className="text-xs font-semibold tracking-wide text-accent-start font-sans">
                        探索AI的无限可能 <span className="text-[10px] text-muted font-normal block sm:inline sm:ml-1 font-mono">(Exploring the infinite possibilities of AI)</span>
                      </div>
                      <p className="text-[12px] text-neutral-300 font-body leading-relaxed print:text-neutral-700">
                        AIGC不是替代设计师，而是放大其价值。通过“AI处理重复，人类聚焦创新”的协作模式，可实现效率与创意的双重突破，最终达成降本增效目标。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Watermark */}
                <div className="text-center pt-8 border-t border-stroke text-[10px] text-muted font-mono tracking-widest print:border-neutral-300 print:text-neutral-400">
                  © 2026 JIAXU ZHUANG • CRAFTED WITH ELEGANCE & PASSION
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
