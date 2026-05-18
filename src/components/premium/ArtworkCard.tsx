import Image from "next/image"

export default function ArtworkCard({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={860}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06101c] via-[#06101c]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  )
}
