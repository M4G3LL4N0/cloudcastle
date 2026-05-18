import Link from "next/link"
import GlassPanel from "@/components/premium/GlassPanel"
import GlowOrb from "@/components/premium/GlowOrb"
import HeroScene from "@/components/premium/HeroScene"

export default function PremiumHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-8 md:px-10 md:pb-16 md:pt-12">
      <GlowOrb className="left-[-8rem] top-[6rem] h-[22rem] w-[22rem] bg-blue-500/20" />
      <GlowOrb className="right-[-7rem] top-[1rem] h-[20rem] w-[20rem] bg-orange-400/20" />
      <GlowOrb className="bottom-[-8rem] left-[30%] h-[18rem] w-[18rem] bg-cyan-300/10" />

      <GlassPanel className="premium-shell relative mx-auto max-w-7xl overflow-hidden p-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(95,132,255,0.16),transparent_28%),radial-gradient(circle_at_88%_6%,rgba(255,149,112,0.12),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="grid gap-10 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Intelligent retail infrastructure
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Own the software
              <br />
              and
              <span className="bg-gradient-to-r from-[#F7D4C2] via-[#FFA06F] to-[#FF885F] bg-clip-text text-transparent">
                {" "}visual command layer
              </span>
              {" "}for
              <br />
              machine networks.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              CloudCastle transforms automated retail infrastructure into a premium
              operating system with launch-ready storytelling, portfolio visibility,
              venue intelligence, and a far more cinematic investor-grade presence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/launch"
                className="rounded-full bg-gradient-to-r from-[#FF8B60] via-[#F48D72] to-[#A66BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,138,97,0.24)] transition hover:scale-[1.02]"
              >
                Launch a Market
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Open Dashboard
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl font-semibold text-white">Premium</div>
                <div className="mt-1 text-sm text-white/50">venture-surface presentation</div>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl font-semibold text-white">Fleet-ready</div>
                <div className="mt-1 text-sm text-white/50">operator routing and visibility</div>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl font-semibold text-white">Scalable</div>
                <div className="mt-1 text-sm text-white/50">cluster expansion narrative</div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <HeroScene />
          </div>
        </div>
      </GlassPanel>
    </section>
  )
}
