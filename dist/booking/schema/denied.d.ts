import { z } from "zod";

//#region src/modules/booking/schema/denied.d.ts
declare const DeniedBookingIdParamSchema: z.ZodObject<{
  deniedBookingId: z.ZodString;
}, z.core.$strip>;
declare const DeniedBookingSortSchema: z.ZodEnum<{
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
declare const DeniedBookingAdminQuerySchema: z.ZodObject<{
  sort: z.ZodDefault<z.ZodEnum<{
    new: "new";
    old: "old";
    relativeCurrent: "relativeCurrent";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  today: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
declare const DeniedBookingCreateRequestSchema: z.ZodObject<{
  startDate: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
  startTime: z.ZodNumber;
  endTime: z.ZodOptional<z.ZodNumber>;
  description: z.ZodString;
}, z.core.$strip>;
declare const DeniedBookingAdminListResponseSchema: z.ZodObject<{
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
//#endregion
export { DeniedBookingAdminListResponseSchema, DeniedBookingAdminQuerySchema, DeniedBookingCreateRequestSchema, DeniedBookingIdParamSchema, DeniedBookingSchema, DeniedBookingSortSchema };