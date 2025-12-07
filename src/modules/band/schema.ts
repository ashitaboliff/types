import { z } from '@hono/zod-openapi'
import {
	buildBandCreateRequestExample,
	buildBandCreateResponseExample,
	buildBandErrorExample,
	buildBandExample,
	buildBandListExample,
	buildBandMemberCreateExample,
	buildBandMemberExample,
	buildBandMemberUpdateExample,
	buildBandSearchQueryExample,
	buildBandSearchResultExample,
	buildBandUpdateRequestExample,
} from '@/modules/band/examples'
import { UserPartSchema } from '@/modules/user/schema'

const BandIdParamSchema = z.object({ bandId: z.string().min(1) })
const BandMemberIdParamSchema = z.object({ bandMemberId: z.string().min(1) })

export const BandIdParam = BandIdParamSchema.openapi({
	param: {
		name: 'bandId',
		in: 'path',
		description: 'バンドID',
		required: true,
	},
	example: '1bc4d7f2-1234-4abc-9def-000000000000',
})

export const BandMemberIdParam = BandMemberIdParamSchema.openapi({
	param: {
		name: 'bandMemberId',
		in: 'path',
		description: 'バンドメンバーID',
		required: true,
	},
	example: '7f1e2d3c-1234-5678-9abc-def012345678',
})

export const BandMemberSchema = z
	.object({
		id: z.string(),
		bandId: z.string(),
		userId: z.string(),
		part: UserPartSchema,
		createdAt: z.string(),
		updatedAt: z.string(),
		user: z.object({
			id: z.string(),
			name: z.string().nullable(),
			image: z.string().nullable(),
			profile: z
				.object({
					id: z.string(),
					name: z.string().nullable(),
					studentId: z.string().nullable(),
					expected: z.string().nullable(),
					role: z.string(),
					part: z.array(z.string()).nullable(),
				})
				.nullable(),
		}),
	})
	.openapi({
		title: 'BandMember',
		example: buildBandMemberExample(),
	})

export const BandSchema = z
	.object({
		id: z.string(),
		name: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		isDeleted: z.boolean(),
		members: z.array(BandMemberSchema),
	})
	.openapi({
		title: 'Band',
		example: buildBandExample(),
	})

export const BandListSchema = z.array(BandSchema).openapi({
	title: 'BandList',
	example: buildBandListExample(),
})

export const BandCreateSchema = z
	.object({ name: z.string().min(1).max(100) })
	.openapi({
		title: 'BandCreateRequest',
		example: buildBandCreateRequestExample(),
	})

export const BandCreateResponseSchema = z.object({ id: z.string() }).openapi({
	title: 'BandCreateResponse',
	example: buildBandCreateResponseExample(),
})

export const BandUpdateSchema = z
	.object({ name: z.string().min(1).max(100) })
	.openapi({
		title: 'BandUpdateRequest',
		example: buildBandUpdateRequestExample(),
	})

export const BandMemberCreateSchema = z
	.object({
		userId: z.string().min(1),
		part: UserPartSchema,
	})
	.openapi({
		title: 'BandMemberCreateRequest',
		example: buildBandMemberCreateExample(),
	})

export const BandMemberUpdateSchema = z
	.object({ part: UserPartSchema })
	.openapi({
		title: 'BandMemberUpdateRequest',
		example: buildBandMemberUpdateExample(),
	})

export const BandSearchQuerySchema = z
	.object({
		query: z.string().optional(),
		part: UserPartSchema.optional(),
	})
	.openapi({
		title: 'BandSearchQuery',
		example: buildBandSearchQueryExample(),
	})

export const BandSearchResultSchema = z
	.array(
		z.object({
			id: z.string(),
			name: z.string().nullable(),
			image: z.string().nullable(),
			profile: z
				.object({
					id: z.string(),
					name: z.string().nullable(),
					studentId: z.string().nullable(),
					expected: z.string().nullable(),
					role: z.string(),
					part: z.array(z.string()).nullable(),
				})
				.nullable(),
		}),
	)
	.openapi({
		title: 'BandUserSearchResult',
		example: buildBandSearchResultExample(),
	})

export const BandErrorResponseSchema = z.object({ error: z.string() }).openapi({
	title: 'BandError',
	example: buildBandErrorExample(),
})
