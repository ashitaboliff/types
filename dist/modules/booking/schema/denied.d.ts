import { z } from "@hono/zod-openapi";

//#region src/modules/booking/schema/denied.d.ts
declare const AdminDeniedSortSchema: z.ZodEnum<{
  new: "new";
  old: "old";
  relativeCurrent: "relativeCurrent";
}>;
declare const DeniedBookingSchema: z.ZodObject<{
  id: z.ZodString;
  startDate: z.ZodString;
  startTime: z.ZodNumber;
  endTime: z.ZodNullable<z.ZodNumber>;
  description: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>;
declare const AdminDeniedBookingQuerySchema: z.ZodObject<{
  sort: z.ZodDefault<z.ZodEnum<{
    new: "new";
    old: "old";
    relativeCurrent: "relativeCurrent";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  today: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
declare const AdminDeniedBookingCreateSchema: z.ZodObject<{
  startDate: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
  startTime: z.ZodNumber;
  endTime: z.ZodOptional<z.ZodNumber>;
  description: z.ZodString;
}, z.core.$strip>;
declare const AdminDeniedBookingResponseSchema: z.ZodObject<{
  data: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    startDate: z.ZodString;
    startTime: z.ZodNumber;
    endTime: z.ZodNullable<z.ZodNumber>;
    description: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    isDeleted: z.ZodBoolean;
  }, z.core.$strip>>;
  totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const DeniedBookingIdParam: z.ZodObject<{
  deniedBookingId: z.ZodString;
}, z.core.$strip>;
//#endregion
export { AdminDeniedBookingCreateSchema, AdminDeniedBookingQuerySchema, AdminDeniedBookingResponseSchema, AdminDeniedSortSchema, DeniedBookingIdParam, DeniedBookingSchema };