import SectionHeader from "@/components/SectionHeader"

const operatorBuckets = [
  {
    title: "Independent venues",
    text: "Fast pilot partners that help refine the playbook quickly.",
  },
  {
    title: "Venue groups",
    text: "Multi-location operators that accelerate cluster economics.",
  },
  {
    title: "Hospitality portfolios",
    text: "Structured rollout partners with stronger long-term density value.",
  },
]

export default function OperatorsPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Operator strategy"
          title="Sell to operators, not just locations."
          text="The fastest route to density is winning relationships that can expand across multiple placements."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {operatorBuckets.map((bucket) => (
            <div
              key={bucket.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{bucket.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{bucket.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
