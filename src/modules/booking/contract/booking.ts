import * as schema from '@/modules/booking/schema'
import { UserIdParam } from '@/modules/user/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import { createApiRoute, createAuthenticatedRoute } from '@/shared/openapi'
import { BOOKING_TAG } from './tag'

export const listBookingsByRange = createApiRoute({
	tags: [BOOKING_TAG.name],
	method: 'get',
	path: '/',
	summary: '期間内の予約取得',
	operationId: 'getBookingsByRange',
	request: {
		query: schema.GetBookingQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BookingResponseSchema },
			},
		},
	},
})

export const listBookingLogs = createApiRoute({
	tags: [BOOKING_TAG.name],
	method: 'get',
	path: '/logs',
	summary: '予約履歴一覧',
	operationId: 'listBookingLogs',
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BookingLogsResponseSchema },
			},
		},
	},
})

export const getBookingById = createApiRoute({
	tags: [BOOKING_TAG.name],
	method: 'get',
	path: '/{bookingId}',
	summary: '予約詳細取得',
	operationId: 'getBookingById',
	request: {
		params: schema.BookingIdParam,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.PublicBookingSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const listBookingsByUser = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'get',
	path: '/user/{userId}',
	summary: 'ユーザー別予約一覧',
	operationId: 'getBookingsByUser',
	request: {
		params: UserIdParam,
		query: schema.BookingUserQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BookingByUserResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.UNAUTHORIZED],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const createBooking = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'post',
	path: '/',
	summary: '予約作成',
	operationId: 'createBooking',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.BookingCreateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.CREATED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CREATED],
			content: {
				'application/json': { schema: schema.BookingCreateResponseSchema },
			},
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.CONFLICT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CONFLICT],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const verifyBookingPassword = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'post',
	path: '/{bookingId}/verify',
	summary: '予約パスワード検証',
	operationId: 'verifyBookingPassword',
	request: {
		params: schema.BookingIdParam,
		body: {
			content: {
				'application/json': { schema: schema.BookingPasswordSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: '認証に成功し、予約操作用トークンを返却します。',
			content: {
				'application/json': {
					schema: schema.BookingAccessTokenResponseSchema,
				},
			},
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: {
			description: '予約パスワードの検証に失敗しました。',
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const updateBooking = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'put',
	path: '/{bookingId}',
	summary: '予約更新',
	operationId: 'updateBooking',
	request: {
		params: schema.BookingIdParam,
		body: {
			content: {
				'application/json': { schema: schema.BookingUpdateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.CONFLICT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CONFLICT],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const deleteBooking = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'delete',
	path: '/{bookingId}',
	summary: '予約削除',
	operationId: 'deleteBooking',
	request: {
		params: schema.BookingIdParam,
		body: {
			content: {
				'application/json': { schema: schema.BookingDeleteSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const getAllBookingIds = createApiRoute({
	tags: [BOOKING_TAG.name],
	method: 'get',
	path: '/ids',
	summary: '予約ID一覧',
	operationId: 'getAllBookingIds',
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BookingIdsSchema },
			},
		},
	},
})
