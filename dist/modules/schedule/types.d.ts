import { ScheduleCreateSchema, ScheduleResponseSchema, ScheduleUserResponseSchema } from "./schema.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/schedule/types.d.ts
type UserWithName = z.infer<typeof ScheduleUserResponseSchema>;
type ScheduleInput = z.infer<typeof ScheduleCreateSchema>;
type Schedule = z.infer<typeof ScheduleResponseSchema>;
//#endregion
export { Schedule, ScheduleInput, UserWithName };