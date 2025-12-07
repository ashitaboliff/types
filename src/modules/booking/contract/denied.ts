import * as schema from '@/modules/booking/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import { createAuthenticatedRoute } from '@/shared/openapi'
import { BOOKING_TAG } from './tag'

export const listDeniedBookings = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'get',
	path: '/denied',
	summary: '予約禁止一覧',
	operationId: 'listDeniedBookings',
	request: {
		query: schema.AdminDeniedBookingQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.AdminDeniedBookingResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const adminCreateDeniedBooking = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'post',
	path: '/denied',
	summary: '予約禁止作成',
	operationId: 'adminCreateDeniedBooking',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.AdminDeniedBookingCreateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.CREATED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CREATED],
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})

export const adminDeleteDeniedBooking = createAuthenticatedRoute({
	tags: [BOOKING_TAG.name],
	method: 'delete',
	path: '/denied/{deniedBookingId}',
	summary: '予約禁止削除',
	operationId: 'adminDeleteDeniedBooking',
	request: {
		params: schema.DeniedBookingIdParam,
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BookingErrorResponseSchema },
			},
		},
	},
})
