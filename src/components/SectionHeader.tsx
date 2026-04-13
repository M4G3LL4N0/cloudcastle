export default function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text?: string
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  )
}
