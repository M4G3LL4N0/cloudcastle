import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("machines")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ machines: data })
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const body = await req.json()

  const { machine_code, venue_id } = body

  const { data, error } = await supabase
    .from("machines")
    .insert([
      {
        machine_code,
        venue_id,
      },
    ])
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ machine: data[0] })
}
