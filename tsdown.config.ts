import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['src/**/*.ts'],
	format: ['cjs'],
	clean: true,
	dts: {
		sourcemap: false,
	},
	unbundle: true,
	sourcemap: false,
})
