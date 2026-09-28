import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CloudCastle — automated retail infrastructure",
  description:
    "CloudCastle is software for venue machine networks: launch, fleet posture, and operator visibility. Demo surfaces, not a live multi-city fleet.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] uppercase">
          CloudCastle
        </Link>
        <a
          href="mailto:?subject=CloudCastle%20operator%20briefing&body=I%20want%20a%20briefing%20on%20the%20automated%20retail%20infrastructure%20software."
          className="rounded-full bg-cyan-200 px-4 py-2 text-sm font-semibold text-slate-950"
        >
          Request an operator briefing
        </a>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <section className="grid gap-10 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Automated retail
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.06] sm:text-6xl">
              A command layer for venue machine networks.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              CloudCastle is software for operators placing automated retail
              machines in venues: launch narrative, fleet posture, and venue
              visibility in one surface. The dashboards are a working shell.
              They are not a live multi-city fleet and they do not report
              invented revenue.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:?subject=CloudCastle%20operator%20briefing&body=I%20want%20a%20briefing%20on%20the%20automated%20retail%20infrastructure%20software."
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-200 px-6 text-sm font-semibold text-slate-950"
              >
                Request an operator briefing
              </a>
              <Link
                href="/dashboard"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm"
              >
                View the dashboard shell
              </Link>
            </div>
          </div>

          <aside
            aria-label="Operator layers"
            className="rounded-[28px] border border-white/10 bg-[#0b1a2e] p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Operator layers — product map
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Launch", "Story and kit for a new venue placement"],
                ["Fleet", "Machine status without pretending live telemetry"],
                ["Venue", "Which rooms and operators are in the plan"],
                ["Network", "How the next cluster would be sequenced"],
              ].map(([title, body]) => (
                <li key={title} className="rounded-2xl border border-white/10 px-4 py-3">
                  <div className="font-semibold text-cyan-100">{title}</div>
                  <div className="mt-1 text-slate-400">{body}</div>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-cyan-200/5 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/70">
                Venue cluster — labeled shell
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {["Lobby", "Concourse", "Mezz", "Back"].map((room) => (
                  <div
                    key={room}
                    className="rounded-xl border border-white/10 px-2 py-3 text-center"
                  >
                    <div className="mx-auto h-6 w-6 rounded-md bg-cyan-200/30" />
                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-slate-400">
                      {room}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            [
              "Software-defined retail",
              "Treat machines as a network with a repeatable operating model, not a pile of hardware SKUs.",
            ],
            [
              "Operator surfaces",
              "Nightly views for status, replenishment, and rollout sequencing — labeled as a shell until telemetry is real.",
            ],
            [
              "Cluster logic",
              "Density and operator relationships matter more than one-off placements. The site does not invent venue counts.",
            ],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-white/10 p-6">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-500">
        CloudCastle · automated retail software · demo shell, not a live fleet
      </footer>
    </div>
  );
}
