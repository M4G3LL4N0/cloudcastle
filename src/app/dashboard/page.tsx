import { machines, metricCards, venues } from "@/data/mock"
import MetricCard from "@/components/MetricCard"
import SectionHeader from "@/components/SectionHeader"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Operator dashboard"
          title="Portfolio-level visibility for venues, machines, and revenue."
          text="This shell is ready for real data wiring once your Supabase project is connected."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((card) => (
            <MetricCard key={card.label} {...card} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-semibold text-white">Fleet status</h3>
            <div className="mt-5 overflow-hidden rounded-[1.2rem] border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-white/55">
                  <tr>
                    <th className="px-4 py-3 font-medium">Machine</th>
                    <th className="px-4 py-3 font-medium">Venue</th>
                    <th className="px-4 py-3 font-medium">City</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Stock</th>
                    <th className="px-4 py-3 font-medium">Month</th>
                  </tr>
                </thead>
                <tbody>
                  {machines.map((machine) => (
                    <tr key={machine.id} className="border-t border-white/10">
                      <td className="px-4 py-4 font-medium text-white">{machine.id}</td>
                      <td className="px-4 py-4 text-white/72">{machine.venue}</td>
                      <td className="px-4 py-4 text-white/55">{machine.city}</td>
                      <td className="px-4 py-4">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
                          {machine.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-white/72">{machine.stockHealth}%</td>
                      <td className="px-4 py-4 text-white">${machine.revenueMonth.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-semibold text-white">Venue portfolio</h3>
            <div className="mt-5 space-y-4">
              {venues.map((venue) => (
                <div
                  key={venue.id}
                  className="rounded-[1.4rem] border border-white/10 bg-[#071224]/80 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-medium text-white">{venue.name}</div>
                      <div className="text-sm text-white/50">
                        {venue.city}, {venue.state}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-cyan-200">{venue.status}</div>
                      <div className="text-sm text-white/60">
                        {venue.uptime ? `${venue.uptime}% uptime` : "Pending launch"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-white">
                    {venue.monthlyRevenue ? `$${venue.monthlyRevenue.toLocaleString()}/mo` : "Pipeline"}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
