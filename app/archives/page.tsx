'use client';

import { motion } from "motion/react";

export default function ArchivesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24"
    >
      {/* Header */}
      <header className="mb-24 border-l-4 border-black pl-8">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">
            Document ID: ARCH-2024-CV
          </span>
          <div className="h-px w-12 bg-black/10"></div>
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Issue 08</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.85]">
          Professional
          <br />
          Record
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-16">
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6 border-b technical-hairline pb-2">
              Profile Overview
            </h2>
            <p className="text-on-surface-variant leading-relaxed font-light text-sm">
              Technical architect specialized in scalable frontend infrastructures and performance optimization.
              Dedicated to the intersection of aesthetic precision and engineering rigor.
            </p>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6 border-b technical-hairline pb-2">
              Technical Stack
            </h2>
            <div className="space-y-6">
              {[
                { label: "Core Architecture", value: "React, Next.js, TypeScript, Micro-frontends" },
                { label: "Styles & UI", value: "Tailwind CSS, Radix UI, Framer Motion" },
                { label: "Infrastructure", value: "AWS, Docker, Vercel, CI/CD Pipelines" },
              ].map((item, idx) => (
                <div key={idx}>
                  <span className="block text-[10px] uppercase font-semibold text-black/50 mb-2">
                    {item.label}
                  </span>
                  <p className="text-[13px] tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-surface-container-low p-8 border technical-hairline">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT1SlBfXucoC-AZRyQrLg50iz00hmPaIGY6viLD3wyRKRETDtEgAwhkE0JRyPwbZm0MZVgZM2pEjzqHy0-IpL6QDiL7YkUA7kgWSKXkI_c25CTbbQP5SSEMFkDJ9HyJgB72l7zySzSbB77fCZotCOue2KAHFeyp6y5soMODa-SMm9bTV0C1Ys9edg8Zu3mEMqzIYgXlmgnw2GJu_IY9MmXyT6p82vtAhsulWSlcWnh58uQNUglobSGVS-RNF9ogL8WhxqQ-k8uUWs"
              alt="Abstract architectural precision"
              className="grayscale w-full aspect-square object-cover mb-6 border technical-hairline"
            />
            <p className="text-[10px] leading-tight text-on-surface-variant uppercase tracking-widest italic opacity-70">
              "Structure is not the decoration. Structure is the essence."
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px technical-hairline"></div>
          <div className="space-y-24 pl-12">
            {[
              {
                company: "ONROIS",
                role: "Senior Frontend Architect",
                period: "2021 — PRESENT",
                summary:
                  "Spearheading the evolution of the core platform architecture with a focus on modularity and high-frequency data rendering.",
                points: [
                  "Engineered a proprietary component library reducing development time by 40% across three sub-product teams.",
                  "Optimized runtime performance by 65% through strategic code-splitting and memoization patterns for real-time dashboards.",
                  "Mentored a team of 12 developers, implementing a standardized code review protocol.",
                ],
              },
              {
                company: "WRT INFOTECH",
                role: "Lead Web Engineer",
                period: "2018 — 2021",
                summary:
                  "Directed full-stack initiatives for enterprise-level logistics software, ensuring 99.9% uptime for mission-critical interfaces.",
                points: [
                  "Successfully migrated legacy PHP codebase to a modern React-based micro-frontend architecture.",
                  "Implemented automated E2E testing suites, resulting in an 85% reduction in regressions.",
                  "Collaborated with stakeholders to define product roadmaps and technical feasibility.",
                ],
              },
            ].map((job, idx) => (
              <article key={idx} className="relative">
                <div className="absolute -left-[52.5px] top-2 w-2 h-2 bg-black"></div>
                <div className="flex justify-between items-baseline mb-6 border-b technical-hairline pb-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight uppercase">{job.company}</h3>
                    <p className="text-on-surface-variant text-sm font-medium">{job.role}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold">{job.period}</span>
                </div>
                <div className="space-y-6">
                  <p className="text-on-surface-variant leading-relaxed text-base">{job.summary}</p>
                  <ul className="space-y-4">
                    {job.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-black font-bold text-[10px] mt-1">0{i + 1}</span>
                        <p className="text-sm leading-relaxed">{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <div className="pt-8 opacity-40">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold">
                Archived Experience Prior to 2018 Available Upon Request
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}