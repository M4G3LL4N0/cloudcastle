import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("venues")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ venues: data })
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const body = await req.json()

  const { name, city, state } = body

  const { data, error } = await supabase
    .from("venues")
    .insert([
      {
        name,
        city,
        state,
      },
    ])
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ venue: data[0] })
}
