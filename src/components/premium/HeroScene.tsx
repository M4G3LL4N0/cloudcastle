export default function HeroScene() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#0b1324_0%,#102244_36%,#2a2340_100%)] shadow-[0_25px_120px_rgba(2,12,27,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(117,163,255,0.38),transparent_18%),radial-gradient(circle_at_78%_22%,rgba(255,148,109,0.22),transparent_18%),radial-gradient(circle_at_44%_70%,rgba(62,216,222,0.18),transparent_18%)]" />
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]" />

      <div className="absolute left-[7%] top-[18%] h-36 w-28 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,71,124,0.95),rgba(10,17,30,0.95))] shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
        <div className="mx-auto mt-5 h-16 w-16 rounded-2xl bg-[linear-gradient(135deg,#68d7ff,#5379ff)] opacity-90" />
        <div className="mx-4 mt-6 rounded-2xl border border-white/10 bg-black/25 p-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-8 rounded-lg bg-white/15" />
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-8 rounded-lg bg-white/15" />
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-8 rounded-lg bg-white/15" />
          </div>
        </div>
      </div>

      <div className="absolute right-[7%] top-[14%] w-[46%] rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,34,57,0.96),rgba(10,18,31,0.96))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white/85">Network command</div>
            <div className="text-xs text-white/45">CloudCastle system layer</div>
          </div>
          <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-200">
            live
          </div>
        </div>

        <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
          <div className="mb-3 flex items-center justify-between text-xs text-white/50">
            <span>Revenue curve</span>
            <span>30-day momentum</span>
          </div>
          <div className="flex h-36 items-end gap-2">
            {[22, 28, 34, 39, 48, 54, 58, 63, 72, 81, 88, 94].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-2xl bg-[linear-gradient(180deg,#7ad8ff_0%,#5d83ff_48%,#ff946d_100%)] shadow-[0_0_18px_rgba(91,131,255,0.22)]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 900 520"
        className="absolute inset-0 h-full w-full opacity-80"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ccLineA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5c8cff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9fd3ff" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="ccLineB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#72e7da" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff966b" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <path d="M95 380 C 210 300, 320 285, 440 330" fill="none" stroke="url(#ccLineA)" strokeWidth="3" />
        <path d="M438 330 C 532 276, 610 264, 720 305" fill="none" stroke="url(#ccLineB)" strokeWidth="3" />
        <path d="M440 330 C 474 264, 494 214, 522 168" fill="none" stroke="url(#ccLineA)" strokeWidth="3" />
        <path d="M720 305 C 738 238, 748 198, 764 150" fill="none" stroke="url(#ccLineB)" strokeWidth="3" />

        <g>
          <circle cx="95" cy="380" r="48" fill="#0b1730" stroke="rgba(255,255,255,0.1)" />
          <circle cx="95" cy="380" r="27" fill="url(#ccLineA)" />
        </g>
        <g>
          <circle cx="440" cy="330" r="58" fill="#0b1730" stroke="rgba(255,255,255,0.1)" />
          <circle cx="440" cy="330" r="34" fill="#49d5d8" />
        </g>
        <g>
          <circle cx="522" cy="168" r="50" fill="#0b1730" stroke="rgba(255,255,255,0.1)" />
          <circle cx="522" cy="168" r="28" fill="#a4beff" />
        </g>
        <g>
          <circle cx="720" cy="305" r="52" fill="#0b1730" stroke="rgba(255,255,255,0.1)" />
          <circle cx="720" cy="305" r="30" fill="#b59f88" />
        </g>
        <g>
          <circle cx="764" cy="150" r="44" fill="#0b1730" stroke="rgba(255,255,255,0.1)" />
          <circle cx="764" cy="150" r="24" fill="#8d90f0" />
        </g>
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(8,12,20,0),rgba(4,6,11,0.86))]" />
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
    </div>
  )
}
