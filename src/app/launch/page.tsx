import { SubpageVisual } from "@/components/SubpageVisual";
import SectionHeader from "@/components/SectionHeader"
import ArtworkCard from "@/components/premium/ArtworkCard"
import GlassPanel from "@/components/premium/GlassPanel"

export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-10 text-white md:px-10 md:py-12">
      <SubpageVisual variant="default" />
      <div className="mx-auto max-w-7xl">
        <GlassPanel className="premium-shell overflow-hidden p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Pilot launch"
                title="Start with one market and make it look ready for serious rollout."
                text="Lead with a premium launch narrative, crisp pilot intake, and visuals that signal operational maturity—so the first conversation feels investor-grade, not experimental."
              />
            </div>
            <ArtworkCard
              src="/art/cloudcastle-launch.svg"
              alt="CloudCastle pilot launch artwork"
              className="min-h-[330px]"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-2xl font-semibold text-white">Why launch with CloudCastle</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-white/66">
                <p>Premium machine network positioning.</p>
                <p>Operator-grade visibility and reporting.</p>
                <p>Cluster-based rollout logic instead of scattered placement.</p>
                <p>Expandable data model for venues, machines, operators, and events.</p>
                <p>Presentation quality that matches a premium venture studio standard.</p>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-[#071224]/80 p-8 panel-glow">
              <div className="grid gap-4">
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
                  placeholder="Your name"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
                  placeholder="Company"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
                  placeholder="Email"
                />
                <textarea
                  className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
                  placeholder="Tell us about your locations, market, and pilot goals"
                />
                <button
                  type="button"
                  className="rounded-full bg-gradient-to-r from-[#FF8B60] via-[#F48D72] to-[#A66BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,138,97,0.24)] transition hover:scale-[1.02]"
                >
                  Request pilot conversation
                </button>
              </div>
            </form>
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}
