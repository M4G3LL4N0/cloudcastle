type SurfaceTileTone = "blue" | "orange" | "cyan" | "violet" | "emerald" | "slate"

export default function SurfaceTile({
  eyebrow,
  title,
  text,
  tone = "blue",
}: {
  eyebrow: string
  title: string
  text: string
  tone?: SurfaceTileTone
}) {
  const toneStyles: Record<SurfaceTileTone, string> = {
    blue: "from-[#5C87FF]/30 via-[#16274E]/14 to-transparent",
    orange: "from-[#FF966C]/28 via-[#402522]/14 to-transparent",
    cyan: "from-[#65E4D9]/24 via-[#12343D]/14 to-transparent",
    violet: "from-[#B98BFF]/24 via-[#2A1F44]/14 to-transparent",
    emerald: "from-[#47E0B1]/24 via-[#17372F]/14 to-transparent",
    slate: "from-[#A9B4C7]/18 via-[#212A39]/10 to-transparent",
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(2,12,27,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5">
      <div className={`absolute inset-0 bg-gradient-to-br ${toneStyles[tone]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />

      <div className="relative">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/58">
          {eyebrow}
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
          <div className="mb-4 flex items-end gap-2">
            <div className="h-12 w-10 rounded-t-2xl bg-white/10" />
            <div className="h-20 w-10 rounded-t-2xl bg-white/15" />
            <div className="h-16 w-10 rounded-t-2xl bg-white/10" />
            <div className="h-24 w-10 rounded-t-2xl bg-white/15" />
            <div className="h-14 w-10 rounded-t-2xl bg-white/10" />
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="mt-4 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-white/10 bg-white/10" />
            <div className="h-9 w-9 rounded-full border border-white/10 bg-white/10" />
            <div className="h-9 w-9 rounded-full border border-white/10 bg-white/10" />
          </div>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/62">
          {text}
        </p>
      </div>
    </div>
  )
}
