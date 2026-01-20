import { SortOrderSchema } from "../../shared/schema/index.js";
import { z } from "zod";

//#region src/modules/booking/schema/booking.ts
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const BookingIdParamSchema = z.object({ bookingId: z.string().min(1) });
const BookingRangeQuerySchema = z.object({
	start: z.string().regex(dateRegex),
	end: z.string().regex(dateRegex)
});
const BookingSchema = z.object({
	id: z.string(),
	userId: z.string(),
	bookingDate: z.string(),
	bookingTime: z.number().int(),
	registName: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean(),
	password: z.string()
});
const BookingPublicSchema = BookingSchema.omit({ password: true });
const BookingCalendarResponseSchema = z.record(z.string(), z.record(z.string().regex(/^\d+$/), BookingPublicSchema.nullable()));
const BookingCreateRequestSchema = z.object({
	userId: z.string().min(1),
	bookingDate: z.string().regex(dateRegex),
	bookingTime: z.number().int().min(0),
	registName: z.string().min(1).max(255),
	name: z.string().min(1).max(255),
	password: z.string().min(1),
	today: z.string().regex(dateRegex)
});
const BookingCreateResponseSchema = z.object({ id: z.string().uuid() });
const BookingUpdateRequestSchema = z.object({
	bookingDate: z.string().regex(dateRegex),
	bookingTime: z.number().int().min(0),
	registName: z.string().min(1).max(255),
	name: z.string().min(1).max(255),
	today: z.string().regex(dateRegex),
	authToken: z.string().min(1).optional()
});
const BookingDeleteRequestSchema = z.object({ authToken: z.string().min(1).optional() }).default({});
const BookingUserListQuerySchema = z.object({
	sort: SortOrderSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(50).default(10)
});
const BookingPasswordVerifyRequestSchema = z.object({ password: z.string().min(1) });
const BookingAccessTokenResponseSchema = z.object({
	token: z.string().min(1),
	expiresAt: z.string()
});
const BookingLogsResponseSchema = z.array(BookingPublicSchema);
const BookingUserListResponseSchema = z.object({
	bookings: z.array(BookingPublicSchema),
	totalCount: z.number().int().nonnegative()
});
const BookingIdsResponseSchema = z.array(z.string().uuid());
const BookingErrorResponseSchema = z.object({ error: z.string() });

//#endregion
export { BookingAccessTokenResponseSchema, BookingCalendarResponseSchema, BookingCreateRequestSchema, BookingCreateResponseSchema, BookingDeleteRequestSchema, BookingErrorResponseSchema, BookingIdParamSchema, BookingIdsResponseSchema, BookingLogsResponseSchema, BookingPasswordVerifyRequestSchema, BookingPublicSchema, BookingRangeQuerySchema, BookingSchema, BookingUpdateRequestSchema, BookingUserListQuerySchema, BookingUserListResponseSchema };