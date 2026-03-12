export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="glass-card space-y-2 bg-[#0f172a]/80 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Settings</p>
        <h2 className="font-display text-2xl font-semibold text-white">Workspace preferences</h2>
        <p className="text-sm text-white/60">Tailor your launch reporting and notification cadence.</p>
      </div>

      <div className="glass-card space-y-6 bg-[#0f172a]/80 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/50">
            Workspace name
            <input
              type="text"
              defaultValue="Aurora Labs"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-aurora"
            />
          </label>
          <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/50">
            Primary region
            <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-aurora">
              <option>North America</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
            </select>
          </label>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Notifications</p>
          <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1222]/80 px-4 py-3 text-sm">
            Weekly launch summary
            <input type="checkbox" defaultChecked className="accent-aurora" />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1222]/80 px-4 py-3 text-sm">
            Investor-ready reporting
            <input type="checkbox" className="accent-aurora" />
          </label>
        </div>
        <button className="btn-primary w-full">Save settings</button>
      </div>
    </div>
  );
}
