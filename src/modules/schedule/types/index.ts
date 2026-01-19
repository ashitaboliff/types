import type { z } from 'zod'
import type {
	ScheduleCreateRequestSchema,
	ScheduleResponseSchema,
	ScheduleUserListResponseSchema,
	ScheduleUserSchema,
} from '@/modules/schedule/schema'

export type ScheduleUser = z.infer<typeof ScheduleUserSchema>
export type ScheduleUserListResponse = z.infer<
	typeof ScheduleUserListResponseSchema
>
export type ScheduleCreateRequest = z.infer<typeof ScheduleCreateRequestSchema>
export type ScheduleResponse = z.infer<typeof ScheduleResponseSchema>
