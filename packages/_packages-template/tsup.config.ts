import { type Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
	entryPoints: ['src/index.ts'],
	dts: {
		// @see https://github.com/unjs/unbuild/issues/304#issuecomment-1688027556 - composite breaks dts
		compilerOptions: {
			composite: false,
		},
	},
	target: 'esnext',
	format: ['esm'],
	...options,
}))
