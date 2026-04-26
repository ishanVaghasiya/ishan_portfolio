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
            Document ID: IV-2024-CV
          </span>
          <div className="h-px w-12 bg-black/10"></div>
          <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">
            Frontend Developer
          </span>
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
              Frontend Developer with 5 years of experience in React.js, Next.js, and TypeScript.
              Specialized in SSR, SSG, AI-driven development, and accessible, responsive UI systems.
              Adept at collaborating in Agile environments and leading cross-functional frontend teams.
            </p>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6 border-b technical-hairline pb-2">
              Technical Stack
            </h2>
            <div className="space-y-6">
              {[
                { label: "Frameworks", value: "React.js, Next.js, Angular, React Native" },
                { label: "Languages", value: "TypeScript, JavaScript (ES6+), HTML5, CSS3" },
                { label: "State & Data", value: "Redux Toolkit, React Query, Apollo Client, GraphQL" },
                { label: "Testing", value: "Jest, React Testing Library, Jasmine, Karma" },
                { label: "DevOps & Tools", value: "Git, GitHub, GitLab, CI/CD, Storybook, Agile" },
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

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6 border-b technical-hairline pb-2">
              Education
            </h2>
            <div className="space-y-6">
              {[
                {
                  degree: "B.E. — Information Technology",
                  school: "GEC Bhavnagar",
                  period: "Jun 2018 – Jun 2022",
                  grade: "8.07 CGPA",
                },
                {
                  degree: "HSC",
                  school: "Bhulaka Sagar Vidhyabhavan",
                  period: "Jun 2016 – Jun 2018",
                  grade: "76.76%",
                },
                {
                  degree: "SSC",
                  school: "Bhulaka Sagar Vidhyabhavan",
                  period: "Jun 2015 – Jun 2016",
                  grade: "81.16%",
                },
              ].map((edu, idx) => (
                <div key={idx} className="border-l-2 border-black/10 pl-4">
                  <p className="font-bold text-sm">{edu.degree}</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">{edu.school}</p>
                  <div className="flex gap-4 mt-1">
                    <span className="text-[10px] text-on-surface-variant">{edu.period}</span>
                    <span className="text-[10px] font-bold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-6 border-b technical-hairline pb-2">
              Languages
            </h2>
            <div className="flex gap-4">
              {["English", "Hindi", "Gujarati"].map((lang) => (
                <span key={lang} className="text-[11px] font-bold border technical-hairline px-3 py-2 uppercase tracking-widest">
                  {lang}
                </span>
              ))}
            </div>
          </section>

          <div className="bg-surface-container-high p-8 border technical-hairline">
            <p className="text-[10px] leading-relaxed text-on-surface-variant uppercase tracking-widest italic opacity-70">
              "Performance is not a feature. It is the foundation."
            </p>
            <div className="mt-6 pt-6 border-t technical-hairline">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Ishan Vaghasiya</p>
              <p className="text-[10px] text-on-surface-variant mt-1">+91 6359576261</p>
              <p className="text-[10px] text-on-surface-variant">ishanvaghasiya2786@gmail.com</p>
              <p className="text-[10px] text-on-surface-variant">Surat, Gujarat 395006</p>
            </div>
          </div>
        </aside>

        {/* Main Timeline */}
        <div className="lg:col-span-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px technical-hairline"></div>
          <div className="space-y-24 pl-12">

            {/* Experience entries */}
            {[
              {
                company: "ONROIS",
                role: "Lead React Developer",
                period: "Dec 2024 — PRESENT",
                location: "Surat",
                summary:
                  "Leading frontend architecture for multiple Next.js projects, integrating SSR/SSG for SEO improvements and 30% faster load times. Mentoring junior developers and delegating tasks effectively.",
                points: [
                  "Attended client meetings to gather requirements, prepared task breakdowns, and delegated work to junior developers.",
                  "Led frontend architecture for multiple Next.js projects, integrating SSR/SSG for SEO improvements and 30% faster performance.",
                  "Built and maintained reusable UI libraries with Storybook, improving development consistency across teams.",
                  "Monitored and achieved a 25% performance gain through lazy loading and code splitting strategies.",
                ],
              },
              {
                company: "WRT INFOTECH",
                role: "Senior Frontend Developer",
                period: "Nov 2021 — Dec 2024",
                location: "Surat",
                summary:
                  "Delivered 10+ key features across React, Angular, and React Native. Reduced load times by 30%, integrated real-time Socket.IO features, and built push notification systems for 4,500+ users.",
                points: [
                  "Delivered over 10 key features using React, Angular, and React Native within three months with high-quality code.",
                  "Improved user experience with 30% faster load times by optimizing API integrations using React Query, Axios, and RxJs.",
                  "Integrated real-time updates using Socket.IO and Pusher, ensuring seamless live interactions.",
                  "Built push notification systems for 4,500+ users — increasing engagement by 25%.",
                  "Created a multichannel notification system with Suprsend, ensuring 98% message delivery for 5,000+ bi-weekly users.",
                  "Boosted user decision-making by 25% with effective data visualization through interactive Chart.js charts.",
                ],
              },
              {
                company: "TECHSTAUNCH SOFTWARE SOLUTIONS",
                role: "Junior Software Developer",
                period: "Jul 2021 — Oct 2021",
                location: "Surat",
                summary:
                  "Developed modern responsive interfaces with React and Next.js using TypeScript, improving project turnaround times by an average of 15%.",
                points: [
                  "Developed responsive interfaces with React and Next.js with TypeScript for enhanced type safety.",
                  "Improved project turnaround times by an average of 15% through streamlined development processes.",
                ],
              },
              {
                company: "GAINSERV TECH LLP",
                role: "Intern",
                period: "Mar 2021 — Jul 2021",
                location: "Surat",
                summary:
                  "Acquired proficiency in React.js, HTML, CSS, JavaScript, and Git. Contributed to agile sprints, improving team collaboration by 20%.",
                points: [
                  "Gained proficiency in React.js, HTML, CSS, JavaScript, and Git.",
                  "Participated in scrum calls and agile sprints, improving team collaboration by 20%.",
                ],
              },
            ].map((job, idx) => (
              <article key={idx} className="relative">
                <div className="absolute -left-[52.5px] top-2 w-2 h-2 bg-black"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6 border-b technical-hairline pb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight uppercase">{job.company}</h3>
                    <p className="text-on-surface-variant text-sm font-medium">{job.role} · {job.location}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold shrink-0">{job.period}</span>
                </div>
                <div className="space-y-6">
                  <p className="text-on-surface-variant leading-relaxed text-base">{job.summary}</p>
                  <ul className="space-y-4">
                    {job.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-black font-bold text-[10px] mt-1 shrink-0">0{i + 1}</span>
                        <p className="text-sm leading-relaxed">{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <div className="pt-8 opacity-40">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold">
                Full References & Certificates Available Upon Request
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}