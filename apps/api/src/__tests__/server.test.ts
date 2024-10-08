import { describe, expect, it } from 'bun:test'
import { testClient } from 'hono/testing'
import app from '..'

describe('Server', () => {
	const client = testClient(app)

	it.skip('health check returns 200 with hello world', async () => {
		// @ts-expect-error - testClient types not working
		const res = await client.status.$get()
		expect(res.status).toBe(200)
		expect(await res.json()).toEqual({ hello: 'world' })
	})
})
