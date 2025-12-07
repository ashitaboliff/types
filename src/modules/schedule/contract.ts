import * as schema from '@/modules/schedule/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import {
	createApiRoute,
	createAuthenticatedRoute,
	registerFeatureTag,
} from '@/shared/openapi'

export const SCHEDULE_TAG = registerFeatureTag({
	name: 'Schedules',
	description: 'スケジュール情報の取得・作成を扱うAPI。',
})

export const GetScheduleUsers = createApiRoute({
	tags: [SCHEDULE_TAG.name],
	method: 'get',
	path: '/users',
	summary: 'スケジュール登録可能ユーザー一覧取得',
	operationId: 'getScheduleUsers',
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.ScheduleUserListSchema },
			},
		},
	},
})

export const GetScheduleScheduleId = createApiRoute({
	tags: [SCHEDULE_TAG.name],
	method: 'get',
	path: '/{scheduleId}',
	summary: 'スケジュール取得',
	operationId: 'getScheduleScheduleId',
	request: {
		params: schema.ScheduleIdParam,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.ScheduleResponseSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.ScheduleErrorResponseSchema },
			},
		},
	},
})

export const PostSchedule = createAuthenticatedRoute({
	tags: [SCHEDULE_TAG.name],
	method: 'post',
	path: '/',
	summary: 'スケジュール作成',
	operationId: 'postSchedule',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.ScheduleCreateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.CREATED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CREATED],
			content: {
				'application/json': { schema: schema.ScheduleCreatedResponseSchema },
			},
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.ScheduleErrorResponseSchema },
			},
		},
	},
})
