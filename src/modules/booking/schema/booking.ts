import { z } from '@hono/zod-openapi'
import * as example from '@/modules/booking/examples'
import { SortSchema } from '@/modules/shared/schema'

const BookingIdParamSchema = z.object({ bookingId: z.string().min(1) })

export const GetBookingQuerySchema = z
	.object({
		start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	})
	.openapi({
		title: 'GetBookingsQuery',
		example: example.buildBookingQueryExample(),
	})

export const BookingIdParam = BookingIdParamSchema.openapi({
	param: {
		name: 'bookingId',
		in: 'path',
		description: '予約ID',
		required: true,
	},
	example: '11111111-1111-4111-8111-111111111111',
})

export const BookingSchema = z.object({
	id: z.string(),
	userId: z.string(),
	bookingDate: z.string(),
	bookingTime: z.number().int(),
	registName: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean(),
	password: z.string(),
})

export const PublicBookingSchema = BookingSchema.omit({
	password: true,
}).openapi({
	title: 'PublicBooking',
	example: example.buildPublicBookingExample(),
})

export const BookingResponseSchema = z
	.record(
		z.string(),
		z.record(z.string().regex(/^\d+$/), PublicBookingSchema.nullable()),
	)
	.openapi({
		title: 'BookingResponse',
		example: example.buildBookingResponseExample(),
	})

export const BookingCreateSchema = z
	.object({
		userId: z.string().min(1),
		bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		bookingTime: z.number().int().min(0),
		registName: z.string().min(1).max(255),
		name: z.string().min(1).max(255),
		password: z.string().min(1),
		today: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	})
	.openapi({
		title: 'BookingCreate',
		example: example.buildBookingCreateExample(),
	})

export const BookingCreateResponseSchema = z
	.object({
		id: z.uuid(),
	})
	.openapi({
		title: 'BookingCreateResponse',
		example: example.buildBookingCreateResponseExample(),
	})

export const BookingUpdateSchema = z
	.object({
		bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		bookingTime: z.number().int().min(0),
		registName: z.string().min(1).max(255),
		name: z.string().min(1).max(255),
		today: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
		authToken: z.string().min(1).optional(),
	})
	.openapi({
		title: 'BookingUpdate',
		example: example.buildBookingUpdateExample(),
	})

export const BookingDeleteSchema = z
	.object({
		authToken: z.string().min(1).optional(),
	})
	.default({})
	.openapi({
		title: 'BookingDeleteRequest',
		example: { authToken: 'booking-token-example' },
	})

export const BookingUserQuerySchema = z
	.object({
		sort: SortSchema.default('new'),
		page: z.coerce.number().int().positive().default(1),
		perPage: z.coerce.number().int().min(1).max(50).default(10),
	})
	.openapi({ title: 'BookingUserQuery' })

export const BookingPasswordSchema = z
	.object({ password: z.string().min(1) })
	.openapi({
		title: 'BookingPasswordRequest',
		example: example.buildBookingPasswordExample(),
	})

export const BookingAccessTokenResponseSchema = z
	.object({
		token: z.string().min(1),
		expiresAt: z.string().openapi({ example: '2025-01-01T00:10:00.000Z' }),
	})
	.openapi({
		title: 'BookingAccessTokenResponse',
		example: example.buildBookingAccessTokenResponseExample(),
	})

export const BookingLogsResponseSchema = z.array(PublicBookingSchema).openapi({
	title: 'BookingLogsResponse',
	example: example.buildBookingLogsExample(),
})

export const BookingByUserResponseSchema = z
	.object({
		bookings: z.array(PublicBookingSchema),
		totalCount: z.number().int().nonnegative(),
	})
	.openapi({
		title: 'BookingByUserResponse',
		example: example.buildBookingByUserResponseExample(),
	})

export const BookingIdsSchema = z.array(z.uuid()).openapi({
	title: 'BookingIds',
	example: example.buildBookingIdsExample(),
})

export const BookingErrorResponseSchema = z
	.object({ error: z.string() })
	.openapi({ title: 'BookingError' })
