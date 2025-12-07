import { describe, expect, it } from 'vitest'
import {
	BandCreateResponseSchema,
	BandCreateSchema,
	BandErrorResponseSchema,
	BandMemberCreateSchema,
} from '../src/modules/band/schema'

describe('Band schemas', () => {
	it('rejects band create without name', () => {
		const result = BandCreateSchema.safeParse({})
		expect(result.success).toBe(false)
	})

	it('accepts valid band create', () => {
		expect(BandCreateSchema.safeParse({ name: '新歓バンド' }).success).toBe(
			true,
		)
	})

	it('validates band member create', () => {
		expect(
			BandMemberCreateSchema.safeParse({ userId: 'user_1', part: 'VOCAL' })
				.success,
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
