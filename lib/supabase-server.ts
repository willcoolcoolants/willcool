import { createClient } from "@supabase/supabase-js"

let supabaseServerClient: ReturnType<typeof createClient> | null = null

export const getSupabaseServer = (): ReturnType<typeof createClient> | null => {
  if (supabaseServerClient) return supabaseServerClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    return null
  }

  supabaseServerClient = createClient(supabaseUrl, supabaseServiceKey)
  return supabaseServerClient
}

export const getSupabaseServerOrThrow = (): ReturnType<typeof createClient> => {
  const client = getSupabaseServer()
  if (!client) {
    throw new Error("Supabase server client not initialized: missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL")
  }
  return client
}
