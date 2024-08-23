import { Hono } from "hono"
import { logger } from "hono/logger"

const app = new Hono()

const routes = app
	.use("*", logger())
	.get("/", (c) => c.json({ hello: "world" }))

export default app
export type AppType = typeof routes
