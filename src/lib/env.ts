const requiredPublicEnv = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
] as const

type PublicEnvKey = (typeof requiredPublicEnv)[number]

function getEnv(key: string) {
  return process.env[key]
}

export function getPublicEnv() {
  const values = {} as Record<PublicEnvKey, string>

  for (const key of requiredPublicEnv) {
    const value = getEnv(key)

    if (!value) {
      throw new Error(`Missing required environment variable: ${key}`)
    }

    values[key] = value
  }

  return values
}

export function getServiceRoleKey() {
  const value = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!value) {
    throw new Error("Missing required environment variable: SUPABASE_SERVICE_ROLE_KEY")
  }

  return value
}
