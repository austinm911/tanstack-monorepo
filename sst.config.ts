/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: 'tanstack-monorepo',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'cloudflare',
			providers: {
				cloudflare: {},
				aws: {},
			},
		}
	},
	async run() {
		const hono = new sst.cloudflare.Worker('tanstack-monorepo-api', {
			url: true,
			handler: 'apps/api/src/index.ts',
		})

		// ! Tried to deploy to Cloudflare but doesn't appear to work
		const spa = new sst.aws.StaticSite('tanstack-monorepo-spa-', {
			path: 'apps/spa',
			build: {
				command: 'bun run build',
				output: 'dist',
			},
			environment: {
				VITE_API_URL: hono.url.apply((url) => url?.toString() ?? ''),
			},
		})

		return {
			api: hono.url,
			spa: spa.url,
		}
	},
})
