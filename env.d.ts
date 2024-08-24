declare module 'bun' {
	interface Env {
		CLOUDFLARE_ACCOUNT_ID: string
		DATABASE_URL: string
	}
}
