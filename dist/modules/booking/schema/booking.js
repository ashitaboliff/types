import { SortSchema } from "../../shared/schema.js";
import { buildBookingAccessTokenResponseExample, buildBookingByUserResponseExample, buildBookingCreateExample, buildBookingCreateResponseExample, buildBookingLogsExample, buildBookingPasswordExample, buildBookingQueryExample, buildBookingResponseExample, buildBookingUpdateExample, buildPublicBookingExample } from "../examples/booking.js";
import { buildBookingIdsExample } from "../examples/denied.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/booking/schema/booking.ts
const BookingIdParamSchema = z.object({ bookingId: z.string().min(1) });
const GetBookingQuerySchema = z.object({
	start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
}).openapi({
	title: "GetBookingsQuery",
	example: buildBookingQueryExample()
});
const BookingIdParam = BookingIdParamSchema.openapi({
	param: {
		name: "bookingId",
		in: "path",
		description: "予約ID",
		required: true
	},
	example: "11111111-1111-4111-8111-111111111111"
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
const PublicBookingSchema = BookingSchema.omit({ password: true }).openapi({
	title: "PublicBooking",
	example: buildPublicBookingExample()
});
const BookingResponseSchema = z.record(z.string(), z.record(z.string().regex(/^\d+$/), PublicBookingSchema.nullable())).openapi({
	title: "BookingResponse",
	example: buildBookingResponseExample()
});
const BookingCreateSchema = z.object({
	userId: z.string().min(1),
	bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	bookingTime: z.number().int().min(0),
	registName: z.string().min(1).max(255),
	name: z.string().min(1).max(255),
	password: z.string().min(1),
	today: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
}).openapi({
	title: "BookingCreate",
	example: buildBookingCreateExample()
});
const BookingCreateResponseSchema = z.object({ id: z.uuid() }).openapi({
	title: "BookingCreateResponse",
	example: buildBookingCreateResponseExample()
});
const BookingUpdateSchema = z.object({
	bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	bookingTime: z.number().int().min(0),
	registName: z.string().min(1).max(255),
	name: z.string().min(1).max(255),
	today: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	authToken: z.string().min(1).optional()
}).openapi({
	title: "BookingUpdate",
	example: buildBookingUpdateExample()
});
const BookingDeleteSchema = z.object({ authToken: z.string().min(1).optional() }).default({}).openapi({
	title: "BookingDeleteRequest",
	example: { authToken: "booking-token-example" }
});
const BookingUserQuerySchema = z.object({
	sort: SortSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(50).default(10)
}).openapi({ title: "BookingUserQuery" });
const BookingPasswordSchema = z.object({ password: z.string().min(1) }).openapi({
	title: "BookingPasswordRequest",
	example: buildBookingPasswordExample()
});
const BookingAccessTokenResponseSchema = z.object({
	token: z.string().min(1),
	expiresAt: z.string().openapi({ example: "2025-01-01T00:10:00.000Z" })
}).openapi({
	title: "BookingAccessTokenResponse",
	example: buildBookingAccessTokenResponseExample()
});
const BookingLogsResponseSchema = z.array(PublicBookingSchema).openapi({
	title: "BookingLogsResponse",
	example: buildBookingLogsExample()
});
const BookingByUserResponseSchema = z.object({
	bookings: z.array(PublicBookingSchema),
	totalCount: z.number().int().nonnegative()
}).openapi({
	title: "BookingByUserResponse",
	example: buildBookingByUserResponseExample()
});
const BookingIdsSchema = z.array(z.uuid()).openapi({
	title: "BookingIds",
	example: buildBookingIdsExample()
});
const BookingErrorResponseSchema = z.object({ error: z.string() }).openapi({ title: "BookingError" });

//#endregion
export { BookingAccessTokenResponseSchema, BookingByUserResponseSchema, BookingCreateResponseSchema, BookingCreateSchema, BookingDeleteSchema, BookingErrorResponseSchema, BookingIdParam, BookingIdsSchema, BookingLogsResponseSchema, BookingPasswordSchema, BookingResponseSchema, BookingSchema, BookingUpdateSchema, BookingUserQuerySchema, GetBookingQuerySchema, PublicBookingSchema };