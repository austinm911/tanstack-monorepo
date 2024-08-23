/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "tanstack-monorepo",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "cloudflare",
		};
	},
	async run() {
		const hono = new sst.cloudflare.Worker("tanstack-monorepo-api", {
			url: true,
			handler: "apps/api/src/index.ts",
		});

		return {
			api: hono.url,
		};
	},
});
