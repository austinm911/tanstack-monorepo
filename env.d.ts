declare module 'bun' {
	interface Env {
		CLOUDFLARE_ACCOUNT_ID: string
		CLOUDFLARE_API_TOKEN: string
		DATABASE_URL: string
	}
}
