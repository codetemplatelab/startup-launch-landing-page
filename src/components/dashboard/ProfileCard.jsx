import { Mail, Shield } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="glass-card flex flex-col gap-4 bg-[#0f172a]/80 p-6">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full border border-white/20 bg-gradient-to-br from-aurora/40 to-neon/40" />
        <div>
          <p className="text-sm font-semibold text-white">Jordan Vega</p>
          <p className="text-xs text-white/60">Founder, Aurora Labs</p>
        </div>
      </div>
      <div className="space-y-2 text-xs text-white/60">
        <div className="flex items-center gap-2">
          <Mail size={14} />
          jordan@auroralabs.io
        </div>
        <div className="flex items-center gap-2">
          <Shield size={14} />
          Pro plan · 4 teammates
        </div>
      </div>
      <button className="btn-secondary w-full">Manage profile</button>
    </div>
  );
}
