import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/network", label: "Network" },
  { href: "/operators", label: "Operators" },
  { href: "/launch", label: "Launch" },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040816]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.35)]">
            CC
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.28em] text-white/90">
              CLOUDCASTLE
            </div>
            <div className="text-xs text-white/40">
              Automated retail infrastructure
            </div>
          </div>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/65 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/launch"
          className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
        >
          Start a Pilot
        </Link>
      </div>
    </header>
  )
}
