import SurfaceTile from "@/components/premium/SurfaceTile"

const tiles = [
  {
    eyebrow: "Launch system",
    title: "Market-ready surface",
    text: "Present CloudCastle as a premium infrastructure product from the first touchpoint.",
    tone: "orange" as const,
  },
  {
    eyebrow: "Operator layer",
    title: "Command visibility",
    text: "Give operators and venues a cleaner control surface with stronger visual confidence.",
    tone: "blue" as const,
  },
  {
    eyebrow: "Network graph",
    title: "Expansion intelligence",
    text: "Show how machines, venues, and rollout logic connect into a real operating system.",
    tone: "cyan" as const,
  },
  {
    eyebrow: "Investor layer",
    title: "Narrative polish",
    text: "Make the system feel more fundable, strategic, and venture-grade.",
    tone: "violet" as const,
  },
  {
    eyebrow: "Performance layer",
    title: "Machine economics",
    text: "Frame revenue, uptime, and efficiency in a more measurable premium way.",
    tone: "emerald" as const,
  },
  {
    eyebrow: "Brand layer",
    title: "Cinematic finish",
    text: "Carry glass hierarchy, soft gradients, and restrained motion so every page reads as premium infrastructure.",
    tone: "slate" as const,
  },
]

export default function SystemSurfaceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {tiles.map((tile) => (
        <SurfaceTile
          key={tile.title}
          eyebrow={tile.eyebrow}
          title={tile.title}
          text={tile.text}
          tone={tile.tone}
        />
      ))}
    </div>
  )
}
