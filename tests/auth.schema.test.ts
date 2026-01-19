import { describe, expect, it } from 'vitest'
import {
	PadlockCreateRequestSchema,
	PadlockIdParamSchema,
	PadlockVerifyRequestSchema,
	PadlockVerifyResponseSchema,
} from '../src/modules/auth/schema'

describe('Auth schemas', () => {
	it('requires padLockId path parameter', () => {
		const result = PadlockIdParamSchema.safeParse({ padLockId: '' })
		expect(result.success).toBe(false)
	})

	it('validates padlock creation payload', () => {
		const result = PadlockCreateRequestSchema.safeParse({
			name: '部室鍵',
			password: '1234',
		})
		expect(result.success).toBe(true)
	})

	it('rejects short password on padlock request', () => {
		const result = PadlockVerifyRequestSchema.safeParse({ password: '' })
		expect(result.success).toBe(false)
	})

	it('accepts response variants', () => {
		const ok = PadlockVerifyResponseSchema.safeParse({
			status: 'ok',
			token: 't',
		})
		const locked = PadlockVerifyResponseSchema.safeParse({
			status: 'locked',
			attemptsRemaining: 0,
		})
		const invalid = PadlockVerifyResponseSchema.safeParse({ status: 'invalid' })

		expect(ok.success && locked.success && invalid.success).toBe(true)
	})
})
