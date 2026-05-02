'use client';

import { motion } from "motion/react";
import { Bot, Code2, TestTube, GitMerge } from "lucide-react";
import { getCurrentYear, getExperienceYears } from "@/lib/util";

export default function ArchivesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24"
    >
      {/* ─── Header — confident, not bureaucratic ─── */}
      <header className="mb-12 md:mb-20 border-b technical-hairline pb-10 md:pb-16">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">
                CV · IV-{getCurrentYear()}
              </span>
              <div className="h-px w-12 bg-black/10" />
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">
                Lead Frontend Architect
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.9]">
              Ishan<br />Vaghasiya
            </h1>
          </div>
          {/* The positioning statement — prominent, not buried */}
          <blockquote className="max-w-full md:max-w-xs border-l-4 border-black pl-5">
            <p className="text-base md:text-lg font-medium leading-snug italic">
              "Performance is not a feature. It is the foundation."
            </p>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-3">
              Ishan Vaghasiya
            </p>
          </blockquote>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

        {/* ─── Sidebar ─── */}
        <aside className="lg:col-span-4 space-y-12">

          {/* Profile — outcome-first, not a job description */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-5 border-b technical-hairline pb-2">
              Profile
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Lead Frontend Architect with {getExperienceYears()} years shipping production-grade modern web systems
              at scale. I've built UIs serving <strong className="text-black">500k+ monthly users</strong>,
              reduced load times by <strong className="text-black">30%</strong>, and currently lead a team
              of <strong className="text-black">12 engineers</strong>. I integrate AI tooling into every delivery
              cycle — cutting sprint time, increasing test coverage, and lowering cost for every client I work with.
            </p>
          </section>

          {/* Availability */}
          <section className="bg-black text-white p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Currently Available</span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              Open to full-time remote roles and senior contracts worldwide. Response within 24 hours.
            </p>
            <div className="space-y-2 border-t border-white/10 pt-4">
              <a
                href="mailto:ishanvaghasiya2786@gmail.com"
                className="block text-[11px] font-medium text-white/70 hover:text-white transition-colors"
              >
                ishanvaghasiya2786@gmail.com
              </a>
              <a
                href="tel:+916359576261"
                className="block text-[11px] font-medium text-white/70 hover:text-white transition-colors"
              >
                +91 6359 576 261
              </a>
              <p className="text-[11px] text-white/50">Surat, Gujarat · Remote Worldwide</p>
            </div>
          </section>

          {/* Technical Stack */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-5 border-b technical-hairline pb-2">
              Technical Stack
            </h2>
            <div className="space-y-5">
              {[
                { label: "Frameworks", value: "React.js, Next.js, Angular, React Native" },
                { label: "Languages", value: "TypeScript, JavaScript (ES6+), HTML5, CSS3" },
                { label: "State & Data", value: "Redux Toolkit, React Query, Apollo Client, GraphQL" },
                { label: "Real-time", value: "Socket.IO, Pusher, WebSockets" },
                { label: "Styling", value: "Tailwind CSS, MUI, SCSS, Styled Components, Storybook" },
                { label: "Testing", value: "Jest, React Testing Library, Jasmine, Karma" },
                { label: "DevOps", value: "Git, GitHub Actions, GitLab CI/CD, Agile / Scrum" },
                { label: "AI Tooling", value: "GitHub Copilot, Cursor, Claude, ChatGPT, OpenAI API" },
              ].map((item, idx) => (
                <div key={idx}>
                  <span className="block text-[9px] uppercase font-bold text-black/40 mb-1.5">
                    {item.label}
                  </span>
                  <p className="text-[12px] tracking-tight leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education — B.E. only */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-5 border-b technical-hairline pb-2">
              Education
            </h2>
            <div className="border-l-2 border-black/10 pl-4">
              <p className="font-bold text-sm">B.E. — Information Technology</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">GEC Bhavnagar</p>
              <div className="flex gap-4 mt-1.5">
                <span className="text-[10px] text-on-surface-variant">Jun 2018 – Jun 2022</span>
                <span className="text-[10px] font-bold">8.07 CGPA</span>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-5 border-b technical-hairline pb-2">
              Languages
            </h2>
            <div className="flex gap-3">
              {["English", "Hindi", "Gujarati"].map((lang) => (
                <span key={lang} className="text-[10px] font-bold border technical-hairline px-3 py-2 uppercase tracking-widest">
                  {lang}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-5 border-b technical-hairline pb-2">
              Online
            </h2>
            <div className="space-y-3">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/ishanvaghasiya" },
                { label: "GitHub", href: "https://github.com/ishanvaghasiya" },
                { label: "Portfolio", href: "/" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest group-hover:underline">
                    {link.label}
                  </span>
                  <span className="text-[10px] text-on-surface-variant group-hover:text-black transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>
          </section>
        </aside>

        {/* ─── Main Content ─── */}
        <div className="lg:col-span-8 relative">
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-black/10" />
          <div className="space-y-16 lg:pl-12">

            {/* ─── AI-Augmented Development section on CV ─── */}
            <article>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-5 border-b technical-hairline pb-4 gap-1">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight uppercase">AI-Augmented Delivery</h3>
                  <p className="text-on-surface-variant text-sm font-medium">Systematic Workflow Integration</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold shrink-0 text-black/40">
                  Competitive Advantage
                </span>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                I've built AI tooling into every phase of my development cycle — not as a novelty, but as a
                systematic productivity multiplier. The result: more output per sprint, higher coverage,
                faster handoffs — at lower cost for every client.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  {
                    icon: <Code2 className="w-4 h-4" />,
                    title: "Accelerated Scaffolding",
                    desc: "GitHub Copilot & Cursor cut component boilerplate by ~40%. Sprints start at 60%, not 0%.",
                  },
                  {
                    icon: <Bot className="w-4 h-4" />,
                    title: "Architecture Reviews",
                    desc: "Claude & ChatGPT flag structural issues before code review — catching expensive mistakes early.",
                  },
                  {
                    icon: <TestTube className="w-4 h-4" />,
                    title: "AI Test Generation",
                    desc: "Jest & RTL suites generated with AI assistance — higher coverage without proportional time cost.",
                  },
                  {
                    icon: <GitMerge className="w-4 h-4" />,
                    title: "Faster Handoffs",
                    desc: "AI-assisted documentation reduces handoff time from days to hours. Teams I hand to are never blocked.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-[#eeeeee] border technical-hairline p-5">
                    <div className="flex items-center gap-2 mb-3 text-black/50">{item.icon}
                      <span className="text-[10px] font-bold uppercase tracking-widest">{item.title}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-black text-white p-5">
                <p className="text-sm font-light leading-relaxed">
                  "What takes a typical team <strong>2 sprints</strong>, I deliver in{" "}
                  <strong>1</strong> — same quality bar. AI doesn't replace judgment. It compresses execution time."
                </p>
              </div>
            </article>

            {/* ─── Work Experience ─── */}
            {[
              {
                company: "ONROIS",
                role: "Lead Frontend Developer",
                period: "Dec 2024 — PRESENT",
                location: "Surat",
                points: [
                  "Lead frontend architecture across multiple Next.js products — SSR/SSG delivering 30% faster load times and improved SEO.",
                  "Managing and mentoring a team of 12 engineers — task delegation, code review, and delivery ownership.",
                  "Built and maintains the company-wide Storybook UI library — eliminating design inconsistency across all products.",
                  "Driving micro-frontend migration from legacy monolith — enabling independent team deployments and faster release cycles.",
                  "25% performance gain achieved through systematic lazy loading and code splitting audits.",
                ],
              },
              {
                company: "WRT INFOTECH",
                role: "Senior Frontend Developer",
                period: "Nov 2021 — Dec 2024",
                location: "Surat",
                points: [
                  "Architected the core UI library for a SaaS platform serving 500k+ monthly active users.",
                  "Shipped 10+ production features across React, Angular, and React Native within the first 3 months.",
                  "Reduced load times by 30% via React Query and Axios optimization — directly improving user retention.",
                  "Integrated Socket.IO and Pusher for real-time features — live appointment sync with sub-second latency.",
                  "Built push notification infrastructure for 4,500+ subscribers with 98% delivery via Suprsend.",
                  "Boosted data-driven decision-making by 25% through interactive Chart.js analytics dashboards.",
                ],
              },
              {
                company: "TECHSTAUNCH SOFTWARE SOLUTIONS",
                role: "Junior Software Developer",
                period: "Jul 2021 — Oct 2021",
                location: "Surat",
                points: [
                  "Built responsive modern frontend interfaces with TypeScript — first production-grade TS experience.",
                  "Improved average project turnaround time by 15% through streamlined component reuse patterns.",
                ],
              },
              {
                company: "GAINSERV TECH LLP",
                role: "Intern",
                period: "Mar 2021 — Jul 2021",
                location: "Surat",
                points: [
                  "First production exposure to modern frontend development, HTML/CSS, JavaScript, and Git workflows.",
                  "Contributed to Agile scrum sprints — improved team collaboration score by 20%.",
                ],
              },
            ].map((job, idx) => (
              <article key={idx} className="relative">
                <div className="hidden lg:block absolute -left-[52.5px] top-2 w-2 h-2 bg-black" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-5 border-b technical-hairline pb-4 gap-1">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold tracking-tight uppercase">{job.company}</h3>
                    <p className="text-on-surface-variant text-sm font-medium">{job.role} · {job.location}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold shrink-0">{job.period}</span>
                </div>
                <ul className="space-y-3">
                  {job.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-black font-bold text-[10px] mt-1 shrink-0">0{i + 1}</span>
                      <p className="text-sm leading-relaxed">{p}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="pt-4 opacity-40">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold">
                References & Certificates Available Upon Request
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}