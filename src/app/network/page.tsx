import { SubpageVisual } from "@/components/SubpageVisual";
import SectionHeader from "@/components/SectionHeader"
import ArtworkCard from "@/components/premium/ArtworkCard"
import GlassPanel from "@/components/premium/GlassPanel"

const systemLayers = [
  {
    title: "Placement layer",
    text: "Venue acquisition, launch sequencing, market density, and rollout control.",
  },
  {
    title: "Operations layer",
    text: "Machine health, stock thresholds, routing priorities, and field response logic.",
  },
  {
    title: "Data layer",
    text: "Events, performance patterns, replenishment learning, and portfolio intelligence.",
  },
  {
    title: "Expansion layer",
    text: "Regional growth planning, operator relationships, and cluster-based scaling.",
  },
]

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-10 text-white md:px-10 md:py-12">
      <SubpageVisual variant="default" />
      <div className="mx-auto max-w-7xl">
        <GlassPanel className="premium-shell overflow-hidden p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Network architecture"
                title="A software-defined stack for venue machine networks."
                text="CloudCastle frames placement, operations, data, and expansion as explicit layers—so operators and investors see a coherent system, not a loose collection of devices."
              />
            </div>
            <ArtworkCard
              src="/art/cloudcastle-network.svg"
              alt="CloudCastle network architecture artwork"
              className="min-h-[340px]"
            />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {systemLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 panel-glow"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-[#FFD6C1]/25 via-[#FF9968]/20 to-[#587BFF]/25" />
                <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{layer.text}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}
