import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import Link from "next/link"
import MetricCard from "@/components/MetricCard"
import SectionHeader from "@/components/SectionHeader"
import PremiumHero from "@/components/premium/PremiumHero"
import SignalStrip from "@/components/premium/SignalStrip"
import SystemSurfaceGrid from "@/components/premium/SystemSurfaceGrid"
import SystemShowcaseCard from "@/components/premium/SystemShowcaseCard"
import GlassPanel from "@/components/premium/GlassPanel"
import ArtworkCard from "@/components/premium/ArtworkCard"
import { machines, metricCards, venues } from "@/data/mock"

const showcase = [
  {
    eyebrow: "Software-defined layer",
    title: "One operating model for the whole network",
    text: "Unify launch narrative, fleet posture, and venue economics so stakeholders see infrastructure—not scattered hardware.",
    tone: "cyan" as const,
  },
  {
    eyebrow: "Operator surfaces",
    title: "Command visibility without noise",
    text: "Dashboards, tables, and portfolio cards are tuned for nightly operations: status, yield, uptime, and rollout sequencing at a glance.",
    tone: "blue" as const,
  },
  {
    eyebrow: "Expansion logic",
    title: "Clusters beat one-off placements",
    text: "Density, operator relationships, and repeatable launch kits compound so each market strengthens the next.",
    tone: "orange" as const,
  },
  {
    eyebrow: "Investor-grade story",
    title: "A surface worthy of diligence",
    text: "Premium system visuals and disciplined copy signal that CloudCastle is built for scale, governance, and long-term network leverage.",
    tone: "violet" as const,
  },
]

const flywheel = [
  "Place machines in high-signal venue environments",
  "Capture performance, demand, and replenishment intelligence",
  "Tighten routing, assortment, and venue selection with data",
  "Lift revenue per machine and per cluster with operational rhythm",
  "Expand to new operators, venue groups, and regional markets",
]

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(95,132,255,0.14),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(255,149,112,0.10),transparent_40%)]" />

      <PremiumHero />

      <section className="mx-auto max-w-7xl px-6 pb-6 pt-2 md:px-10">
        <SignalStrip />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((card) => (
            <MetricCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <SectionHeader
          eyebrow="Positioning"
          title="CloudCastle is the premium command layer for controlled venue machine networks."
          text="We transform automated retail into a software-defined operating system: launch-ready storytelling, portfolio visibility, venue intelligence, machine visibility, and operator-grade surfaces—without reading like a commodity vending brochure."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <SectionHeader
          eyebrow="Surface architecture"
          title="Six coordinated layers that keep the product feeling like infrastructure."
          text="Each layer is a deliberate interface between brand, operations, and capital markets—designed to stay legible as the network grows."
        />
        <div className="mt-10">
          <SystemSurfaceGrid />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <SectionHeader
          eyebrow="System showcase"
          title="What investors and operators should feel in the first sixty seconds."
          text="Clarity, control, and cinematic confidence—signals that this network is managed, measured, and ready for serious rollout."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {showcase.map((item) => (
            <SystemShowcaseCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <GlassPanel className="premium-shell overflow-hidden p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Portfolio and network"
                title="Visibility from pilot venues to multi-city clusters."
                text="Model how venues perform, how machines contribute, and how the next tranche of rollout de-risks capital and operations—before you wire live telemetry."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/network"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore network architecture
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View dashboard shell
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {venues.slice(0, 4).map((venue) => (
                  <div
                    key={venue.id}
                    className="rounded-[1.4rem] border border-white/10 bg-[#071224]/70 p-4"
                  >
                    <div className="text-sm font-semibold text-white">{venue.name}</div>
                    <div className="mt-1 text-xs text-white/45">
                      {venue.city}, {venue.state} · {venue.status}
                    </div>
                    <div className="mt-3 text-lg font-semibold text-cyan-100">
                      {venue.monthlyRevenue ? `$${venue.monthlyRevenue.toLocaleString()}/mo` : "Pipeline"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <ArtworkCard
                src="/art/cloudcastle-network.svg"
                alt="CloudCastle network visualization"
                className="min-h-[280px]"
              />
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  Fleet pulse
                </div>
                <div className="mt-4 space-y-3">
                  {machines.slice(0, 4).map((machine) => (
                    <div key={machine.id} className="flex items-center justify-between text-sm">
                      <span className="text-white/75">{machine.id}</span>
                      <span className="text-white/55">{machine.venue}</span>
                      <span className="text-cyan-200">{machine.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <GlassPanel className="premium-shell p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <SectionHeader
              eyebrow="Growth flywheel"
              title="Each launch sharpens the next."
              text="The compounding asset is operating knowledge: where demand concentrates, how venues behave, and how to replicate wins without diluting brand or uptime."
            />
            <div className="space-y-4">
              {flywheel.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.4rem] border border-white/10 bg-[#071224]/80 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-cyan-200">
                    {index + 1}
                  </div>
                  <div className="pt-1 text-sm leading-7 text-white/68">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6"><HeroProductPanel /></section>
      <ProcessFlowSection />
    <MarketingGraphicsStack />
    </main>
  )
}
