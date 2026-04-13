import Link from "next/link"
import MetricCard from "@/components/MetricCard"
import SectionHeader from "@/components/SectionHeader"
import { machines, metricCards, venues } from "@/data/mock"

const pillars = [
  {
    title: "Hardware + software layer",
    text: "CloudCastle combines physical deployment with machine intelligence, operator controls, and portfolio-level visibility.",
  },
  {
    title: "Venue expansion engine",
    text: "Win one cluster, refine the playbook, then scale through venue groups and regional density.",
  },
  {
    title: "Operator-grade dashboarding",
    text: "Track revenue, uptime, inventory health, launch readiness, and account performance from one control surface.",
  },
]

const flywheel = [
  "Place machines in high-demand environments",
  "Capture performance and demand intelligence",
  "Improve replenishment and venue selection",
  "Increase revenue per machine and per cluster",
  "Expand to new operators and markets",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.18),transparent_25%),linear-gradient(180deg,#06101d_0%,#050816_42%,#04050b_100%)]" />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
              Infrastructure-first retail network
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Build the operating layer for
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
                {" "}automated physical commerce
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              CloudCastle turns machine networks into a premium software-defined business:
              launch pilots, monitor venue performance, manage fleet health, and scale from
              isolated placements into a real operating system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/launch"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Launch a Market
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_25px_120px_rgba(2,12,27,0.65)] backdrop-blur-2xl">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#071224] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white/85">Network pulse</div>
                    <div className="text-xs text-white/40">Live-style operator snapshot</div>
                  </div>
                  <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                    Operational
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-white/65">Revenue curve</span>
                    <span className="text-cyan-200">30-day index</span>
                  </div>

                  <div className="flex h-44 items-end gap-2">
                    {[30, 38, 44, 49, 53, 58, 62, 67, 71, 78, 85, 93].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-2xl bg-gradient-to-t from-cyan-400 to-blue-500 shadow-[0_0_24px_rgba(56,189,248,0.25)]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                      Top venues
                    </div>
                    <div className="mt-4 space-y-3">
                      {venues.slice(0, 3).map((venue) => (
                        <div key={venue.id} className="flex items-center justify-between text-sm">
                          <span className="text-white/72">{venue.name}</span>
                          <span className="text-white">${venue.monthlyRevenue.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                      Fleet status
                    </div>
                    <div className="mt-4 space-y-3">
                      {machines.slice(0, 3).map((machine) => (
                        <div key={machine.id} className="flex items-center justify-between text-sm">
                          <span className="text-white/72">{machine.id}</span>
                          <span className="text-cyan-200">{machine.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 md:px-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((card) => (
            <MetricCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeader
          eyebrow="Core system"
          title="A tighter operating model from the first pilot onward."
          text="Start with a premium market-facing site and a clean internal system, then connect real venue, machine, and event data when your pipeline is ready."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-blue-500/30" />
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Growth flywheel"
              title="Each launch improves the next one."
              text="The most valuable thing in this business is not a single machine. It is the operating knowledge that compounds across locations."
            />
          </div>

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
      </section>
    </main>
  )
}
