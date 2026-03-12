import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Bell, Menu, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "./dashboard/Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100">
      <div className="mx-auto flex w-full flex-col gap-6 px-6 pb-12 pt-10 lg:px-10 2xl:px-16">
        <div
          className="flex flex-col gap-8 lg:grid"
          style={{
            gridTemplateColumns: collapsed
              ? "96px minmax(0, 1fr)"
              : "minmax(240px, 20vw) minmax(0, 1fr)",
          }}
        >
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} />
            </div>
          </div>
          <main className="space-y-6">
            <Outlet />
          </main>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed left-0 top-0 z-50 h-full w-72 transform transition lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="lg:hidden">
          <button
            className="m-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={16} />
          </button>
        </div>
        <Sidebar collapsed={false} />
      </div>
    </div>
  );
}
