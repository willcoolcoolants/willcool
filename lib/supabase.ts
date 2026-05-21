import { createClient } from "@supabase/supabase-js"

let supabaseClient: ReturnType<typeof createClient> | null = null

/**
 * Lazily create and return a Supabase client for browser / public usage.
 * Returns `null` when required public env vars are missing (e.g. during
 * `next export` or if envs are not provided). Consumers should handle `null`.
 */
export const getSupabaseClient = (): ReturnType<typeof createClient> | null => {
  if (supabaseClient) return supabaseClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // Avoid throwing during build/static export — return null so callers can
    // choose how to behave in static contexts.
    return null
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
}

/**
 * Convenience function that throws if the client cannot be initialized.
 * Use this only in runtime environments where the envs are guaranteed.
 */
export const getSupabaseClientOrThrow = (): ReturnType<typeof createClient> => {
  const client = getSupabaseClient()
  if (!client) {
    throw new Error(
      "Supabase client not initialized: missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
    )
  }
  return client
}
