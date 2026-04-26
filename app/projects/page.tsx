'use client';

import { motion } from "motion/react";
import { Network, Ruler, FileText, Cpu } from "lucide-react";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24"
    >
      {/* Header */}
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-on-surface-variant">
              Technical Portfolio
            </span>
            <div className="w-[1px] h-4 bg-black/10"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-on-surface-variant">
              Ref: 2024-ARCH-08
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-black">PROJECTS</h1>
        </div>
        <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">
          A surgical extraction of engineering solutions across multiple environments. High scannability
          architectural overview.
        </p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Project */}
        <section className="md:col-span-8 bg-white border technical-hairline p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-16">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-black mb-2">GO-MANAGE</h2>
                <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                  Enterprise Resource Planning
                </p>
              </div>
              <div className="p-4 bg-background border technical-hairline">
                <Network className="w-6 h-6" />
              </div>
            </div>
            <div className="mb-16">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Objective</h3>
              <p className="text-xl md:text-2xl text-on-surface font-light leading-relaxed max-w-2xl">
                Consolidate fragmented logistics data into a unified, real-time command center for fleet
                management and inventory synchronization.
              </p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">
                Technical Challenges Solved
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-3">
                  <span className="font-bold text-sm tracking-tight">01 / Real-time Latency</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Implemented WebSocket clusters to reduce state-update latency to &lt;50ms across 5k active
                    nodes.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="font-bold text-sm tracking-tight">02 / Concurrency Contention</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Resolved database deadlock issues by introducing an optimistic locking mechanism.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-end">
            <button className="bg-black text-white px-10 py-4 text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-all">
              Full Analysis
            </button>
          </div>
        </section>

        {/* Stats Sidebar */}
        <aside className="md:col-span-4 bg-[#eeeeee] border technical-hairline p-8 md:p-10 flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <span className="text-[10px] block font-bold text-black uppercase tracking-[0.2em] mb-8">
                Environment Stats
              </span>
              <div className="space-y-6">
                {[
                  { label: "Uptime", val: "99.98%" },
                  { label: "Throughput", val: "2.4M req/hr" },
                  { label: "Deploy Cycles", val: "Weekly" },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-black/10 pb-3">
                    <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className="text-[11px] font-bold">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border technical-hairline aspect-square flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-50"></div>
              <div className="w-full h-full border border-dashed technical-hairline flex items-center justify-center relative">
                <Ruler className="w-12 h-12 text-black/10 transition-transform group-hover:scale-110 duration-500" />
                <span className="absolute bottom-4 left-4 text-[8px] font-mono opacity-40 uppercase tracking-[0.3em]">
                  Schematic v.2.4
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Small Projects */}
        {[
          {
            name: "SWIFTRESUME",
            tag: "Automation Engine",
            icon: <FileText className="w-5 h-5 text-black/40" />,
            obj: "Automate the parsing and formatting of unstructured PDF/DOCX resumes into standard JSON-LD schemas.",
            ch: [
              "Handling multi-column layouts via custom preprocessing.",
              "Semantic mapping of job titles using LLM fine-tuning.",
            ],
          },
          {
            name: "LUBI",
            tag: "Edge Computing Framework",
            icon: <Cpu className="w-5 h-5 text-black/40" />,
            obj: "Design a lightweight communication protocol for resource-constrained IoT devices in smart manufacturing plants.",
            ch: [
              "Reducing binary payload overhead by 40% using Protobuf.",
              "Implementing local-first state synchronization.",
            ],
          },
        ].map((p, idx) => (
          <section
            key={idx}
            className="md:col-span-6 bg-white border technical-hairline p-8 md:p-10 flex flex-col hover:border-black transition-colors duration-300"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-black mb-1">{p.name}</h2>
                <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{p.tag}</p>
              </div>
              {p.icon}
            </div>
            <div className="mb-10 flex-grow">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Objective</h3>
              <p className="text-sm font-normal text-on-surface leading-loose mb-10">{p.obj}</p>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Challenges</h3>
              <ul className="space-y-4">
                {p.ch.map((c, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-[9px] font-mono opacity-30 mt-1 uppercase tracking-tighter">
                      CH_0{i + 1}
                    </span>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{c}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t technical-hairline">
              <button className="text-black text-[10px] font-bold tracking-[0.2em] uppercase underline underline-offset-8 decoration-black/20 hover:decoration-black transition-all">
                View Specifications
              </button>
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
}