import { Link, NavLink } from "react-router-dom";
import {
  BarChart3,
  CreditCard,
  FileText,
  Home,
  LifeBuoy,
  Settings,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    title: "Workspace",
    items: [
      { to: "/dashboard", label: "Overview", icon: Home, end: true },
      { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/dashboard/reports", label: "Reports", icon: FileText },
    ],
  },
  {
    title: "Team & Billing",
    items: [
      { to: "/dashboard/team", label: "Team", icon: Users },
      { to: "/dashboard/billing", label: "Billing", icon: CreditCard },
      { to: "/dashboard/settings", label: "Settings", icon: Settings },
    ],
  },
];

export default function Sidebar({ onNavigate, collapsed, onToggle }) {
  return (
    <aside
      className={`flex h-full w-full flex-col gap-6 rounded-3xl border border-white/10 bg-[#0f172a]/80 p-6 backdrop-blur-2xl shadow-soft ${
        collapsed ? "items-center" : ""
      }`}
    >
      <div className={`w-full ${collapsed ? "text-center" : ""}`}>
        <p
          className={`text-xs uppercase tracking-[0.3em] text-white/50 ${collapsed ? "hidden" : ""}`}
        >
          Workspace
        </p>
        <div className="flex items-center justify-between">
          <h2
            className={`font-display text-lg font-semibold text-white ${collapsed ? "hidden" : ""}`}
          >
            Launch Control
          </h2>
          {onToggle ? (
            <button
              type="button"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={onToggle}
              className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#101a31]/70 text-white/80 transition hover:text-white lg:flex"
            >
              {collapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </button>
          ) : null}
        </div>
      </div>

      <nav
        className={`flex w-full flex-col gap-6 text-sm text-white/70 ${collapsed ? "items-center" : ""}`}
      >
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <p
              className={`text-xs uppercase tracking-[0.3em] text-white/40 ${collapsed ? "hidden" : ""}`}
            >
              {section.title}
            </p>
            <div
              className={`flex flex-col gap-2 ${collapsed ? "items-center" : ""}`}
            >
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.end}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-2 transition ${
                        isActive ? "bg-white/10 text-white" : "hover:bg-white/5"
                      }`
                    }
                  >
                    <Icon size={16} />
                    <span className={`${collapsed ? "hidden" : ""}`}>
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-white/10 bg-[#0b1222]/80 p-4 text-xs text-white/60">
        <div className="flex items-center gap-3 text-white">
          <LifeBuoy size={16} />
          <span className={`font-semibold ${collapsed ? "hidden" : ""}`}>
            Support
          </span>
        </div>
        <p className={`mt-2 ${collapsed ? "hidden" : ""}`}>
          Need help? Access the launch concierge 24/7.
        </p>
      </div>
      <Link to="/" className="btn-secondary">
        Back to site
      </Link>
    </aside>
  );
}
