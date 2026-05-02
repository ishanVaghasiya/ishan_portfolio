'use client';

import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Index", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Archives", href: "/archives" },
    { label: "Contact", href: "/contact" },
  ];

  const NavLinks = () => (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className={`uppercase tracking-widest transition-colors ${
            pathname === link.href
              ? "text-black border-b border-black pb-0.5"
              : "text-on-surface-variant hover:text-black"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b technical-hairline">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="font-semibold text-lg tracking-[0.2em] text-black cursor-pointer"
          >
            ARCHITECT.V1
          </Link>

          <div className="hidden md:flex gap-8 items-center font-medium text-[11px] tracking-widest">
            <NavLinks />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col gap-8 text-xl font-bold uppercase tracking-widest items-center justify-center text-center"
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}