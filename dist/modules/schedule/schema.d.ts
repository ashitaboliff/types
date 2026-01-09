import { z } from "@hono/zod-openapi";

//#region src/modules/schedule/schema.d.ts
declare const ScheduleIdParam: z.ZodObject<{
  scheduleId: z.ZodString;
}, z.core.$strip>;
declare const ScheduleCreateSchema: z.ZodObject<{
  id: z.ZodOptional<z.ZodString>;
  userId: z.ZodString;
  title: z.ZodString;
  description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
  dates: z.ZodArray<z.ZodString>;
  mention: z.ZodDefault<z.ZodArray<z.ZodString>>;
  timeExtended: z.ZodDefault<z.ZodBoolean>;
  deadline: z.ZodString;
}, z.core.$strip>;
declare const ScheduleResponseSchema: z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  title: z.ZodString;
  description: z.ZodNullable<z.ZodString>;
  startDate: z.ZodString;
  endDate: z.ZodString;
  mention: z.ZodNullable<z.ZodArray<z.ZodString>>;
  timeExtended: z.ZodBoolean;
  deadline: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
}, z.core.$strip>;
declare const ScheduleUserResponseSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  image: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const ScheduleUserListSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  image: z.ZodNullable<z.ZodString>;
}, z.core.$strip>>;
declare const ScheduleCreatedResponseSchema: z.ZodObject<{
  id: z.ZodString;
}, z.core.$strip>;
declare const ScheduleErrorResponseSchema: z.ZodObject<{
  error: z.ZodString;
}, z.core.$strip>;
//#endregion
export { ScheduleCreateSchema, ScheduleCreatedResponseSchema, ScheduleErrorResponseSchema, ScheduleIdParam, ScheduleResponseSchema, ScheduleUserListSchema, ScheduleUserResponseSchema };