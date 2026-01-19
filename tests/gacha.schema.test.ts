import { describe, expect, it } from 'vitest'
import {
	GachaCreateRequestSchema,
	GachaErrorResponseSchema,
	GachaListResponseSchema,
} from '../src/modules/gacha/schema'

describe('Gacha schemas', () => {
	it('rejects create without required fields', () => {
		const result = GachaCreateRequestSchema.safeParse({})
		expect(result.success).toBe(false)
	})

	it('accepts valid create payload', () => {
		const result = GachaCreateRequestSchema.safeParse({
			userId: 'user_1',
			gachaRarity: 'COMMON',
			gachaVersion: 'v1',
			gachaSrc: 'https://example.com/gacha.png',
		})
		expect(result.success).toBe(true)
	})

	it('validates list response structure', () => {
		const result = GachaListResponseSchema.safeParse({
			gacha: [],
			totalCount: 0,
		})
		expect(result.success).toBe(true)
	})

	it('builds error response with message', () => {
		const result = GachaErrorResponseSchema.safeParse({ error: 'oops' })
		expect(result.success).toBe(true)
	})
})
