import type { Context } from 'hono'

export function handleApiError(c: Context, error: unknown) {
	console.error('API Error:', error)

	const errorMessage =
		error instanceof Error ? error.message : 'Unknown error occurred'
	const statusCode = error instanceof ApiError ? error.statusCode : 500

	const responseInit: ResponseInit = { status: statusCode }

	return c.json(
		{ message: 'An error occurred', error: errorMessage },
		responseInit,
	)
}

export class ApiError extends Error {
	constructor(
		public override message: string,
		public statusCode: number,
	) {
		super(message)
	}
}
