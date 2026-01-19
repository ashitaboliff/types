import { describe, expect, it } from 'vitest'
import {
	ProfileUpsertRequestSchema,
	UserAccountRoleSchema,
	UserSchema,
} from '../src/modules/user/schema'

describe('User schemas', () => {
	it('validates UserAccountRoleSchema enum', () => {
		expect(UserAccountRoleSchema.parse('ADMIN')).toBe('ADMIN')
		expect(UserAccountRoleSchema.safeParse('SUPER').success).toBe(false)
	})

	it('accepts a fully populated user example', () => {
		const result = UserSchema.safeParse({
			id: 'user_1',
			name: 'mock',
			userId: 'mock_user',
			password: 'secret',
			email: 'mock@example.com',
			emailVerified: true,
			image: null,
			role: 'USER',
			createdAt: '2024-01-01T00:00:00Z',
			updatedAt: '2024-01-02T00:00:00Z',
		})

		expect(result.success).toBe(true)
	})

	it('rejects ProfilePayload when required fields are missing', () => {
		const result = ProfileUpsertRequestSchema.safeParse({ role: 'STUDENT' })
		expect(result.success).toBe(false)
	})
})
