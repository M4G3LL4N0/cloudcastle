export default function SystemShowcaseCard({
  eyebrow,
  title,
  text,
  tone = "blue",
}: {
  eyebrow: string
  title: string
  text: string
  tone?: "blue" | "orange" | "cyan" | "violet"
}) {
  const toneMap = {
    blue: "from-[#5F89FF]/30 via-[#1B315F]/18 to-transparent",
    orange: "from-[#FF996B]/28 via-[#4A2A25]/18 to-transparent",
    cyan: "from-[#5EE6D9]/26 via-[#173641]/18 to-transparent",
    violet: "from-[#B68BFF]/24 via-[#302047]/18 to-transparent",
  }

  return (
    <div className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_90px_rgba(2,12,27,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5">
      <div className={`absolute inset-0 bg-gradient-to-br ${toneMap[tone]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div className="relative">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/58">
          {eyebrow}
        </div>

        <div className="mt-6">
          <div className="mb-4 h-14 w-14 rounded-[1.3rem] border border-white/10 bg-white/[0.06]" />
          <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
        </div>
      </div>
    </div>
  )
}
