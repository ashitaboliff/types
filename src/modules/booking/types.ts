import type { z } from '@hono/zod-openapi'
import type {
	AdminDeniedBookingQuerySchema,
	BookingResponseSchema,
	DeniedBookingSchema,
	GetBookingQuerySchema,
	PublicBookingSchema,
} from '@/modules/booking/schema'

export type PublicBooking = z.infer<typeof PublicBookingSchema>

export type BookingResponse = z.infer<typeof BookingResponseSchema>

export type BookingRange = z.infer<typeof GetBookingQuerySchema>

export type DeniedBooking = z.infer<typeof DeniedBookingSchema>

export type AdminDeniedBookingQuery = z.infer<
	typeof AdminDeniedBookingQuerySchema
>

export type DeniedBookingSort = AdminDeniedBookingQuery['sort']
