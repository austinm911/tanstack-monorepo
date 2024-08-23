import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
	entry: ["./src/index.tsx"],
	format: ["esm"],
	dts: true,
	target: "es2022",
	external: ["react"],
	banner: {
		js: "'use client'",
	},
	...options,
}));
