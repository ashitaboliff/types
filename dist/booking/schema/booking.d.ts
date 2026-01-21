import { z } from "zod";

//#region src/modules/booking/schema/booking.d.ts
declare const BookingIdParamSchema: z.ZodObject<{
  bookingId: z.ZodString;
}, z.core.$strip>;
declare const BookingRangeQuerySchema: z.ZodObject<{
  start: z.ZodString;
  end: z.ZodString;
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
declare const BookingPublicSchema: z.ZodObject<{
  id: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
  name: z.ZodString;
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
}, z.core.$strip>;
declare const BookingCalendarResponseSchema: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodObject<{
  id: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
  name: z.ZodString;
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
}, z.core.$strip>>>>;
declare const BookingCreateRequestSchema: z.ZodObject<{
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  password: z.ZodString;
  today: z.ZodString;
}, z.core.$strip>;
declare const BookingCreateResponseSchema: z.ZodObject<{
  id: z.ZodString;
}, z.core.$strip>;
declare const BookingUpdateRequestSchema: z.ZodObject<{
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
  name: z.ZodString;
  today: z.ZodString;
  authToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const BookingDeleteRequestSchema: z.ZodDefault<z.ZodObject<{
  authToken: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
declare const BookingUserListQuerySchema: z.ZodObject<{
  sort: z.ZodDefault<z.ZodEnum<{
    new: "new";
    old: "old";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const BookingPasswordVerifyRequestSchema: z.ZodObject<{
  password: z.ZodString;
}, z.core.$strip>;
declare const BookingAccessTokenResponseSchema: z.ZodObject<{
  token: z.ZodString;
  expiresAt: z.ZodString;
}, z.core.$strip>;
declare const BookingLogsResponseSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
  name: z.ZodString;
  userId: z.ZodString;
  bookingDate: z.ZodString;
  bookingTime: z.ZodNumber;
  registName: z.ZodString;
}, z.core.$strip>>;
declare const BookingUserListResponseSchema: z.ZodObject<{
  bookings: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    isDeleted: z.ZodBoolean;
    name: z.ZodString;
    userId: z.ZodString;
    bookingDate: z.ZodString;
    bookingTime: z.ZodNumber;
    registName: z.ZodString;
  }, z.core.$strip>>;
  totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const BookingIdsResponseSchema: z.ZodArray<z.ZodString>;
declare const BookingErrorResponseSchema: z.ZodObject<{
  error: z.ZodString;
}, z.core.$strip>;
//#endregion
export { BookingAccessTokenResponseSchema, BookingCalendarResponseSchema, BookingCreateRequestSchema, BookingCreateResponseSchema, BookingDeleteRequestSchema, BookingErrorResponseSchema, BookingIdParamSchema, BookingIdsResponseSchema, BookingLogsResponseSchema, BookingPasswordVerifyRequestSchema, BookingPublicSchema, BookingRangeQuerySchema, BookingSchema, BookingUpdateRequestSchema, BookingUserListQuerySchema, BookingUserListResponseSchema };