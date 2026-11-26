export async function sendInquiry(endpoint: string, data: FormData): Promise<void> {
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
    throw new Error("Online inquiries are unavailable. Please email info@will-cool.com.")
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
  })

  if (!response.ok) {
    const result = await response.json().catch(() => null)
    const messages = Array.isArray(result?.errors)
      ? result.errors.map((error: { message?: unknown }) => typeof error?.message === "string" ? error.message : "").filter(Boolean).join(" ")
      : ""
    throw new Error(messages || "Your inquiry could not be sent. Please try again or email info@will-cool.com.")
  }
}
