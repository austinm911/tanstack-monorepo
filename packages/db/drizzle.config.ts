import { defineConfig } from 'drizzle-kit'

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is not set')
}

export default defineConfig({
	dialect: 'postgresql',
	out: 'src/migrations',
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
	schema: 'src/schema/index.ts',
	verbose: true,
	strict: true,
})
