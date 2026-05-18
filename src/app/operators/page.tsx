import { SubpageVisual } from "@/components/SubpageVisual";
import SectionHeader from "@/components/SectionHeader"
import GlassPanel from "@/components/premium/GlassPanel"

const operatorBuckets = [
  {
    title: "Independent venues",
    text: "Fast pilot partners that help refine the playbook quickly and establish early proof.",
  },
  {
    title: "Venue groups",
    text: "Multi-location operators that let you scale by density instead of scattered placement.",
  },
  {
    title: "Hospitality portfolios",
    text: "Structured rollout partners with stronger long-term expansion value and cleaner operating leverage.",
  },
]

export default function OperatorsPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-10 text-white md:px-10 md:py-12">
      <SubpageVisual variant="default" />
      <div className="mx-auto max-w-7xl">
        <GlassPanel className="premium-shell p-8 md:p-10">
          <SectionHeader
            eyebrow="Operator strategy"
            title="Meet operators where they already run the night."
            text="Independent venues prove velocity, venue groups unlock density, and hospitality portfolios anchor long-term expansion—each with a playbook CloudCastle helps you present with clarity and confidence."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {operatorBuckets.map((bucket) => (
              <div
                key={bucket.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 panel-glow"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-300/25 to-blue-500/25" />
                <h3 className="text-xl font-semibold text-white">{bucket.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{bucket.text}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}
