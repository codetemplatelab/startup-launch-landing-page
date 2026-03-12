import { Link } from "react-router-dom";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Use Cases", to: "/use-cases" },
      { label: "Pricing", to: "/pricing" },
      { label: "Changelog", to: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/press" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", to: "/docs" },
      { label: "Help Center", to: "/help-center" },
      { label: "Community", to: "/community" },
      { label: "Guides", to: "/guides" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="section">
      <div className="section-inner">
        <div className="glass-card grid gap-10 p-10 md:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-aurora to-neon text-sm font-semibold text-slate-950">
                SL
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-white">Startup Launch</p>
                <p className="text-sm text-white/60">Premium landing systems</p>
              </div>
            </Link>
            <p className="text-sm text-white/60">
              A modern launch experience for ambitious startups. Built for speed, clarity, and conversion.
            </p>
            <div className="flex items-center gap-3 text-white/70">
              <a href="https://twitter.com" aria-label="Twitter" className="transition hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" aria-label="Github" className="transition hover:text-white">
                <Github size={18} />
              </a>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-sm font-semibold text-white">{group.title}</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-xs text-white/50 md:flex-row md:items-center">
          <span>2026 Startup Launch. All rights reserved.</span>
          <Link to="/signup" className="inline-flex items-center gap-2 text-white/70 transition hover:text-white">
            Launch your product
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
