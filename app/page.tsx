'use client';

import { motion } from "motion/react";
import { ArrowRight, Zap, Users, TrendingUp, Clock, Bot, Code2, GitMerge, TestTube } from "lucide-react";
import Link from "next/link";
import { getExperienceLabel } from "@/lib/util";

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const PROOF_STATS = [
  {
    icon: <Users className="w-4 h-4" />,
    value: "500k+",
    label: "Monthly Active Users",
    context: "Served by the SaaS UI I architected at WRT Infotech",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    value: "30%",
    label: "Faster Load Times",
    context: "Via SSR/SSG & React Query optimisation across products",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    value: "98%",
    label: "Notification Delivery",
    context: "Push system built for 4,500+ subscribers via Suprsend",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    value: getExperienceLabel(),
    label: "Production Experience",
    context: "React · Next.js · TypeScript — intern to Lead Architect",
  },
];

const AI_ITEMS = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Accelerated Scaffolding",
    desc: "GitHub Copilot & Cursor reduce component boilerplate time by ~40%. Every sprint starts at 60% — not 0%.",
    impact: "~40% faster delivery",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Architecture Reviews",
    desc: "Claude & ChatGPT flag pattern issues before code review cycles — catching costly mistakes in minutes, not days.",
    impact: "Fewer rework cycles",
  },
  {
    icon: <TestTube className="w-5 h-5" />,
    title: "AI-Generated Test Suites",
    desc: "Jest & RTL coverage generated with AI assistance. Higher coverage without proportional time cost — clients get quality, not just speed.",
    impact: "Higher test coverage",
  },
  {
    icon: <GitMerge className="w-5 h-5" />,
    title: "Faster Handoffs",
    desc: "AI-assisted documentation means handoff time drops from days to hours. Teams I hand off to are never blocked.",
    impact: "Hours, not days",
  },
];

