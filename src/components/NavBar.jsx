import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../data/landingData";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-soft sm:mt-6 sm:rounded-full">
          <Link to="/" className="flex items-center gap-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-aurora to-neon text-sm font-semibold text-slate-950">
              SL
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-semibold sm:text-base sm:whitespace-nowrap">Startup Launch</p>
              <p className="hidden text-xs text-white/60 sm:block">Landing Suite</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-white/70 xl:flex">
            {navLinks.map((link) => {
              const target = link.href.startsWith("#") ? `/${link.href}` : link.href;
              return (
                <Link
                  key={link.href}
                  to={target}
                  className="group relative transition hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-white/60 transition-all group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link to="/signin" className="btn-secondary">
              Sign In
            </Link>
            <Link to="/signup" className="btn-primary">
              Get Started
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className="flex items-center rounded-full border border-white/10 bg-white/5 p-2 text-white xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed left-0 right-0 top-[4.75rem] z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl transform rounded-3xl border border-white/10 bg-slate-950/95 px-6 py-6 text-sm text-white/80 shadow-soft transition sm:top-[5.75rem] xl:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const target = link.href.startsWith("#") ? `/${link.href}` : link.href;
            return (
              <Link
                key={link.href}
                to={target}
                className="transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Link to="/signin" className="btn-secondary" onClick={() => setOpen(false)}>
            Sign In
          </Link>
          <Link to="/signup" className="btn-primary" onClick={() => setOpen(false)}>
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
