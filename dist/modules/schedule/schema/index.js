import { buildScheduleCreateRequestExample, buildScheduleCreatedResponseExample, buildScheduleErrorExample, buildScheduleResponseExample, buildScheduleUserExample, buildScheduleUserListExample } from "../examples/index.js";
import { z } from "zod";

//#region src/modules/schedule/schema/index.ts
const ScheduleIdParamSchema = z.object({ scheduleId: z.string().min(1) });
const ScheduleCreateRequestSchema = z.object({
	id: z.string().uuid().optional(),
	userId: z.string().min(1),
	title: z.string().min(1),
	description: z.string().nullable().optional(),
	dates: z.array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).min(1),
	mention: z.array(z.string()).default([]),
	timeExtended: z.boolean().default(false),
	deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
});
const ScheduleResponseSchema = z.object({
	id: z.string(),
	userId: z.string(),
	title: z.string(),
	description: z.string().nullable(),
	startDate: z.string(),
	endDate: z.string(),
	mention: z.array(z.string()).nullable(),
	timeExtended: z.boolean(),
	deadline: z.string(),
	createdAt: z.string(),
	updatedAt: z.string()
});
const ScheduleUserSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	image: z.string().nullable()
});
const ScheduleUserListResponseSchema = z.array(ScheduleUserSchema);
const ScheduleCreateResponseSchema = z.object({ id: z.string() });
const ScheduleErrorResponseSchema = z.object({ error: z.string() });
const scheduleExamples = {
	createRequest: buildScheduleCreateRequestExample(),
	response: buildScheduleResponseExample(),
	user: buildScheduleUserExample(),
	userList: buildScheduleUserListExample(),
	createResponse: buildScheduleCreatedResponseExample(),
	error: buildScheduleErrorExample()
};

//#endregion
export { ScheduleCreateRequestSchema, ScheduleCreateResponseSchema, ScheduleErrorResponseSchema, ScheduleIdParamSchema, ScheduleResponseSchema, ScheduleUserListResponseSchema, ScheduleUserSchema, scheduleExamples };