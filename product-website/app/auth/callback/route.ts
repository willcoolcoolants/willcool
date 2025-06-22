import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = requestUrl.searchParams.get("next") ?? "/"

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (!error) {
        // Redirect to dashboard after successful verification
        return NextResponse.redirect(new URL("/dashboard", request.url))
      } else {
        console.error("Email verification error:", error)
        // Redirect to login with error
        return NextResponse.redirect(new URL("/auth/login?error=verification_failed", request.url))
      }
    } catch (error) {
      console.error("Callback error:", error)
      return NextResponse.redirect(new URL("/auth/login?error=verification_failed", request.url))
    }
  }

  // Redirect to login if no code
  return NextResponse.redirect(new URL("/auth/login", request.url))
}
