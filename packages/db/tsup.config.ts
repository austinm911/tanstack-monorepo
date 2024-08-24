import { type Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
	entryPoints: ['src/index.ts'],
	dts: {
		compilerOptions: {
			composite: false,
		},
	},
	target: 'es2022',
	format: ['esm'],
	...options,
}))
