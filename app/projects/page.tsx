'use client';

import { motion } from "motion/react";
import { ExternalLink, Calendar, MapPin, Cpu } from "lucide-react";

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
              Ref: 2024-IV-08
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-black">PROJECTS</h1>
        </div>
        <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">
          Real-world engineering solutions built across enterprise SaaS, AI tooling, geospatial visualization,
          and document processing platforms.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Featured — GO-Manage */}
        <section className="md:col-span-8 bg-white border technical-hairline p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-16">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-black mb-2">GO-MANAGE</h2>
                <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                  Salon & Beauty — Appointment Management SaaS
                </p>
              </div>
              <a
                href="https://www.gomanage.ie/beautysalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-background border technical-hairline hover:bg-black hover:text-white transition-all group"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="mb-12">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Objective</h3>
              <p className="text-xl md:text-2xl text-on-surface font-light leading-relaxed max-w-2xl">
                A full-featured salon management platform with drag-and-drop appointment scheduling, real-time
                staff notifications, and analytics dashboards — similar to Google Calendar for beauty businesses.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-6">
                Key Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <span className="font-bold text-sm tracking-tight">01 / Real-time Updates</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Integrated Socket.IO for instant communication between staff and customers with
                    live appointment state sync.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="font-bold text-sm tracking-tight">02 / Drag-and-Drop Scheduling</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Implemented interactive drag-and-drop rescheduling for multiple appointments within
                    the same day.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="font-bold text-sm tracking-tight">03 / Role-Based Auth</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Developed role-based authentication and authorization for secure, personalized feature
                    access.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="font-bold text-sm tracking-tight">04 / Admin Analytics</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Designed an Admin Panel with daily sales and visit dashboards using Chart.js for
                    interactive data visualization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-between items-center border-t technical-hairline pt-8">
            <div className="flex flex-wrap gap-2">
              {["React.js", "TypeScript", "Socket.IO", "Chart.js"].map((tag) => (
                <span key={tag} className="text-[9px] uppercase tracking-widest font-bold border technical-hairline px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://www.gomanage.ie/beautysalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-all"
            >
              Visit Live
            </a>
          </div>
        </section>

        {/* Stats Sidebar */}
        <aside className="md:col-span-4 bg-[#eeeeee] border technical-hairline p-8 md:p-10 flex flex-col justify-between gap-12">
          <div>
            <span className="text-[10px] block font-bold text-black uppercase tracking-[0.2em] mb-8">
              Platform Stats
            </span>
            <div className="space-y-6">
              {[
                { label: "Notification Delivery", val: "98%" },
                { label: "Push Notification Users", val: "4,500+" },
                { label: "Bi-Weekly Active Users", val: "5,000+" },
                { label: "Load Time Improvement", val: "30% faster" },
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
          <div className="bg-white border technical-hairline p-8 space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-black/30" />
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Ireland</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-black/30" />
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">2021 — 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="w-4 h-4 text-black/30" />
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Enterprise SaaS</span>
            </div>
          </div>
        </aside>

        {/* SwiftResume */}
        <section className="md:col-span-6 bg-white border technical-hairline p-8 md:p-10 flex flex-col hover:border-black transition-colors duration-300">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-black mb-1">SWIFTRESUME</h2>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                AI-Powered Resume Builder
              </p>
            </div>
            <a
              href="https://www.swiftresume.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border technical-hairline hover:bg-black hover:text-white transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="mb-10 flex-grow">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Objective</h3>
            <p className="text-sm font-normal text-on-surface leading-loose mb-8">
              AI-powered resume builder using Next.js 15 and Payload CMS. Collects user inputs,
              generates resume content via OpenAI, and produces professional ready-to-use resumes.
            </p>
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Highlights</h3>
            <ul className="space-y-4">
              {[
                { ch: "AI content generation with OpenAI integration for structured resume output." },
                { ch: "SSR + ISR for SEO-optimized, fast-loading dynamic pages." },
                { ch: "Reusable Tailwind components ensuring accessibility and scalability." },
              ].map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[9px] font-mono opacity-30 mt-1 uppercase tracking-tighter">
                    0{i + 1}
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{c.ch}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-8 border-t technical-hairline flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {["Next.js 15", "OpenAI", "Payload CMS", "Tailwind"].map((tag) => (
                <span key={tag} className="text-[9px] uppercase tracking-widest font-bold border technical-hairline px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://www.swiftresume.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[10px] font-bold tracking-[0.2em] uppercase underline underline-offset-8 decoration-black/20 hover:decoration-black transition-all"
            >
              Visit Site
            </a>
          </div>
        </section>

        {/* LUBI Portal */}
        <section className="md:col-span-6 bg-white border technical-hairline p-8 md:p-10 flex flex-col hover:border-black transition-colors duration-300">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-black mb-1">LUBI PORTAL</h2>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                Geospatial Heatmap Visualization
              </p>
            </div>
            <a
              href="https://www.lubipumps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border technical-hairline hover:bg-black hover:text-white transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="mb-10 flex-grow">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Objective</h3>
            <p className="text-sm font-normal text-on-surface leading-loose mb-8">
              High-performance heatmap module using Google Maps JS API to render millions of records
              with dynamic zoom-based aggregation from state → city → pincode level.
            </p>
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Highlights</h3>
            <ul className="space-y-4">
              {[
                { ch: "GeoJSON polygon rendering with state/city/pincode-level transitions." },
                { ch: "Reverse geocoding to group data by state, city, and district from lat/lng." },
                { ch: "Polygon-based filtering with clustering and lazy loading for real-time performance." },
              ].map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[9px] font-mono opacity-30 mt-1 uppercase tracking-tighter">
                    0{i + 1}
                  </span>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{c.ch}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-8 border-t technical-hairline flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {["Google Maps API", "GeoJSON", "React.js", "Clustering"].map((tag) => (
                <span key={tag} className="text-[9px] uppercase tracking-widest font-bold border technical-hairline px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://www.lubipumps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[10px] font-bold tracking-[0.2em] uppercase underline underline-offset-8 decoration-black/20 hover:decoration-black transition-all"
            >
              Visit Site
            </a>
          </div>
        </section>

        {/* Construction OPS */}
        <section className="md:col-span-12 bg-[#eeeeee] border technical-hairline p-8 md:p-12 hover:border-black transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight text-black mb-2">CONSTRUCTION-OPS</h2>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-6">
                PDF Canvas Editing Platform
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Integrated a dynamic PDF editing and modification feature using Fabric.js — enabling
                seamless rendering of PDFs onto canvas with text, shapes, and image editing capabilities.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Canvas Rendering", desc: "Robust PDF-to-canvas rendering for real-time editing with Fabric.js." },
                { num: "02", title: "Object Manipulation", desc: "Add, modify, and customize text, shapes, and images directly on the PDF." },
                { num: "03", title: "Intuitive Controls", desc: "Leveraged Fabric.js's rich API for precise object manipulation and UX controls." },
              ].map((item) => (
                <div key={item.num} className="bg-white border technical-hairline p-6">
                  <span className="text-[9px] font-mono opacity-30 uppercase tracking-tighter block mb-3">CH_{item.num}</span>
                  <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 pt-8 border-t technical-hairline flex flex-wrap gap-2">
            {["Fabric.js", "PDF Rendering", "Canvas API", "React.js"].map((tag) => (
              <span key={tag} className="text-[9px] uppercase tracking-widest font-bold border technical-hairline bg-white px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}