import type { Machine, MetricCard, Venue } from "@/lib/types"

export const metricCards: MetricCard[] = [
  {
    label: "Network Revenue",
    value: "$182.4K",
    helper: "Trailing 30-day modeled volume",
  },
  {
    label: "Machine Uptime",
    value: "98.7%",
    helper: "Fleet-wide availability benchmark",
  },
  {
    label: "Active Venues",
    value: "36",
    helper: "Signed and operating locations",
  },
  {
    label: "Avg. Venue Yield",
    value: "$5.1K",
    helper: "Per-location monthly contribution",
  },
]

export const machines: Machine[] = [
  {
    id: "CC-101",
    venue: "Downtown Lounge Group",
    city: "Los Angeles",
    status: "active",
    stockHealth: 91,
    revenueToday: 486,
    revenueMonth: 6420,
  },
  {
    id: "CC-118",
    venue: "Velvet Room",
    city: "Las Vegas",
    status: "attention",
    stockHealth: 52,
    revenueToday: 271,
    revenueMonth: 5180,
  },
  {
    id: "CC-123",
    venue: "Skyline Hospitality",
    city: "Miami",
    status: "active",
    stockHealth: 88,
    revenueToday: 524,
    revenueMonth: 7310,
  },
  {
    id: "CC-131",
    venue: "Afterhours Collective",
    city: "Chicago",
    status: "offline",
    stockHealth: 15,
    revenueToday: 0,
    revenueMonth: 1940,
  },
]

export const venues: Venue[] = [
  {
    id: "V-01",
    name: "Downtown Lounge Group",
    city: "Los Angeles",
    state: "CA",
    status: "active",
    monthlyRevenue: 15400,
    uptime: 99.1,
  },
  {
    id: "V-02",
    name: "Velvet Room",
    city: "Las Vegas",
    state: "NV",
    status: "active",
    monthlyRevenue: 11800,
    uptime: 97.8,
  },
  {
    id: "V-03",
    name: "Skyline Hospitality",
    city: "Miami",
    state: "FL",
    status: "active",
    monthlyRevenue: 16250,
    uptime: 98.9,
  },
  {
    id: "V-04",
    name: "North Block Pipeline",
    city: "Denver",
    state: "CO",
    status: "pipeline",
    monthlyRevenue: 0,
    uptime: 0,
  },
]
