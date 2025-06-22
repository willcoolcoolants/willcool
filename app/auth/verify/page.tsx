"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { getSupabaseClient } from "@/lib/supabase"

export default function VerifyPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = getSupabaseClient()

  useEffect(() => {
    const handleEmailVerification = async () => {
      const token_hash = searchParams.get("token_hash")
      const type = searchParams.get("type")

      if (token_hash && type === "email") {
        try {
          const { error } = await supabase.auth.verifyOtp({
            token_hash,
            type: "email",
          })

          if (error) {
            setStatus("error")
            setMessage("Email verification failed. The link may be expired or invalid.")
          } else {
            setStatus("success")
            setMessage("Email verified successfully! You can now sign in to your account.")
            // Redirect to login after 3 seconds
            setTimeout(() => {
              router.push("/auth/login?verified=true")
            }, 3000)
          }
        } catch (error) {
          setStatus("error")
          setMessage("An unexpected error occurred during verification.")
        }
      } else {
        setStatus("error")
        setMessage("Invalid verification link.")
      }
    }

    handleEmailVerification()
  }, [searchParams, router, supabase])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="relative min-h-screen flex items-center justify-center py-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 opacity-50"></div>

        <div className="relative w-full max-w-md">
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-blue-600 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <Card className="shadow-xl border-0 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                {status === "loading" && (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-8 h-8 text-white animate-pulse" />
                  </div>
                )}
                {status === "success" && (
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                )}
                {status === "error" && (
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <XCircle className="w-8 h-8 text-white" />
                  </div>
                )}
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800">
                {status === "loading" && "Verifying Email..."}
                {status === "success" && "Email Verified!"}
                {status === "error" && "Verification Failed"}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {status === "loading" && (
                <div className="text-center">
                  <p className="text-slate-600">Please wait while we verify your email address...</p>
                </div>
              )}

              {status === "success" && (
                <div className="text-center space-y-4">
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-700">{message}</AlertDescription>
                  </Alert>
                  <p className="text-slate-600">You will be redirected to the login page shortly.</p>
                  <Link href="/auth/login">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Continue to Sign In</Button>
                  </Link>
                </div>
              )}

              {status === "error" && (
                <div className="text-center space-y-4">
                  <Alert className="border-red-200 bg-red-50">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">{message}</AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <Link href="/auth/signup">
                      <Button variant="outline" className="w-full">
                        Try Signing Up Again
                      </Button>
                    </Link>
                    <Link href="/auth/login">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Back to Sign In</Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
