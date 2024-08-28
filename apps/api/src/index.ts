import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { errorMiddleware } from './middleware/errorMiddleware'
import { responseLoggerMiddleware } from './middleware/responseLoggerMiddleware'
import type { Bindings } from './types'

const app = new Hono<{ Bindings: Bindings }>()

const routes = app
	.use('*', cors())
	.use(errorMiddleware)
	.use(responseLoggerMiddleware)
	.get('/', (c) => c.json({ hello: 'world' }))

export default app
export type AppType = typeof routes
