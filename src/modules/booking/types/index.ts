import type { z } from 'zod'
import type {
	BookingAccessTokenResponseSchema,
	BookingCalendarResponseSchema,
	BookingCreateRequestSchema,
	BookingCreateResponseSchema,
	BookingDeleteRequestSchema,
	BookingIdsResponseSchema,
	BookingPasswordVerifyRequestSchema,
	BookingPublicSchema,
	BookingRangeQuerySchema,
	BookingUpdateRequestSchema,
	BookingUserListQuerySchema,
	BookingUserListResponseSchema,
	DeniedBookingAdminListResponseSchema,
	DeniedBookingAdminQuerySchema,
	DeniedBookingCreateRequestSchema,
	DeniedBookingSchema,
	DeniedBookingSortSchema,
} from '@/modules/booking/schema'

export type BookingPublic = z.infer<typeof BookingPublicSchema>

export type BookingCalendarResponse = z.infer<
	typeof BookingCalendarResponseSchema
>

export type BookingRangeQuery = z.infer<typeof BookingRangeQuerySchema>

export type BookingCreateRequest = z.infer<typeof BookingCreateRequestSchema>

export type BookingUpdateRequest = z.infer<typeof BookingUpdateRequestSchema>

export type BookingDeleteRequest = z.infer<typeof BookingDeleteRequestSchema>

export type BookingUserListQuery = z.infer<typeof BookingUserListQuerySchema>

export type BookingUserListResponse = z.infer<
	typeof BookingUserListResponseSchema
>

export type BookingAccessTokenResponse = z.infer<
	typeof BookingAccessTokenResponseSchema
>

export type BookingIdsResponse = z.infer<typeof BookingIdsResponseSchema>

export type BookingCreateResponse = z.infer<typeof BookingCreateResponseSchema>

export type BookingPasswordVerifyRequest = z.infer<
	typeof BookingPasswordVerifyRequestSchema
>

export type DeniedBooking = z.infer<typeof DeniedBookingSchema>

export type DeniedBookingAdminListResponse = z.infer<
	typeof DeniedBookingAdminListResponseSchema
>

export type DeniedBookingAdminQuery = z.infer<
	typeof DeniedBookingAdminQuerySchema
>

export type DeniedBookingSort = z.infer<typeof DeniedBookingSortSchema>

export type DeniedBookingCreateRequest = z.infer<
	typeof DeniedBookingCreateRequestSchema
>
