import { SubpageVisual } from "@/components/SubpageVisual";
import MetricCard from "@/components/MetricCard"
import SectionHeader from "@/components/SectionHeader"
import ArtworkCard from "@/components/premium/ArtworkCard"
import GlassPanel from "@/components/premium/GlassPanel"
import { machines, metricCards, venues } from "@/data/mock"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-10 text-white md:px-10 md:py-12">
      <SubpageVisual variant="dashboard" />
      <div className="mx-auto max-w-7xl">
        <GlassPanel className="premium-shell overflow-hidden p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Operator dashboard"
                title="Portfolio-level visibility, wrapped in a premium control surface."
                text="CloudCastle gives operators a calm command layer: metrics that read instantly, fleet tables that surface risk, and venue cards that show yield without noise—ready to connect live data when you are."
              />
            </div>
            <ArtworkCard
              src="/art/cloudcastle-dashboard.svg"
              alt="CloudCastle dashboard artwork"
              className="min-h-[320px]"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metricCards.map((card) => (
              <MetricCard key={card.label} {...card} />
            ))}
          </div>
        </GlassPanel>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassPanel className="premium-shell p-6">
            <h3 className="text-xl font-semibold text-white">Fleet status</h3>
            <div className="mt-5 table-wrap">
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
          </GlassPanel>

          <GlassPanel className="premium-shell p-6">
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
          </GlassPanel>
        </div>
      </div>
    </main>
  )
}
