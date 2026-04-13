export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-6">
          Vape Vending Network
        </h1>
        <p className="text-xl text-white/70 mb-8">
          Automated retail infrastructure for nicotine distribution in compliant 21+ environments.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="/dashboard" className="bg-white text-black px-6 py-3 rounded-full">
            Operator Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
