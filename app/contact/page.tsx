'use client';

import { motion } from "motion/react";
import { Mail, Phone, MapPin, GitBranch, ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24"
    >
      {/* Header */}
      <header className="mb-24">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-on-surface-variant">
            Let's Work Together
          </span>
          <div className="h-px flex-grow bg-black/10 max-w-24"></div>
        </div>
        <h1 className="text-6xl md:text-[8rem] font-extrabold tracking-tighter leading-none mb-8">
          Get In<br />Touch
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Open to freelance projects, full-time opportunities, and technical collaborations.
          Based in Surat, Gujarat — available remotely worldwide.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left — Direct Contact */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-b technical-hairline pb-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
              Direct Contact
            </span>
          </div>

          {/* Email */}
          <button
            onClick={() => copy("ishanvaghasiya2786@gmail.com", "email")}
            className="w-full group flex items-center justify-between p-6 bg-white border technical-hairline hover:border-black transition-all duration-200"
          >
            <div className="flex items-center gap-5">
              <div className="p-3 border technical-hairline group-hover:bg-black group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mb-1">Email</p>
                <p className="text-sm font-bold">ishanvaghasiya2786@gmail.com</p>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              {copied === "email" ? "Copied!" : "Copy"}
            </span>
          </button>

          {/* Phone */}
          <button
            onClick={() => copy("+916359576261", "phone")}
            className="w-full group flex items-center justify-between p-6 bg-white border technical-hairline hover:border-black transition-all duration-200"
          >
            <div className="flex items-center gap-5">
              <div className="p-3 border technical-hairline group-hover:bg-black group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mb-1">Phone</p>
                <p className="text-sm font-bold">+91 6359 576 261</p>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              {copied === "phone" ? "Copied!" : "Copy"}
            </span>
          </button>

          {/* Location */}
          <div className="flex items-center gap-5 p-6 bg-[#eeeeee] border technical-hairline">
            <div className="p-3 border technical-hairline bg-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mb-1">Location</p>
              <p className="text-sm font-bold">Surat, Gujarat 395006, India</p>
              <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest">Available Remotely · Worldwide</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-b technical-hairline pb-4 mt-12 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
              Online Presence
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "LinkedIn", icon: <ExternalLink className="w-4 h-4" />, href: "https://linkedin.com" },
              { label: "GitHub", icon: <GitBranch className="w-4 h-4" />, href: "https://github.com" },
              { label: "Stackoverflow", icon: <ArrowUpRight className="w-4 h-4" />, href: "https://stackoverflow.com" },
              { label: "Medium", icon: <ArrowUpRight className="w-4 h-4" />, href: "https://medium.com" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-5 bg-white border technical-hairline hover:border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                {social.icon}
                <span className="text-[11px] uppercase tracking-widest font-bold">{social.label}</span>
                <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="lg:col-span-7">
          <div className="border-b technical-hairline pb-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
              Send a Message
            </span>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all placeholder:text-black/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all placeholder:text-black/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                Subject *
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all placeholder:text-black/20"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                Project Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Freelance", "Full-time", "Consulting", "Other"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 p-3 bg-white border technical-hairline cursor-pointer hover:border-black transition-all group text-[11px] uppercase tracking-widest font-bold"
                  >
                    <input type="radio" name="project_type" value={type} className="accent-black" />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                Message *
              </label>
              <textarea
                rows={7}
                placeholder="Tell me about your project, timeline, or anything else..."
                className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all resize-none placeholder:text-black/20"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-grow bg-black text-white px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:opacity-90 transition-all"
              >
                Send Message
              </button>
              <a
                href="mailto:ishanvaghasiya2786@gmail.com"
                className="flex items-center justify-center gap-2 border border-black px-8 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
                Email Directly
              </a>
            </div>
          </form>

          {/* Availability Banner */}
          <div className="mt-12 p-6 bg-black text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-widest font-bold">Currently Available</span>
              </div>
              <p className="text-white/60 text-xs">Open to new projects and full-time roles — response within 24 hours.</p>
            </div>
            <a
              href="mailto:ishanvaghasiya2786@gmail.com"
              className="shrink-0 border border-white/30 px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}