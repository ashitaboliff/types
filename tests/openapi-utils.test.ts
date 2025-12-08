import { describe, expect, it } from 'vitest'
import {
	createAuthenticatedRoute,
	registerFeatureTag,
} from '../src/shared/openapi'

describe('openapi utilities', () => {
	it('adds default unauthorized response to authenticated routes', () => {
		const route = createAuthenticatedRoute({
			path: '/secure',
			method: 'get',
			responses: {
				200: { description: 'ok' },
			},
		})

		expect((route.responses as Record<number, unknown>)[401]).toBeDefined()
		expect(route.responses[200]?.description).toBe('ok')
	})

	it('registers feature tags uniquely', () => {
		registerFeatureTag({ name: 'Example', description: 'desc' })
		registerFeatureTag({ name: 'Example', description: 'override' })

		// last registration wins
		const route = createAuthenticatedRoute({
			path: '/with-tag',
			method: 'get',
			tags: ['Example'],
			responses: { 200: { description: 'ok' } },
		})

		expect(route.tags?.[0]).toBe('Example')
	})
})
