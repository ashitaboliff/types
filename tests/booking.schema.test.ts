import { describe, expect, it } from 'vitest'
import {
	BookingAccessTokenResponseSchema,
	BookingCalendarResponseSchema,
	BookingCreateRequestSchema,
	BookingCreateResponseSchema,
	BookingDeleteRequestSchema,
	BookingErrorResponseSchema,
	BookingIdsResponseSchema,
	BookingPublicSchema,
	BookingUserListQuerySchema,
} from '../src/modules/booking/schema'

describe('Booking schemas', () => {
	it('rejects booking create without required fields', () => {
		const result = BookingCreateRequestSchema.safeParse({})
		expect(result.success).toBe(false)
	})

	it('accepts minimal valid create payload', () => {
		const result = BookingCreateRequestSchema.safeParse({
			userId: 'user_1',
			bookingDate: '2024-01-01',
			bookingTime: 9,
			registName: '山田',
			name: '部室予約',
			password: 'pw',
			today: '2024-01-01',
		})
		expect(result.success).toBe(true)
	})

	it('public booking omits password', () => {
		const parsed = BookingPublicSchema.parse({
			id: 'b1',
			userId: 'u1',
			bookingDate: '2024-01-01',
			bookingTime: 10,
			registName: '山田',
			name: '部室',
			createdAt: '2024-01-01',
			updatedAt: '2024-01-02',
			isDeleted: false,
			password: 'secret',
		})
		expect(parsed).not.toHaveProperty('password')
	})

	it('booking delete defaults to empty object', () => {
		expect(BookingDeleteRequestSchema.parse({})).toEqual({})
	})

	it('booking list response allows map structure', () => {
		const result = BookingCalendarResponseSchema.safeParse({
			'2024-01-01': {
				'9': {
					id: 'b1',
					userId: 'u1',
					bookingDate: '2024-01-01',
					bookingTime: 9,
					registName: '山田',
					name: '部室',
					createdAt: '2024-01-01',
					updatedAt: '2024-01-02',
					isDeleted: false,
				},
			},
		})
		expect(result.success).toBe(true)
	})

	it('user query has defaults', () => {
		const parsed = BookingUserListQuerySchema.parse({})
		expect(parsed.page).toBe(1)
		expect(parsed.perPage).toBe(10)
		expect(parsed.sort).toBe('new')
	})

	it('ids and responses validate shapes', () => {
		expect(
			BookingIdsResponseSchema.safeParse([
				'11111111-1111-4111-8111-111111111111',
			]).success,
		).toBe(true)
		expect(
			BookingCreateResponseSchema.safeParse({
				id: '11111111-1111-4111-8111-111111111111',
			}).success,
		).toBe(true)
		expect(
			BookingAccessTokenResponseSchema.safeParse({
				token: 't',
				expiresAt: '2025-01-01T00:10:00.000Z',
			}).success,
		).toBe(true)
		expect(BookingErrorResponseSchema.safeParse({ error: 'bad' }).success).toBe(
			true,
		)
	})
})
