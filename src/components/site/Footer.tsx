import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/network", label: "Network" },
  { href: "/operators", label: "Operators" },
  { href: "/launch", label: "Launch" },
]

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 md:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_24px_120px_rgba(2,12,27,0.42)] backdrop-blur-2xl">
        <div className="grid gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFD1B6] via-[#FF9A68] to-[#9C6BFF] text-sm font-bold text-[#07111F] shadow-[0_0_35px_rgba(255,149,112,0.28)]">
                CC
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.28em] text-white/90">
                  CLOUDCASTLE
                </div>
                <div className="text-xs text-white/42">
                  premium automated retail infrastructure
                </div>
              </div>
            </div>

            <h3 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A more premium command layer for modern machine networks.
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/62">
              CloudCastle combines launch-ready presentation, network visibility,
              operator logic, and system-level thinking into a surface that feels
              worthy of a premium venture portfolio.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/42">
                Navigation
              </div>
              <div className="mt-4 space-y-3">
                {links.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/68 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/42">
                Positioning
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/62">
                <div>Premium launch surface</div>
                <div>Operator command layer</div>
                <div>Portfolio visibility</div>
                <div>Network intelligence</div>
              </div>
            </div>
          </div>
        </div>

        <div className="soft-divider" />

        <div className="flex flex-col gap-3 px-6 py-5 text-sm text-white/42 md:flex-row md:items-center md:justify-between md:px-10">
          <div>CloudCastle © 2026</div>
          <div>Built as a premium venture-grade infrastructure surface.</div>
        </div>
      </div>
    </footer>
  )
}
