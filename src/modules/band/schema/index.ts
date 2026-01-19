import { z } from 'zod'
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

export const BandIdParamSchema = z.object({ bandId: z.string().min(1) })
export const BandMemberIdParamSchema = z.object({
	bandMemberId: z.string().min(1),
})

export const BandMemberSchema = z.object({
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

export const BandSchema = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean(),
	members: z.array(BandMemberSchema),
})

export const BandListResponseSchema = z.array(BandSchema)

export const BandCreateRequestSchema = z.object({
	name: z.string().min(1).max(100),
})

export const BandCreateResponseSchema = z.object({ id: z.string() })

export const BandUpdateRequestSchema = z.object({
	name: z.string().min(1).max(100),
})

export const BandMemberCreateRequestSchema = z.object({
	userId: z.string().min(1),
	part: UserPartSchema,
})

export const BandMemberUpdateRequestSchema = z.object({ part: UserPartSchema })

export const BandSearchQuerySchema = z.object({
	query: z.string().optional(),
	part: UserPartSchema.optional(),
})

export const BandSearchResponseSchema = z.array(
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

export const BandErrorResponseSchema = z.object({ error: z.string() })

export const bandExamples = {
	band: buildBandExample(),
	bandList: buildBandListExample(),
	bandMember: buildBandMemberExample(),
	createRequest: buildBandCreateRequestExample(),
	createResponse: buildBandCreateResponseExample(),
	updateRequest: buildBandUpdateRequestExample(),
	memberCreateRequest: buildBandMemberCreateExample(),
	memberUpdateRequest: buildBandMemberUpdateExample(),
	searchQuery: buildBandSearchQueryExample(),
	searchResponse: buildBandSearchResultExample(),
	error: buildBandErrorExample(),
}
