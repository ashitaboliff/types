import { z } from '@hono/zod-openapi'
import * as example from '@/modules/booking/examples'

const DeniedBookingIdParamSchema = z.object({
	deniedBookingId: z.string().min(1),
})

export const AdminDeniedSortSchema = z.enum(['new', 'old', 'relativeCurrent'])

export const DeniedBookingSchema = z
	.object({
		id: z.string(),
		startDate: z.string(),
		startTime: z.number().int(),
		endTime: z.number().int().nullable(),
		description: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		isDeleted: z.boolean(),
	})
	.openapi({
		title: 'DeniedBooking',
		example: example.buildDeniedBookingResponseExample()[0],
	})

export const AdminDeniedBookingQuerySchema = z
	.object({
		sort: AdminDeniedSortSchema.default('new'),
		page: z.coerce.number().int().positive().default(1),
		perPage: z.coerce.number().int().min(1).max(100).default(10),
		today: z
			.string()
			.regex(/^\d{4}-\d{2}-\d{2}$/)
			.default(new Date().toISOString().slice(0, 10)),
	})
	.openapi({
		title: 'AdminDeniedBookingQuery',
		example: example.buildDeniedBookingQueryExample(),
	})

export const AdminDeniedBookingCreateSchema = z
	.object({
		startDate: z.union([
			z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
			z.array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)),
		]),
		startTime: z.number().int().min(0),
		endTime: z.number().int().min(0).optional(),
		description: z.string().min(1),
	})
	.openapi({
		title: 'AdminDeniedBookingCreate',
		example: example.buildAdminDeniedBookingCreateExample(),
	})

export const AdminDeniedBookingResponseSchema = z
	.object({
		data: z.array(DeniedBookingSchema.nullable()),
		totalCount: z.number().min(0),
	})
	.openapi({
		title: 'AdminDeniedBookingResponse',
		example: example.buildAdminDeniedBookingResponseExample(),
	})

export const DeniedBookingIdParam = DeniedBookingIdParamSchema.openapi({
	param: {
		name: 'deniedBookingId',
		in: 'path',
		description: '予約禁止ID',
		required: true,
	},
	example: 'denied_1',
})
