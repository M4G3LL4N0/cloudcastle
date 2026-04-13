"use client"

import { useEffect, useState } from "react"
import { fetchMachines, fetchVenues } from "@/lib/api"

export default function DashboardPage() {
  const [machines, setMachines] = useState<any[]>([])
  const [venues, setVenues] = useState<any[]>([])

  useEffect(() => {
    async function load() {
      const m = await fetchMachines()
      const v = await fetchVenues()
      setMachines(m)
      setVenues(v)
    }

    load()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">CloudCastle Live Network</h1>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="bg-white/5 p-6 rounded-2xl">
          <h2 className="text-xl mb-4">Machines</h2>
          {machines.map((m) => (
            <div key={m.id} className="mb-3">
              <p>{m.machine_code}</p>
              <p className="text-sm text-white/60">{m.status}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 p-6 rounded-2xl">
          <h2 className="text-xl mb-4">Venues</h2>
          {venues.map((v) => (
            <div key={v.id} className="mb-3">
              <p>{v.name}</p>
              <p className="text-sm text-white/60">{v.city}, {v.state}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
