import type { z } from '@hono/zod-openapi'
import type {
	AdminDeniedBookingQuerySchema,
	AdminDeniedBookingResponseSchema,
	AdminDeniedSortSchema,
	BookingResponseSchema,
	DeniedBookingSchema,
	GetBookingQuerySchema,
	PublicBookingSchema,
} from '@/modules/booking/schema'

export type PublicBooking = z.infer<typeof PublicBookingSchema>

export type BookingResponse = z.infer<typeof BookingResponseSchema>

export type BookingRange = z.infer<typeof GetBookingQuerySchema>

export type DeniedBooking = z.infer<typeof DeniedBookingSchema>

export type AdminDeniedBookingResponse = z.infer<
	typeof AdminDeniedBookingResponseSchema
>

export type AdminDeniedBookingQuery = z.infer<
	typeof AdminDeniedBookingQuerySchema
>

export type AdminDeniedSort = z.infer<typeof AdminDeniedSortSchema>
