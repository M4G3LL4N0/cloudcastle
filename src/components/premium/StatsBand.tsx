const items = [
  { value: "36", label: "active venues" },
  { value: "98.7%", label: "fleet uptime" },
  { value: "$182.4K", label: "30-day revenue" },
  { value: "4", label: "core operating surfaces" },
]

export default function StatsBand() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(2,12,27,0.26)] backdrop-blur-xl"
        >
          <div className="text-3xl font-semibold tracking-tight text-white">
            {item.value}
          </div>
          <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/46">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
