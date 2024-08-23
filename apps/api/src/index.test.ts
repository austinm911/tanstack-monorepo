import { describe, expect, it } from "bun:test"
import app from "."

describe("Hono API", () => {
	it("should return 200 for root path", async () => {
		const res = await app.request("/")
		expect(res.status).toBe(200)
		const json = await res.json()
		expect(json).toEqual({ hello: "world" })
	})

	it("should return 200 for health check", async () => {
		const res = await app.request("/")
		expect(res.status).toBe(200)
		const json = await res.json()
		expect(json).toEqual({ hello: "world" })
	})
})
