export default function StatCard({ label, value, trend }) {
  return (
    <div className="glass-card flex flex-col gap-3 bg-[#0f172a]/80 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{label}</p>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-white">{value}</span>
        <span className="text-xs text-emerald-400">{trend}</span>
      </div>
    </div>
  );
}
