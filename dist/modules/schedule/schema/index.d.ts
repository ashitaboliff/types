import { z } from "zod";

//#region src/modules/schedule/schema/index.d.ts
declare const ScheduleIdParamSchema: z.ZodObject<{
  scheduleId: z.ZodString;
}, z.core.$strip>;
declare const ScheduleCreateRequestSchema: z.ZodObject<{
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
declare const ScheduleUserSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  image: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const ScheduleUserListResponseSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  image: z.ZodNullable<z.ZodString>;
}, z.core.$strip>>;
declare const ScheduleCreateResponseSchema: z.ZodObject<{
  id: z.ZodString;
}, z.core.$strip>;
declare const ScheduleErrorResponseSchema: z.ZodObject<{
  error: z.ZodString;
}, z.core.$strip>;
declare const scheduleExamples: {
  createRequest: {
    id: undefined;
    userId: string;
    title: string;
    description: string;
    dates: string[];
    mention: string[];
    timeExtended: boolean;
    deadline: string;
  };
  response: {
    id: string;
    userId: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    mention: string[];
    timeExtended: boolean;
    deadline: string;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    id: string;
    name: string;
    image: string;
  };
  userList: ({
    id: string;
    name: string;
    image: string;
  } | {
    id: string;
    name: string;
    image: null;
  })[];
  createResponse: {
    id: string;
  };
  error: {
    error: string;
  };
};
//#endregion
export { ScheduleCreateRequestSchema, ScheduleCreateResponseSchema, ScheduleErrorResponseSchema, ScheduleIdParamSchema, ScheduleResponseSchema, ScheduleUserListResponseSchema, ScheduleUserSchema, scheduleExamples };