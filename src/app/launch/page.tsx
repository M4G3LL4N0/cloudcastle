import SectionHeader from "@/components/SectionHeader"

export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pilot launch"
          title="Start with one market and build the playbook."
          text="This is your operator-facing launch page. Replace the form wiring later with your CRM or Supabase submissions."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-semibold text-white">Why launch with CloudCastle</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/66">
              <p>Premium machine network positioning.</p>
              <p>Operator-grade visibility and reporting.</p>
              <p>Cluster-based rollout logic instead of scattered placement.</p>
              <p>Expandable data model for venues, machines, operators, and events.</p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-[#071224]/80 p-8">
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
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Request pilot conversation
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
