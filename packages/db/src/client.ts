import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

function createConnection(connectionString: string) {
	return postgres(connectionString)
}

export function createDb(
	connectionString: string,
	options: { logger?: boolean } = { logger: false },
) {
	const connection = createConnection(connectionString)
	return drizzle(connection, { schema: schema, logger: options.logger })
}

// Allows connection to be exported for running local scripts (to close the connection manually)
export function createDbWithConnection(connectionString: string) {
	const connection = createConnection(connectionString)
	const db = drizzle(connection, { schema: schema, logger: true })
	return { db, connection }
}

export type Db = ReturnType<typeof createDb>
export type DbWithConnection = ReturnType<typeof createDbWithConnection>
export type Transaction = Parameters<Parameters<Db['transaction']>[0]>[0]
export type DbOrTx = Db | Transaction
