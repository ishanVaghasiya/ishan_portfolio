export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] border-t technical-hairline w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="font-bold text-black mb-6 tracking-[0.2em]">ARCHITECT.V1</div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant leading-loose">
            © 2024 FRONTEND ARCHITECT — ALL RIGHTS RESERVED
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-6 text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-wrap gap-8">
            {["Email", "LinkedIn", "GitHub", "Read.cv"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-on-surface-variant hover:text-black transition-colors underline underline-offset-8 decoration-black/20 hover:decoration-black"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-[9px] text-on-surface-variant uppercase tracking-[0.4em] opacity-40 mt-4">
            Built with Architectural Precision.
          </div>
        </div>
      </div>
    </footer>
  );
}