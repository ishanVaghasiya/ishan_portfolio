'use client';

import { motion } from "motion/react";
import { ExternalLink, Calendar, MapPin, Cpu, TrendingUp, Users, Zap } from "lucide-react";
import { getCurrentYear } from "@/lib/util";

export default function ProjectsPageClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24"
    >
      {/* ─── Header — outcome-first, not just a label ─── */}
      <header className="mb-12 md:mb-20 border-b technical-hairline pb-10 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
                Technical Portfolio
              </span>
              <div className="w-[1px] h-4 bg-black/10" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-on-surface-variant">
                IV — {getCurrentYear()}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-black leading-none">
              PROJECTS
            </h1>
          </div>
          <div className="max-w-sm space-y-3">
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Production systems built across enterprise SaaS, AI tooling, geospatial
              visualization, and document processing — each with measurable business impact.
            </p>
            {/* Quick-scan outcome chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Users className="w-3 h-3" />, label: "500k+ Users Served" },
                { icon: <TrendingUp className="w-3 h-3" />, label: "30% Perf Gains" },
                { icon: <Zap className="w-3 h-3" />, label: "15 Live Products" },
              ].map((c, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest border technical-hairline px-3 py-1.5">
                  {c.icon} {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* ─── Featured — GO-Manage ─── */}
        <section className="col-span-12 md:col-span-8 bg-white border technical-hairline p-6 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/30 block mb-2">
                  Featured Project
                </span>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-black mb-2">GO-MANAGE</h2>
                <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                  Salon & Beauty — Appointment Management SaaS · Ireland
                </p>
              </div>
              <a
                href="https://www.gomanage.ie/beautysalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-background border technical-hairline hover:bg-black hover:text-white transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Business outcome FIRST, then tech detail */}
            <div className="bg-[#eeeeee] border technical-hairline p-5 mb-8">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-2">Business Outcome</h3>
              <p className="text-base font-medium text-on-surface leading-relaxed">
                A full-featured SaaS serving <strong>5,000+ bi-weekly users</strong> with real-time
                appointment scheduling — reducing no-shows and manual booking overhead for salon owners across Ireland.
                Achieved <strong>98% notification delivery</strong> for 4,500+ push subscribers.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-4">Objective</h3>
              <p className="text-lg md:text-xl text-on-surface font-light leading-relaxed max-w-2xl">
                "Google Calendar for beauty businesses" — drag-and-drop scheduling, real-time
                staff notifications, and admin analytics dashboards built to production scale.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-6">
                Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    num: "01", title: "Real-time Updates",
                    desc: "Socket.IO for live appointment state sync between staff and customers — sub-second update latency.",
                  },
                  {
                    num: "02", title: "Drag-and-Drop Scheduling",
                    desc: "Interactive rescheduling across multiple staff members and time slots within the same day.",
                  },
                  {
                    num: "03", title: "Role-Based Auth",
                    desc: "Granular authentication for admins, staff, and customers — each with personalized feature access.",
                  },
                  {
                    num: "04", title: "Admin Analytics",
                    desc: "Daily sales and visit dashboards with Chart.js. Boosted staff decision-making efficiency by 25%.",
                  },
                ].map((item) => (
                  <div key={item.num} className="space-y-2 border-l-2 border-black/10 pl-4">
                    <span className="font-bold text-sm tracking-tight">{item.num} / {item.title}</span>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center border-t technical-hairline pt-8">
            <div className="flex flex-wrap gap-2">
              {["React.js", "TypeScript", "Socket.IO", "Chart.js", "Suprsend"].map((tag) => (
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
        <aside className="col-span-12 md:col-span-4 bg-black text-white border technical-hairline p-6 md:p-10 flex flex-col justify-between gap-8">
          <div>
            <span className="text-[10px] block font-bold uppercase tracking-[0.2em] mb-8 text-white/50">
              Measurable Impact
            </span>
            <div className="space-y-6">
              {[
                { label: "Notification Delivery Rate", val: "98%" },
                { label: "Push Notification Subscribers", val: "4,500+" },
                { label: "Bi-Weekly Active Users", val: "5,000+" },
                { label: "Load Time Improvement", val: "30%" },
                { label: "Decision-Making Boost", val: "+25%" },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-sm font-extrabold">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/10 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-white/30" />
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Ireland</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-white/30" />
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">2021 — 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="w-4 h-4 text-white/30" />
              <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Enterprise SaaS</span>
            </div>
          </div>
        </aside>

        {/* ─── SwiftResume ─── */}
        <section className="col-span-12 md:col-span-6 bg-white border technical-hairline p-6 md:p-10 flex flex-col hover:border-black transition-colors duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/30 block mb-2">
                AI Product · Shipped
              </span>
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

          {/* Outcome */}
          <div className="bg-[#eeeeee] border technical-hairline p-4 mb-6">
            <p className="text-xs font-bold text-on-surface leading-relaxed">
              Proof I don't just use AI tools — I ship AI products to production.
              Users go from blank page to polished resume in under 3 minutes.
            </p>
          </div>

          <div className="mb-8 flex-grow">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-3">What Was Built</h3>
            <p className="text-sm font-normal text-on-surface leading-loose mb-6">
              Full-stack AI resume builder on Next.js 15 + Payload CMS. Collects structured user
              inputs, generates tailored resume content via OpenAI, and produces download-ready PDFs.
            </p>
            <ul className="space-y-3">
              {[
                "OpenAI integration for structured, job-specific resume content generation.",
                "SSR + ISR for SEO-optimized, sub-second dynamic page loads.",
                "Payload CMS for content management without a separate backend team.",
              ].map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[9px] font-mono opacity-30 mt-1 uppercase tracking-tighter shrink-0">0{i + 1}</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{c}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-6 border-t technical-hairline flex justify-between items-center">
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

        {/* ─── LUBI Portal ─── */}
        <section className="col-span-12 md:col-span-6 bg-white border technical-hairline p-6 md:p-10 flex flex-col hover:border-black transition-colors duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/30 block mb-2">
                Geospatial · High-Performance
              </span>
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

          {/* Outcome */}
          <div className="bg-[#eeeeee] border technical-hairline p-4 mb-6">
            <p className="text-xs font-bold text-on-surface leading-relaxed">
              Sales teams went from spreadsheet guesswork to real-time geographic insight —
              identifying high-value regions at a glance across millions of data points.
            </p>
          </div>

          <div className="mb-8 flex-grow">
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-black mb-3">What Was Built</h3>
            <p className="text-sm font-normal text-on-surface leading-loose mb-6">
              High-performance heatmap module using Google Maps JS API rendering millions of
              records with dynamic zoom-based aggregation — state → city → pincode.
            </p>
            <ul className="space-y-3">
              {[
                "GeoJSON polygon rendering with seamless state/city/pincode-level transitions.",
                "Reverse geocoding to group millions of lat/lng records by region automatically.",
                "Polygon-based filtering with clustering and lazy loading for real-time performance.",
              ].map((c, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[9px] font-mono opacity-30 mt-1 uppercase tracking-tighter shrink-0">0{i + 1}</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{c}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-6 border-t technical-hairline flex justify-between items-center">
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

        {/* ─── Construction OPS ─── */}
        <section className="col-span-12 bg-[#eeeeee] border technical-hairline p-6 md:p-12 hover:border-black transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/40 block mb-3">
                Document Processing · Canvas
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-black mb-2">CONSTRUCTION-OPS</h2>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-6">
                PDF Canvas Editing Platform
              </p>
              {/* Outcome */}
              <div className="bg-white border technical-hairline p-5 mb-5">
                <p className="text-sm font-bold text-on-surface leading-relaxed">
                  Field engineers went from printing, marking, and re-scanning PDFs —
                  to editing blueprints directly in the browser in real time.
                </p>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Integrated dynamic PDF editing using Fabric.js — enabling seamless canvas
                rendering with full text, shape, and image manipulation on live documents.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  num: "01", title: "Canvas Rendering",
                  desc: "Robust PDF-to-canvas pipeline with Fabric.js for real-time editing — no print, no rescan.",
                },
                {
                  num: "02", title: "Object Manipulation",
                  desc: "Add, move, resize, and style text, shapes, and images directly on the document.",
                },
                {
                  num: "03", title: "Precise Controls",
                  desc: "Leveraged Fabric.js's full API for snapping, grouping, layering, and export.",
                },
              ].map((item) => (
                <div key={item.num} className="bg-white border technical-hairline p-6">
                  <span className="text-[9px] font-mono opacity-30 uppercase tracking-tighter block mb-3">
                    CH_{item.num}
                  </span>
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
