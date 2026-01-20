import { BookingAccessTokenResponseSchema, BookingCalendarResponseSchema, BookingCreateRequestSchema, BookingCreateResponseSchema, BookingDeleteRequestSchema, BookingIdsResponseSchema, BookingPasswordVerifyRequestSchema, BookingPublicSchema, BookingRangeQuerySchema, BookingUpdateRequestSchema, BookingUserListQuerySchema, BookingUserListResponseSchema } from "../schema/booking.js";
import { DeniedBookingAdminListResponseSchema, DeniedBookingAdminQuerySchema, DeniedBookingCreateRequestSchema, DeniedBookingSchema, DeniedBookingSortSchema } from "../schema/denied.js";
import "../schema/index.js";
import { z } from "zod";

//#region src/modules/booking/types/index.d.ts
type BookingPublic = z.infer<typeof BookingPublicSchema>;
type BookingCalendarResponse = z.infer<typeof BookingCalendarResponseSchema>;
type BookingRangeQuery = z.infer<typeof BookingRangeQuerySchema>;
type BookingCreateRequest = z.infer<typeof BookingCreateRequestSchema>;
type BookingUpdateRequest = z.infer<typeof BookingUpdateRequestSchema>;
type BookingDeleteRequest = z.infer<typeof BookingDeleteRequestSchema>;
type BookingUserListQuery = z.infer<typeof BookingUserListQuerySchema>;
type BookingUserListResponse = z.infer<typeof BookingUserListResponseSchema>;
type BookingAccessTokenResponse = z.infer<typeof BookingAccessTokenResponseSchema>;
type BookingIdsResponse = z.infer<typeof BookingIdsResponseSchema>;
type BookingCreateResponse = z.infer<typeof BookingCreateResponseSchema>;
type BookingPasswordVerifyRequest = z.infer<typeof BookingPasswordVerifyRequestSchema>;
type DeniedBooking = z.infer<typeof DeniedBookingSchema>;
type DeniedBookingAdminListResponse = z.infer<typeof DeniedBookingAdminListResponseSchema>;
type DeniedBookingAdminQuery = z.infer<typeof DeniedBookingAdminQuerySchema>;
type DeniedBookingSort = z.infer<typeof DeniedBookingSortSchema>;
type DeniedBookingCreateRequest = z.infer<typeof DeniedBookingCreateRequestSchema>;
//#endregion
export { BookingAccessTokenResponse, BookingCalendarResponse, BookingCreateRequest, BookingCreateResponse, BookingDeleteRequest, BookingIdsResponse, BookingPasswordVerifyRequest, BookingPublic, BookingRangeQuery, BookingUpdateRequest, BookingUserListQuery, BookingUserListResponse, DeniedBooking, DeniedBookingAdminListResponse, DeniedBookingAdminQuery, DeniedBookingCreateRequest, DeniedBookingSort };