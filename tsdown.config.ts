import { defineConfig } from 'tsdown'
import generateExports from './tools/generate-exports.mjs'

export default defineConfig({
	entry: ['src/**/*.ts'],
	format: ['esm'],
	clean: true,
	dts: {
		sourcemap: false,
	},
	unbundle: true,
	sourcemap: false,
	fixedExtension: false,

	onSuccess() {
		generateExports()
	},
})
