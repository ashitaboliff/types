import { UserPartSchema } from "../../user/schema/index.js";
import { z } from "zod";

//#region src/modules/band/schema/index.ts
const BandIdParamSchema = z.object({ bandId: z.string().min(1) });
const BandMemberIdParamSchema = z.object({ bandMemberId: z.string().min(1) });
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
});
const BandSchema = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean(),
	members: z.array(BandMemberSchema)
});
const BandListResponseSchema = z.array(BandSchema);
const BandCreateRequestSchema = z.object({ name: z.string().min(1).max(100) });
const BandCreateResponseSchema = z.object({ id: z.string() });
const BandUpdateRequestSchema = z.object({ name: z.string().min(1).max(100) });
const BandMemberCreateRequestSchema = z.object({
	userId: z.string().min(1),
	part: UserPartSchema
});
const BandMemberUpdateRequestSchema = z.object({ part: UserPartSchema });
const BandSearchQuerySchema = z.object({
	query: z.string().optional(),
	part: UserPartSchema.optional()
});
const BandSearchResponseSchema = z.array(z.object({
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
}));
const BandErrorResponseSchema = z.object({ error: z.string() });

//#endregion
export { BandCreateRequestSchema, BandCreateResponseSchema, BandErrorResponseSchema, BandIdParamSchema, BandListResponseSchema, BandMemberCreateRequestSchema, BandMemberIdParamSchema, BandMemberSchema, BandMemberUpdateRequestSchema, BandSchema, BandSearchQuerySchema, BandSearchResponseSchema, BandUpdateRequestSchema };