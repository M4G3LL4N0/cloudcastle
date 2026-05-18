import type { MetricCard as MetricCardType } from "@/lib/types"

export default function MetricCard({ label, value, helper }: MetricCardType) {
  return (
    <div className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-0.5">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0)),radial-gradient(circle_at_top_right,rgba(255,146,105,0.10),transparent_22%)]" />
      <div className="relative">
        <div className="text-sm uppercase tracking-[0.18em] text-white/46">{label}</div>
        <div className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</div>
        <div className="mt-2 text-sm leading-6 text-white/50">{helper}</div>
      </div>
    </div>
  )
}
