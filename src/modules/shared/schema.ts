import { z } from '@hono/zod-openapi'

const UserIdParamSchema = z.object({ userId: z.string().min(1) })

export const SortSchema = z.enum(['new', 'old'])

export const UserIdParam = UserIdParamSchema.openapi({
	param: {
		name: 'userId',
		in: 'path',
		description: '対象となるユーザーID',
		required: true,
	},
	example: 'be68668f-f3a0-a94c-1127-445c0fcca4b1',
})
