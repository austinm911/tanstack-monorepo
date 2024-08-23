import { type Options, defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
	entryPoints: ["src/index.ts"],
	clean: true,
	target: "es2022",
	format: ["esm"],
	...options,
}));
