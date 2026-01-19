import { describe, expect, it } from 'vitest'
import {
	BandCreateRequestSchema,
	BandCreateResponseSchema,
	BandErrorResponseSchema,
	BandMemberCreateRequestSchema,
} from '../src/modules/band/schema'

describe('Band schemas', () => {
	it('rejects band create without name', () => {
		const result = BandCreateRequestSchema.safeParse({})
		expect(result.success).toBe(false)
	})

	it('accepts valid band create', () => {
		expect(
			BandCreateRequestSchema.safeParse({ name: '新歓バンド' }).success,
		).toBe(true)
	})

	it('validates band member create', () => {
		expect(
			BandMemberCreateRequestSchema.safeParse({
				userId: 'user_1',
				part: 'VOCAL',
			}).success,
		).toBe(true)
	})

	it('accepts create/err responses', () => {
		expect(BandCreateResponseSchema.safeParse({ id: 'band_1' }).success).toBe(
			true,
		)
		expect(
			BandErrorResponseSchema.safeParse({ error: 'not found' }).success,
		).toBe(true)
	})
})
