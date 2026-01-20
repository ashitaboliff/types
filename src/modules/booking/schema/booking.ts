import { z } from 'zod'
import { SortOrderSchema } from '@/modules/shared/schema'

const dateRegex = /^\d{4}-\d{2}-\d{2}$/

export const BookingIdParamSchema = z.object({ bookingId: z.string().min(1) })

export const BookingRangeQuerySchema = z.object({
	start: z.string().regex(dateRegex),
	end: z.string().regex(dateRegex),
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

export const BookingPublicSchema = BookingSchema.omit({ password: true })

export const BookingCalendarResponseSchema = z.record(
	z.string(),
	z.record(z.string().regex(/^\d+$/), BookingPublicSchema.nullable()),
)

export const BookingCreateRequestSchema = z.object({
	userId: z.string().min(1),
	bookingDate: z.string().regex(dateRegex),
	bookingTime: z.number().int().min(0),
	registName: z.string().min(1).max(255),
	name: z.string().min(1).max(255),
	password: z.string().min(1),
	today: z.string().regex(dateRegex),
})

export const BookingCreateResponseSchema = z.object({
	id: z.string().uuid(),
})

export const BookingUpdateRequestSchema = z.object({
	bookingDate: z.string().regex(dateRegex),
	bookingTime: z.number().int().min(0),
	registName: z.string().min(1).max(255),
	name: z.string().min(1).max(255),
	today: z.string().regex(dateRegex),
	authToken: z.string().min(1).optional(),
})

export const BookingDeleteRequestSchema = z
	.object({
		authToken: z.string().min(1).optional(),
	})
	.default({})

export const BookingUserListQuerySchema = z.object({
	sort: SortOrderSchema.default('new'),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(50).default(10),
})

export const BookingPasswordVerifyRequestSchema = z.object({
	password: z.string().min(1),
})

export const BookingAccessTokenResponseSchema = z.object({
	token: z.string().min(1),
	expiresAt: z.string(),
})

export const BookingLogsResponseSchema = z.array(BookingPublicSchema)

export const BookingUserListResponseSchema = z.object({
	bookings: z.array(BookingPublicSchema),
	totalCount: z.number().int().nonnegative(),
})

export const BookingIdsResponseSchema = z.array(z.string().uuid())

export const BookingErrorResponseSchema = z.object({ error: z.string() })
