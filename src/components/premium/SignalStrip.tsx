const items = [
  "premium venture surface",
  "operator-grade visibility",
  "network command layer",
  "launch-ready storytelling",
  "portfolio intelligence",
  "cluster expansion logic",
]

export default function SignalStrip() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] px-4 py-4 shadow-[0_18px_80px_rgba(2,12,27,0.22)] backdrop-blur-xl">
      <div className="flex flex-wrap items-center gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/56"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
