import { type Db, createDb, createDbWithConnection } from './client'
import * as schema from './schema'

export { createDb, createDbWithConnection, schema }
export type { Db, DbWithConnection, Transaction, DbOrTx } from './client'

let db: Db | undefined

// Export the db instance only if process.env is available
// This allows usage in Cloudflare Workers
try {
	if (typeof process === 'undefined') {
		throw new Error(
			'Process is undefined. If process is undefined, you are probably in a browser and instead can use the createDb function with a connection string to create a db instance.',
		)
	}
	if (!process.env.DATABASE_URL) {
		throw new Error(
			'DATABASE_URL is not set. Please check your environment variables.',
		)
	}
	db = createDb(process.env.DATABASE_URL)
} catch (error) {
	console.error(error)
}

export { db }
