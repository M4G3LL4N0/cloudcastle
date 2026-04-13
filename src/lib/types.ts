export type Venue = {
  id: string
  name: string
  city: string
  state: string
  status: "pipeline" | "active" | "paused"
  monthlyRevenue: number
  uptime: number
}

export type Machine = {
  id: string
  venue: string
  city: string
  status: "active" | "attention" | "offline"
  stockHealth: number
  revenueToday: number
  revenueMonth: number
}

export type MetricCard = {
  label: string
  value: string
  helper: string
}
