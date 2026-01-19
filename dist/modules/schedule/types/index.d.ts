import { ScheduleCreateRequestSchema, ScheduleResponseSchema, ScheduleUserListResponseSchema, ScheduleUserSchema } from "../schema/index.js";
import { z } from "zod";

//#region src/modules/schedule/types/index.d.ts
type ScheduleUser = z.infer<typeof ScheduleUserSchema>;
type ScheduleUserListResponse = z.infer<typeof ScheduleUserListResponseSchema>;
type ScheduleCreateRequest = z.infer<typeof ScheduleCreateRequestSchema>;
type ScheduleResponse = z.infer<typeof ScheduleResponseSchema>;
//#endregion
export { ScheduleCreateRequest, ScheduleResponse, ScheduleUser, ScheduleUserListResponse };