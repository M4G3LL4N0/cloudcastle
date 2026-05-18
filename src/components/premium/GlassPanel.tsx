import { ReactNode } from "react"

export default function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_25px_120px_rgba(2,12,27,0.45)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  )
}
