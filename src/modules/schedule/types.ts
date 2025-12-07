import type { z } from '@hono/zod-openapi'
import type {
	ScheduleCreateSchema,
	ScheduleResponseSchema,
	ScheduleUserResponseSchema,
} from '@/modules/schedule/schema'

export type UserWithName = z.infer<typeof ScheduleUserResponseSchema>

export type ScheduleInput = z.infer<typeof ScheduleCreateSchema>

export type Schedule = z.infer<typeof ScheduleResponseSchema>
