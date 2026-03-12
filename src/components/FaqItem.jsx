import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card flex flex-col gap-4 p-6">
      <button
        className="flex items-center justify-between text-left text-sm font-semibold text-white"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span>{item.question}</span>
        <ChevronDown size={18} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <p className="text-sm text-white/60">{item.answer}</p> : null}
    </div>
  );
}
