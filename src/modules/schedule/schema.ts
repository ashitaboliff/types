import { z } from '@hono/zod-openapi'
import {
	buildScheduleCreatedResponseExample,
	buildScheduleCreateRequestExample,
	buildScheduleErrorExample,
	buildScheduleResponseExample,
	buildScheduleUserExample,
	buildScheduleUserListExample,
} from '@/modules/schedule/examples'

const ScheduleIdParamSchema = z.object({ scheduleId: z.string().min(1) })

export const ScheduleIdParam = ScheduleIdParamSchema.openapi({
	param: {
		name: 'scheduleId',
		in: 'path',
		description: 'スケジュールID',
		required: true,
	},
	example: 'sched_123',
})

export const ScheduleCreateSchema = z
	.object({
		id: z.string().uuid().optional(),
		userId: z.string().min(1),
		title: z.string().min(1),
		description: z.string().nullable().optional(),
		dates: z.array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).min(1),
		mention: z.array(z.string()).default([]),
		timeExtended: z.boolean().default(false),
		deadline: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	})
	.openapi({
		title: 'ScheduleCreateRequest',
		example: buildScheduleCreateRequestExample(),
	})

export const ScheduleResponseSchema = z
	.object({
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
		updatedAt: z.string(),
	})
	.openapi({
		title: 'ScheduleResponse',
		example: buildScheduleResponseExample(),
	})

export const ScheduleUserResponseSchema = z
	.object({
		id: z.string(),
		name: z.string().nullable(),
		image: z.string().nullable(),
	})
	.openapi({
		title: 'ScheduleUser',
		example: buildScheduleUserExample(),
	})

export const ScheduleUserListSchema = z
	.array(ScheduleUserResponseSchema)
	.openapi({
		title: 'ScheduleUserList',
		example: buildScheduleUserListExample(),
	})

export const ScheduleCreatedResponseSchema = z
	.object({ id: z.string() })
	.openapi({
		title: 'ScheduleCreatedResponse',
		example: buildScheduleCreatedResponseExample(),
	})

export const ScheduleErrorResponseSchema = z
	.object({ error: z.string() })
	.openapi({
		title: 'ScheduleError',
		example: buildScheduleErrorExample(),
	})
