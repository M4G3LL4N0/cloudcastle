import SectionHeader from "@/components/SectionHeader"

const systemLayers = [
  {
    title: "Placement layer",
    text: "Venue acquisition, launch sequencing, and market clustering.",
  },
  {
    title: "Operations layer",
    text: "Machine health, stock thresholds, and field response logic.",
  },
  {
    title: "Data layer",
    text: "Events, performance, replenishment patterns, and decision support.",
  },
  {
    title: "Expansion layer",
    text: "Regional rollout planning and portfolio-level operator visibility.",
  },
]

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Network architecture"
          title="CloudCastle is built like an operating system, not a brochure."
          text="This page is where you explain the stack to investors, operators, and internal collaborators."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {systemLayers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-500/30" />
              <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{layer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
