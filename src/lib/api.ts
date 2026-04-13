export async function fetchMachines() {
  const res = await fetch("/api/machines", { cache: "no-store" })
  const json = await res.json()
  return json.machines || []
}

export async function fetchVenues() {
  const res = await fetch("/api/venues", { cache: "no-store" })
  const json = await res.json()
  return json.venues || []
}
