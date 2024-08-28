import type { Context, Next } from 'hono'
import { customLogger } from '../utils/logger'

export async function responseLoggerMiddleware(c: Context, next: Next) {
	await next()

	const { method, url } = c.req
	const status = c.res.status
	const contentLength = c.res.headers.get('Content-Length')

	let responseBody = ''
	if (c.res.headers.get('Content-Type')?.includes('application/json')) {
		const clonedResponse = c.res.clone()
		responseBody = await clonedResponse.text()
	}

	customLogger(
		`${method} ${url} - Status: ${status}, Content-Length: ${contentLength}`,
		responseBody ? `Response: ${responseBody}` : '',
	)
}
