import { buildBandCreateRequestExample, buildBandCreateResponseExample, buildBandErrorExample, buildBandExample, buildBandListExample, buildBandMemberCreateExample, buildBandMemberExample, buildBandMemberUpdateExample, buildBandSearchQueryExample, buildBandSearchResultExample, buildBandUpdateRequestExample } from "./examples.js";
import { UserPartSchema } from "../user/schema.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/band/schema.ts
const BandIdParamSchema = z.object({ bandId: z.string().min(1) });
const BandMemberIdParamSchema = z.object({ bandMemberId: z.string().min(1) });
const BandIdParam = BandIdParamSchema.openapi({
	param: {
		name: "bandId",
		in: "path",
		description: "バンドID",
		required: true
	},
	example: "1bc4d7f2-1234-4abc-9def-000000000000"
});
const BandMemberIdParam = BandMemberIdParamSchema.openapi({
	param: {
		name: "bandMemberId",
		in: "path",
		description: "バンドメンバーID",
		required: true
	},
	example: "7f1e2d3c-1234-5678-9abc-def012345678"
});
const BandMemberSchema = z.object({
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
		profile: z.object({
			id: z.string(),
			name: z.string().nullable(),
			studentId: z.string().nullable(),
			expected: z.string().nullable(),
			role: z.string(),
			part: z.array(z.string()).nullable()
		}).nullable()
	})
}).openapi({
	title: "BandMember",
	example: buildBandMemberExample()
});
const BandSchema = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean(),
	members: z.array(BandMemberSchema)
}).openapi({
	title: "Band",
	example: buildBandExample()
});
const BandListSchema = z.array(BandSchema).openapi({
	title: "BandList",
	example: buildBandListExample()
});
const BandCreateSchema = z.object({ name: z.string().min(1).max(100) }).openapi({
	title: "BandCreateRequest",
	example: buildBandCreateRequestExample()
});
const BandCreateResponseSchema = z.object({ id: z.string() }).openapi({
	title: "BandCreateResponse",
	example: buildBandCreateResponseExample()
});
const BandUpdateSchema = z.object({ name: z.string().min(1).max(100) }).openapi({
	title: "BandUpdateRequest",
	example: buildBandUpdateRequestExample()
});
const BandMemberCreateSchema = z.object({
	userId: z.string().min(1),
	part: UserPartSchema
}).openapi({
	title: "BandMemberCreateRequest",
	example: buildBandMemberCreateExample()
});
const BandMemberUpdateSchema = z.object({ part: UserPartSchema }).openapi({
	title: "BandMemberUpdateRequest",
	example: buildBandMemberUpdateExample()
});
const BandSearchQuerySchema = z.object({
	query: z.string().optional(),
	part: UserPartSchema.optional()
}).openapi({
	title: "BandSearchQuery",
	example: buildBandSearchQueryExample()
});
const BandSearchResultSchema = z.array(z.object({
	id: z.string(),
	name: z.string().nullable(),
	image: z.string().nullable(),
	profile: z.object({
		id: z.string(),
		name: z.string().nullable(),
		studentId: z.string().nullable(),
		expected: z.string().nullable(),
		role: z.string(),
		part: z.array(z.string()).nullable()
	}).nullable()
})).openapi({
	title: "BandUserSearchResult",
	example: buildBandSearchResultExample()
});
const BandErrorResponseSchema = z.object({ error: z.string() }).openapi({
	title: "BandError",
	example: buildBandErrorExample()
});

//#endregion
export { BandCreateResponseSchema, BandCreateSchema, BandErrorResponseSchema, BandIdParam, BandListSchema, BandMemberCreateSchema, BandMemberIdParam, BandMemberSchema, BandMemberUpdateSchema, BandSchema, BandSearchQuerySchema, BandSearchResultSchema, BandUpdateSchema };