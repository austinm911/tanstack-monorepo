import { type Options, defineConfig } from "tsup"

export default defineConfig((options: Options) => ({
	entryPoints: ["src/index.ts"],
	dts: true,
	target: "esnext",
	format: ["esm"],
	...options,
}))