export default function IndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24">

      {/* ─── HERO — Everything above the fold ─── */}
      <header className="min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-between border-b technical-hairline pb-12 md:pb-16">

        {/* Top meta row */}
        <motion.div {...FADE_UP(0)} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-on-surface-variant">
              Lead Frontend Architect
            </span>
            <div className="w-[1px] h-4 bg-black/15" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-on-surface-variant">
              Modern frontend platforms · TypeScript
            </span>
          </div>
          {/* Availability badge — the single most important status signal */}
          <div className="flex items-center gap-2 border border-black px-3 py-2 w-full sm:w-auto">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse block" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] leading-tight">
              Open to Opportunities · Remote · Worldwide
            </span>
          </div>
        </motion.div>

        {/* Name — large, owning the space */}
        <div>
          <motion.h1
            {...FADE_UP(0.1)}
            className="text-[clamp(2.2rem,7vw,5.5rem)] font-extrabold tracking-tighter leading-[0.9] mb-5"
          >
            Ishan<br />Vaghasiya
          </motion.h1>

          {/* THE ONE CLAIM — scannable in 2 seconds */}
          <motion.p
            {...FADE_UP(0.2)}
            className="text-base sm:text-xl md:text-2xl font-medium tracking-tight max-w-3xl leading-snug mb-8 text-on-surface"
          >
            Lead Frontend Architect who ships{" "}
            <span className="font-extrabold text-black">production-grade frontend systems at scale</span>
            {" "}— and uses{" "}
            <span className="font-extrabold text-black">AI tooling</span> to deliver
            more, faster, and at lower cost than any team at my level.
            The numbers are in the cards below.
          </motion.p>

          {/* Proof chips — visible without any scrolling */}
          <motion.div {...FADE_UP(0.3)} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {PROOF_STATS.map((s, i) => (
              <div key={i} className="bg-white border technical-hairline p-5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-black/30">{s.icon}</div>
                <span className="text-2xl md:text-3xl font-extrabold tracking-tighter">{s.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-black font-bold leading-tight">
                  {s.label}
                </span>
                <span className="text-[10px] text-on-surface-variant leading-snug">
                  {s.context}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...FADE_UP(0.4)} className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="/projects"
              className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-black/80 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/archives"
              className="border border-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all"
            >
              Full CV / Resume
            </Link>
            <Link
              href="/contact"
              className="border border-black/30 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:border-black transition-all text-on-surface-variant"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </header>

      {/* ─── AI-AUGMENTED DEVELOPMENT — the differentiator ─── */}
      <motion.section {...SECTION_ANIMATION} className="py-24 border-b technical-hairline">
        <div className="flex items-start justify-between mb-12 gap-8 flex-col md:flex-row md:items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant block mb-3">
              Section 01 · Competitive Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none">
              AI-Augmented<br />Development
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-sm leading-relaxed">
            I don't just use AI tools. I've built systematic AI workflows into every phase of delivery —
            so clients get more output in fewer sprints, at lower cost.
          </p>
        </div>

        {/* The value statement — bold and impossible to miss */}
        <div className="bg-black text-white p-8 md:p-12 mb-10">
          <p className="text-sm md:text-xl font-light leading-relaxed max-w-3xl">
            "What takes a typical team{" "}
            <span className="font-extrabold">2 sprints</span>, I deliver in{" "}
            <span className="font-extrabold">1</span> — with the same quality bar.
            AI doesn't replace my judgment. It compresses my execution time."
          </p>
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-6">
            — Ishan Vaghasiya · Lead Frontend Architect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AI_ITEMS.map((item, i) => (
            <div key={i} className="bg-white border technical-hairline p-8 hover:border-black transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 border technical-hairline group-hover:bg-black group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest border technical-hairline px-3 py-1 text-black/40">
                  {item.impact}
                </span>
              </div>
              <h3 className="font-bold text-base tracking-tight mb-3">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SwiftResume as proof of AI product shipping */}
        <div className="mt-6 bg-[#eeeeee] border technical-hairline p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-black/40 block mb-2">
              Live Proof · AI Product Shipped
            </span>
            <p className="text-base font-bold tracking-tight">SwiftResume — AI-Powered Resume Builder</p>
            <p className="text-sm text-on-surface-variant mt-1">
              Built with Next.js 15 + OpenAI. Not just a tool user — a builder of AI products.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 bg-black text-white px-8 py-3 text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-all"
          >
            See the Project
          </Link>
        </div>
      </motion.section>

      {/* ─── CORE STACK — condensed, outcome-framed ─── */}
      <motion.section {...SECTION_ANIMATION} className="py-24 border-b technical-hairline">
        <div className="flex items-center justify-between mb-10 border-b technical-hairline pb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
            Section 02
          </span>
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Core Stack & Competencies</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border technical-hairline divide-y md:divide-x technical-hairline">
          {[
            {
              title: "Frameworks",
              items: ["React.js / Next.js", "TypeScript / ES6+", "React Native", "Angular", "Node.js / Express"],
            },
            {
              title: "Architecture",
              items: ["Micro-Frontends", "Design Systems", "CI/CD Pipelines", "SSR / SSG / ISR"],
            },
            {
              title: "State & Data",
              items: ["Redux Toolkit", "React Query", "Apollo Client", "GraphQL / REST"],
            },
            {
              title: "Performance",
              items: ["Code Splitting", "Lazy Loading", "Lighthouse Audits", "Socket.IO / WS"],
            },
            {
              title: "AI Tooling",
              items: ["GitHub Copilot", "Cursor IDE", "Claude / ChatGPT", "OpenAI API", "Prompt Engineering"],
            },
          ].map((col, idx) => (
            <div key={idx} className="p-6 bg-white hover:bg-surface-container-high transition-colors">
              <h4 className="text-[9px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-5 pb-2 border-b technical-hairline">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[12px] font-medium tracking-tight">
                    <div className="w-1 h-1 bg-black/20 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ─── PROFESSIONAL HISTORY — scannable, outcome-led ─── */}
      <motion.section {...SECTION_ANIMATION} className="py-24 border-b technical-hairline">
        <div className="flex items-center justify-between mb-10 border-b technical-hairline pb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
            Section 03
          </span>
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Professional History</h3>
        </div>
        <div className="divide-y technical-hairline">
          {[
            {
              period: "Dec 2024 — Present",
              role: "Lead Frontend Developer",
              company: "Onrois · Surat",
              tag: "Current",
              wins: ["Team of 12 engineers led", "30% faster load via SSR/SSG", "Micro-frontend migration", "Storybook UI library shipped"],
              desc: "Leading the architectural migration from monolith to micro-frontends across multiple web products. Defining global frontend standards, owning delivery quality, and mentoring 12 engineers.",
            },
            {
              period: "Nov 2021 — Dec 2024",
              role: "Senior Frontend Developer",
              company: "WRT Infotech · Surat",
              tag: "3 Years",
              wins: ["500k monthly active users", "10+ features shipped in 3 months", "4,500+ push notification users", "98% notification delivery"],
              desc: "Architected the core UI library for a SaaS platform at scale. Built real-time Socket.IO features, push notification systems, analytics dashboards, and AI-assisted tooling integrations.",
            },
            {
              period: "Jul 2021 — Oct 2021",
              role: "Junior Software Developer",
              company: "TechStaunch · Surat",
              tag: null,
              wins: ["15% faster project turnaround"],
              desc: "Built responsive interfaces with modern frontend tools and TypeScript — first production TypeScript experience.",
            },
            {
              period: "Mar 2021 — Jul 2021",
              role: "Intern",
              company: "Gainserv Tech LLP · Surat",
              tag: null,
              wins: ["20% collaboration improvement"],
              desc: "First exposure to professional React development, Git workflows, and Agile scrum practices.",
            },
          ].map((job, idx) => (
            <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 px-2 hover:bg-white transition-colors">
              <div className="md:col-span-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant leading-relaxed">
                  {job.period}
                </p>
                {job.tag && (
                  <span className="inline-block mt-2 text-[9px] font-bold uppercase tracking-widest border border-black px-2 py-0.5">
                    {job.tag}
                  </span>
                )}
              </div>
              <div className="md:col-span-3">
                <h4 className="font-bold text-base tracking-tight leading-tight">{job.role}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mt-1">{job.company}</p>
              </div>
              <div className="md:col-span-4 text-sm text-on-surface-variant leading-relaxed">
                {job.desc}
              </div>
              <div className="md:col-span-3 flex flex-col gap-2 content-start">
                <span className="text-[9px] uppercase tracking-widest font-bold text-black/30 mb-1">Key outcomes</span>
                {job.wins.map((w, i) => (
                  <span key={i} className="text-[9px] font-bold uppercase tracking-widest bg-[#eeeeee] px-2.5 py-1.5 border technical-hairline">
                    ✓ {w}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ─── CTA ─── */}
      <motion.section {...SECTION_ANIMATION} className="pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant mb-4">
              Ready to build?
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none mb-5">
              Let's ship something great — faster than you'd expect.
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
              Full-time roles, freelance contracts, technical consulting — I'm open to the right conversation.
              Response within 24 hours, guaranteed.
            </p>
          </div>
          <div className="space-y-4">
            <Link
              href="/contact"
              className="w-full bg-black text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 group hover:bg-black/80 transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/archives"
              className="w-full border border-black px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all flex items-center justify-center"
            >
              Download Full CV
            </Link>
            <div className="flex items-center gap-3 p-4 border technical-hairline bg-white">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                Currently available · Full-time remote · Worldwide
              </p>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}