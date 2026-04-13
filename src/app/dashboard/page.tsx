const machines = [
  { id: "VV-001", location: "Bar A", revenue: 1240, status: "Active" },
  { id: "VV-002", location: "Club B", revenue: 980, status: "Active" },
  { id: "VV-003", location: "Lounge C", revenue: 430, status: "Low Activity" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Network Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {machines.map((m) => (
          <div key={m.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold">{m.id}</h2>
            <p className="text-white/60">{m.location}</p>
            <p className="mt-4 text-2xl font-bold">${m.revenue}</p>
            <p className="text-sm mt-2">{m.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
