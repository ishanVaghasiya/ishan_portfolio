'use client';

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function IndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">

      {/* Hero */}
      <header className="py-12 md:py-24 border-b technical-hairline">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-[8rem] font-extrabold tracking-tighter leading-none mb-6 md:mb-0"
          >
            Ishan Vaghasiya
          </motion.h1>
          <div className="flex items-center gap-4">
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-on-surface-variant">
              Folio—2024
            </span>
            <div className="w-[1px] h-8 bg-black/10"></div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              Architect.V1
            </span>
          </div>
        </div>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-8 leading-tight">
            Frontend Architect specializing in technical systems and performance-led digital environments.
          </h2>
          <p className="text-base md:text-xl text-on-surface-variant leading-relaxed mb-10">
            With over 5 years of experience, I bridge the gap between architectural precision and functional
            excellence. I build scalable, high-performance web applications that serve as the structural
            backbone for modern digital products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/archives"
              className="bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black/90 transition-all"
            >
              View Full CV
            </Link>
            <Link
              href="/contact"
              className="border border-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </header>

      {/* Core Stack */}
      <motion.section {...SECTION_ANIMATION} className="py-20">
        <div className="flex items-center justify-between mb-8 border-b technical-hairline pb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
            Section 01
          </span>
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Core Stack & Competencies</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 border-t technical-hairline">
          {[
            {
              title: "Frameworks & Libraries",
              items: ["React.js / Next.js", "TypeScript / ES6+", "React Native", "Angular", "Node.js / Express", "Socket.IO", 'web-sockets'],
            },
            { title: "Architecture", items: ["Design Systems", "Micro-Frontends", "State Management", "CI/CD Pipelines"] },
            {
              title: "State & Data",
              items: ["Redux / Redux Toolkit", "React Query", "Apollo Client", "GraphQL / REST"],
            },
            {
              title: "Performance",
              items: ["SSR / SSG / ISR", "Code Splitting", "Lazy Loading", "Lighthouse Audits"],
            },
            {
              title: "Styling & UI",
              items: ["Tailwind CSS", "Material UI", "SCSS / CSS Modules", "Storybook", "Styled Components", "Framer Motion"],
            },
          ].map((col, idx) => (
            <div
              key={idx}
              className={`p-8 border-b technical-hairline bg-white/50 hover:bg-white transition-colors ${
                idx !== 3 ? "md:border-r" : ""
              }`}
            >
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3 text-[13px] font-medium tracking-tight">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black/20"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Professional History */}
      <motion.section {...SECTION_ANIMATION} className="py-20">
        <div className="flex items-center justify-between mb-8 border-b technical-hairline pb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
            Section 02
          </span>
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Professional History</h3>
        </div>
        <div className="divide-y technical-hairline">
          {[
            {
              period: "Dec 2024—PRESENT",
              role: "Lead React Developer",
              company: "Onrois, Surat",
              desc: "Leading the migration of legacy monoliths to micro-frontend architectures. Mentoring a team of 12 engineers and defining global frontend standards for multiple Next.js projects with SSR/SSG for SEO and 30% faster load times. Built reusable UI libraries with Storybook and mentored junior developers and.",
            },
            {
              period: "Nov 2021—Dec 2024",
              role: "Senior Frontend Developer",
              company: "WRT Infotech, Surat",
              desc: "Architected the core UI library for a SaaS product serving 500k monthly active users. Implemented strict automated testing protocols Delivered 10+ key features in React, Angular & React Native. Achieved 30% faster load times via React Query optimization, integrated real-time Socket.IO updates, and built push notification systems for 4,500+ users.",
            },
            {
              period: "Jul 2021—Oct 2021",
              role: "Junior Software Developer",
              company: "TechStaunch Software Solutions",
              desc: "Developed modern responsive interfaces with React and Next.js using TypeScript, improving project turnaround times by an average of 15%.",
            },
            {
              period: "Mar 2021—Jul 2021",
              role: "Intern",
              company: "Gainserv Tech LLP",
              desc: "Gained proficiency in React.js, HTML, CSS, JavaScript, and Git. Contributed to Agile scrum sprints and improved team collaboration by 20%.",
            },
          ].map((job, idx) => (
            <div
              key={idx}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 px-2 hover:bg-surface-container-high transition-colors"
            >
              <div className="md:col-span-2 text-xs font-bold uppercase tracking-[0.2em]">{job.period}</div>
              <div className="md:col-span-4">
                <h5 className="font-bold text-lg">{job.role}</h5>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mt-1">{job.company}</p>
              </div>
              <div className="md:col-span-6 text-[14px] text-on-surface-variant leading-relaxed">
                {job.desc}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...SECTION_ANIMATION} className="py-32 text-center">
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-4xl mx-auto leading-none">
          Ready to build something great together?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-black text-white px-12 py-5 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 group transition-all"
          >
            Start a Conversation{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/archives"
            className="border border-black px-12 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all"
          >
            Full Resume / CV
          </Link>
        </div>
      </motion.section>
    </div>
  );
}