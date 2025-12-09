import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['src/**/*.ts'],
	format: ['es'],
	unbundle: true,
	sourcemap: false,
})
