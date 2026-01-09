import { BookingAccessTokenResponseSchema, BookingByUserResponseSchema, BookingCreateSchema, BookingDeleteSchema, BookingResponseSchema, BookingUpdateSchema, GetBookingQuerySchema, PublicBookingSchema } from "./schema/booking.js";
import { AdminDeniedBookingQuerySchema, AdminDeniedBookingResponseSchema, AdminDeniedSortSchema, DeniedBookingSchema } from "./schema/denied.js";
import "./schema/index.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/booking/types.d.ts
type PublicBooking = z.infer<typeof PublicBookingSchema>;
type BookingResponse = z.infer<typeof BookingResponseSchema>;
type BookingRange = z.infer<typeof GetBookingQuerySchema>;
type DeniedBooking = z.infer<typeof DeniedBookingSchema>;
type BookingCreate = z.infer<typeof BookingCreateSchema>;
type BookingUpdate = z.infer<typeof BookingUpdateSchema>;
type BookingDelete = z.infer<typeof BookingDeleteSchema>;
type BookingByUserResponse = z.infer<typeof BookingByUserResponseSchema>;
type BookingAccessTokenResponse = z.infer<typeof BookingAccessTokenResponseSchema>;
type AdminDeniedBookingResponse = z.infer<typeof AdminDeniedBookingResponseSchema>;
type AdminDeniedBookingQuery = z.infer<typeof AdminDeniedBookingQuerySchema>;
type AdminDeniedSort = z.infer<typeof AdminDeniedSortSchema>;
//#endregion
export { AdminDeniedBookingQuery, AdminDeniedBookingResponse, AdminDeniedSort, BookingAccessTokenResponse, BookingByUserResponse, BookingCreate, BookingDelete, BookingRange, BookingResponse, BookingUpdate, DeniedBooking, PublicBooking };