import { buildGachaBySrcResponseExample, buildGachaCreateExample, buildGachaCreateWithOverrideExample, buildGachaErrorExample, buildGachaImageProxyRequestExample, buildGachaImageProxyResponseExample, buildGachaItemExample, buildGachaListResponseExample, buildGachaQueryExample, buildGachaSrcQueryExample } from "../examples/index.js";
import { z } from "zod";

//#region src/modules/gacha/schema/index.ts
const GachaRaritySchema = z.enum([
	"COMMON",
	"RARE",
	"SUPER_RARE",
	"SS_RARE",
	"ULTRA_RARE",
	"SECRET_RARE"
]);
const GachaSortOrderSchema = z.enum([
	"new",
	"old",
	"rare",
	"notrare"
]);
const GachaListQuerySchema = z.object({
	sort: GachaSortOrderSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(100).default(10)
});
const GachaSchema = z.object({
	id: z.string(),
	userId: z.string(),
	gachaVersion: z.string(),
	gachaRarity: GachaRaritySchema,
	gachaSrc: z.string(),
	signedGachaSrc: z.string().optional(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean()
});
const GachaListResponseSchema = z.object({
	gacha: z.array(GachaSchema),
	totalCount: z.number().int().nonnegative()
});
const GachaCreateRequestSchema = z.object({
	userId: z.string(),
	gachaRarity: GachaRaritySchema,
	gachaVersion: z.string(),
	gachaSrc: z.string()
});
const GachaCreateWithOverrideRequestSchema = GachaCreateRequestSchema.extend({ ignoreLimit: z.boolean().optional() });
const GachaSourceQuerySchema = z.object({ gachaSrc: z.string().min(1) });
const GachaBySourceResponseSchema = z.object({
	gacha: GachaSchema.nullable(),
	totalCount: z.number().int().nonnegative()
});
const GachaErrorResponseSchema = z.object({ error: z.string() });
const GachaImageProxyRequestSchema = z.object({ keys: z.array(z.string().min(1)).min(1).max(50) });
const GachaImageProxyResponseSchema = z.object({ urls: z.record(z.string(), z.string().url()) });
const gachaExamples = {
	listQuery: buildGachaQueryExample(),
	item: buildGachaItemExample(),
	listResponse: buildGachaListResponseExample(),
	createRequest: buildGachaCreateExample(),
	createOverrideRequest: buildGachaCreateWithOverrideExample(),
	sourceQuery: buildGachaSrcQueryExample(),
	bySourceResponse: buildGachaBySrcResponseExample(),
	error: buildGachaErrorExample(),
	imageProxyRequest: buildGachaImageProxyRequestExample(),
	imageProxyResponse: buildGachaImageProxyResponseExample()
};

//#endregion
export { GachaBySourceResponseSchema, GachaCreateRequestSchema, GachaCreateWithOverrideRequestSchema, GachaErrorResponseSchema, GachaImageProxyRequestSchema, GachaImageProxyResponseSchema, GachaListQuerySchema, GachaListResponseSchema, GachaRaritySchema, GachaSchema, GachaSortOrderSchema, GachaSourceQuerySchema, gachaExamples };