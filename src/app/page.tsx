export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <h1 className="text-7xl font-bold mb-6 tracking-tight">
          CloudCastle
        </h1>

        <p className="text-xl text-white/70 mb-8">
          A new layer of automated retail infrastructure for controlled, high-demand environments.
        </p>

        <p className="text-white/50 max-w-2xl mx-auto mb-10">
          CloudCastle operates intelligent vending networks designed for secure, compliant,
          and scalable distribution—combining real-world placement with software-driven control.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="/dashboard" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
            Enter Operator Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
