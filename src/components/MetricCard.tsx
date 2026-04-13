import type { MetricCard as MetricCardType } from "@/lib/types"

export default function MetricCard({ label, value, helper }: MetricCardType) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="text-sm text-white/50">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-sm leading-6 text-white/45">{helper}</div>
    </div>
  )
}
