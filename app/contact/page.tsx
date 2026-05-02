'use client';

import { motion } from "motion/react";
import { useState } from "react";
import { Icons } from "@/icons";

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  // Wire this up to EmailJS / Resend / Formspree in production
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24"
    >
      {/* ─── Header ─── */}
      <header className="mb-12 md:mb-20 border-b technical-hairline pb-10 md:pb-16">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-on-surface-variant">
                Let's Work Together
              </span>
              <div className="h-px flex-grow bg-black/10 max-w-24" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]">
              Get In<br />Touch
            </h1>
          </div>
          {/* Availability — visible immediately, not buried */}
          <div className="space-y-3 max-w-xs">
            <div className="flex items-center gap-2 border border-black px-3 py-2 w-full sm:w-auto">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Available Now · Full-time Remote
              </span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Open to full-time roles, senior contracts, and consulting engagements.
              Based in Surat — working with clients worldwide.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/50">
              ✓ Response guaranteed within 24 hours
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

        {/* ─── Left — Direct Contact ─── */}
        <div className="lg:col-span-5 space-y-5">
          <div className="border-b technical-hairline pb-4 mb-6">
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
                <Icons.Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mb-1">Email</p>
                <p className="text-sm font-bold">ishanvaghasiya2786@gmail.com</p>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
              {copied === "email" ? "✓ Copied" : "Copy"}
            </span>
          </button>

          {/* Phone — clickable tel: link */}
          <a
            href="tel:+916359576261"
            className="w-full group flex items-center justify-between p-6 bg-white border technical-hairline hover:border-black transition-all duration-200"
          >
            <div className="flex items-center gap-5">
              <div className="p-3 border technical-hairline group-hover:bg-black group-hover:text-white transition-all">
                <Icons.Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mb-1">Phone / WhatsApp</p>
                <p className="text-sm font-bold">+91 6359 576 261</p>
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Call →
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-5 p-6 bg-[#eeeeee] border technical-hairline">
            <div className="p-3 border technical-hairline bg-white shrink-0">
              <Icons.MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mb-1">Location</p>
              <p className="text-sm font-bold">Surat, Gujarat, India</p>
              <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest">
                IST (UTC +5:30) · Remote Worldwide
              </p>
            </div>
          </div>

          {/* Social — with REAL profile links */}
          <div className="border-b technical-hairline pb-4 mt-10 mb-5">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
              Find Me Online
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: "LinkedIn",
                sub: "linkedin.com/in/ishanvaghasiya",
                icon: <Icons.Linkedin className="w-4 h-4" />,
                // ⚠️ Replace with your real LinkedIn URL
                href: "https://linkedin.com/in/ishanvaghasiya",
              },
              {
                label: "GitHub",
                sub: "github.com/ishanvaghasiya",
                icon: <Icons.Github className="w-4 h-4" />,
                // ⚠️ Replace with your real GitHub URL
                href: "https://github.com/ishanvaghasiya",
              },
              {
                label: "Portfolio Projects",
                sub: "View live projects",
                icon: <Icons.ExternalLink className="w-4 h-4" />,
                href: "/projects",
              },
              {
                label: "Download CV",
                sub: "PDF · Full professional record",
                icon: <Icons.FileText className="w-4 h-4" />,
                // ⚠️ Add a link to your hosted PDF CV here
                href: "/ishan-vaghasiya-cv.pdf",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white border technical-hairline hover:border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <div className="shrink-0">{social.icon}</div>
                <div className="flex-grow">
                  <p className="text-[11px] uppercase tracking-widest font-bold">{social.label}</p>
                  <p className="text-[10px] text-on-surface-variant group-hover:text-white/60 transition-colors mt-0.5">
                    {social.sub}
                  </p>
                </div>
                <Icons.ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* ─── Right — Contact Form (wired up) ─── */}
        <div className="lg:col-span-7">
          <div className="border-b technical-hairline pb-4 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
              Send a Message
            </span>
          </div>

          {formState === "sent" ? (
            <div className="border technical-hairline bg-white p-12 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Message Sent</h3>
              <p className="text-sm text-on-surface-variant">
                Thanks for reaching out. I'll reply within 24 hours.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-8 text-[10px] font-bold uppercase tracking-widest underline underline-offset-4"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all placeholder:text-black/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all placeholder:text-black/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                  Company / Organisation
                </label>
                <input
                  name="company"
                  type="text"
                  placeholder="Where are you from?"
                  className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all placeholder:text-black/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block">
                  Engagement Type *
                </label>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {["Full-time", "Freelance", "Consulting", "Other"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 p-3 bg-white border technical-hairline cursor-pointer hover:border-black transition-all text-[10px] uppercase tracking-widest font-bold"
                    >
                      <input type="radio" name="engagement" value={type} className="accent-black" required />
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
                  name="message"
                  rows={7}
                  required
                  placeholder="Tell me about your project, stack, timeline, or anything else..."
                  className="w-full bg-white border technical-hairline px-5 py-4 text-sm font-medium outline-none focus:border-black transition-all resize-none placeholder:text-black/20"
                />
              </div>

              {formState === "error" && (
                <p className="text-sm text-red-600 font-medium">
                  Something went wrong. Please email me directly at ishanvaghasiya2786@gmail.com
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="flex-grow bg-black text-white px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {formState === "sending" ? "Sending..." : "Send Message"}
                </button>
                <a
                  href="mailto:ishanvaghasiya2786@gmail.com"
                  className="flex items-center justify-center gap-2 border border-black px-8 py-5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all"
                >
                  <Icons.Mail className="w-4 h-4" />
                  Email Directly
                </a>
              </div>
            </form>
          )}

          {/* Availability Banner */}
          <div className="mt-8 p-5 md:p-6 bg-black text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Currently Available</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed mt-1">
                Open to full-time remote roles · Modern web platforms · Available immediately.
              </p>
              <p className="text-white/40 text-[10px] mt-2 uppercase tracking-widest">
                Response within 24 hours · Worldwide
              </p>
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