import { z } from "@hono/zod-openapi";

//#region src/modules/booking/schema/booking.d.ts
declare const GetBookingQuerySchema: z.ZodObject<{
  start: z.ZodString;
  end: z.ZodString;
}, z.core.$strip>;
declare const BookingIdParam: z.ZodObject<{
  bookingId: z.ZodString;
}, z.core.$strip>;
declare const BookingSchema: z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
  password: z.ZodString;
}, z.core.$strip>;
declare const PublicBookingSchema: z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>;
declare const BookingResponseSchema: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>>>>;
declare const BookingCreateSchema: z.ZodObject<{
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  password: z.ZodString;
  today: z.ZodString;
}, z.core.$strip>;
declare const BookingCreateResponseSchema: z.ZodObject<{
  id: z.ZodUUID;
}, z.core.$strip>;
declare const BookingUpdateSchema: z.ZodObject<{
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  today: z.ZodString;
  authToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const BookingDeleteSchema: z.ZodDefault<z.ZodObject<{
  authToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
declare const BookingUserQuerySchema: z.ZodObject<{
  sort: z.ZodDefault<z.ZodEnum<{
    new: "new";
    old: "old";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const BookingPasswordSchema: z.ZodObject<{
  password: z.ZodString;
}, z.core.$strip>;
declare const BookingAccessTokenResponseSchema: z.ZodObject<{
  token: z.ZodString;
  expiresAt: z.ZodString;
}, z.core.$strip>;
declare const BookingLogsResponseSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>>;
declare const BookingByUserResponseSchema: z.ZodObject<{
  bookings: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    bookingDate: z.ZodString;
    bookingTime: z.ZodNumber;
    registName: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    isDeleted: z.ZodBoolean;
  }, z.core.$strip>>;
  totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const BookingIdsSchema: z.ZodArray<z.ZodUUID>;
declare const BookingErrorResponseSchema: z.ZodObject<{
  error: z.ZodString;
}, z.core.$strip>;
//#endregion
export { BookingAccessTokenResponseSchema, BookingByUserResponseSchema, BookingCreateResponseSchema, BookingCreateSchema, BookingDeleteSchema, BookingErrorResponseSchema, BookingIdParam, BookingIdsSchema, BookingLogsResponseSchema, BookingPasswordSchema, BookingResponseSchema, BookingSchema, BookingUpdateSchema, BookingUserQuerySchema, GetBookingQuerySchema, PublicBookingSchema };