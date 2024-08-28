import type { Context, Next } from 'hono'
import { handleApiError } from '../utils/errorHandler'
import { customLogger } from '../utils/logger'

export async function errorMiddleware(c: Context, next: Next) {
	try {
		await next()
	} catch (error) {
		customLogger(
			`Error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`,
		)
		return handleApiError(c, error)
	}
}
