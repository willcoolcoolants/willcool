import { afterEach, test } from "node:test"
import assert from "node:assert/strict"
import { sendInquiry } from "./send-inquiry"

const originalFetch = globalThis.fetch
const endpoint = "https://formspree.io/f/testform"
afterEach(() => { globalThis.fetch = originalFetch })

test("posts form fields as FormData and requests a JSON response", async () => {
  const data = new FormData()
  data.set("email", "test@example.com")
  data.set("message", "Test inquiry")
  globalThis.fetch = async (url, options) => {
    assert.equal(url, endpoint)
    assert.equal(options?.method, "POST")
    assert.deepEqual(options?.headers, { Accept: "application/json" })
    assert.equal(options?.body, data)
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  }
  await sendInquiry(endpoint, data)
})

test("rejects a missing or unexpected endpoint without sending data", async () => {
  globalThis.fetch = async () => { assert.fail("No request should be made") }
  for (const url of ["", "https://example.com/f/testform", "https://formspree.io/f/"]) {
    await assert.rejects(sendInquiry(url, new FormData()), /Online inquiries are unavailable/)
  }
})

test("surfaces Formspree validation errors", async () => {
  globalThis.fetch = async () => new Response(JSON.stringify({ errors: [{ message: "Email is invalid" }] }), { status: 422 })
  await assert.rejects(sendInquiry(endpoint, new FormData()), /Email is invalid/)
})

test("does not report success for a non-JSON failure or quota error", async () => {
  for (const response of [new Response("Unavailable", { status: 503 }), new Response("{}", { status: 429 })]) {
    globalThis.fetch = async () => response
    await assert.rejects(sendInquiry(endpoint, new FormData()), /could not be sent/)
  }
})

test("propagates network failures so the form keeps the inquiry for retry", async () => {
  globalThis.fetch = async () => { throw new TypeError("Failed to fetch") }
  await assert.rejects(sendInquiry(endpoint, new FormData()), /Failed to fetch/)
})
