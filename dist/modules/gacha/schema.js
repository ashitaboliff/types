import { buildGachaBySrcResponseExample, buildGachaCreateExample, buildGachaCreateWithOverrideExample, buildGachaErrorExample, buildGachaImageProxyRequestExample, buildGachaImageProxyResponseExample, buildGachaItemExample, buildGachaListResponseExample, buildGachaQueryExample, buildGachaSrcQueryExample } from "./examples.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/gacha/schema.ts
const GachaRarityEnum = z.enum([
	"COMMON",
	"RARE",
	"SUPER_RARE",
	"SS_RARE",
	"ULTRA_RARE",
	"SECRET_RARE"
]);
const GachaSortSchema = z.enum([
	"new",
	"old",
	"rare",
	"notrare"
]);
const GachaQuerySchema = z.object({
	sort: GachaSortSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(100).default(10)
}).openapi({
	title: "GachaQuery",
	example: buildGachaQueryExample()
});
const GachaResponseSchema = z.object({
	id: z.string(),
	userId: z.string(),
	gachaVersion: z.string(),
	gachaRarity: GachaRarityEnum,
	gachaSrc: z.string(),
	signedGachaSrc: z.string().optional(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean()
}).openapi({
	title: "GachaItem",
	example: buildGachaItemExample()
});
const GachaListResponseSchema = z.object({
	gacha: z.array(GachaResponseSchema),
	totalCount: z.number().int().nonnegative()
}).openapi({
	title: "GachaListResponse",
	example: buildGachaListResponseExample()
});
const GachaCreateSchema = z.object({
	userId: z.string(),
	gachaRarity: GachaRarityEnum,
	gachaVersion: z.string(),
	gachaSrc: z.string()
}).openapi({
	title: "GachaCreate",
	example: buildGachaCreateExample()
});
const GachaCreateWithOverrideSchema = GachaCreateSchema.extend({ ignoreLimit: z.boolean().optional() }).openapi({
	title: "GachaCreateWithOverride",
	example: buildGachaCreateWithOverrideExample()
});
const GachaSrcQuerySchema = z.object({ gachaSrc: z.string().min(1) }).openapi({
	title: "GachaSrcQuery",
	example: buildGachaSrcQueryExample()
});
const GachaBySrcResponseSchema = z.object({
	gacha: GachaResponseSchema.nullable(),
	totalCount: z.number().int().nonnegative()
}).openapi({
	title: "GachaBySrcResponse",
	example: buildGachaBySrcResponseExample()
});
const GachaErrorResponseSchema = z.object({ error: z.string() }).openapi({
	title: "GachaError",
	example: buildGachaErrorExample()
});
const GachaImageProxyRequestSchema = z.object({ keys: z.array(z.string().min(1)).min(1).max(50) }).openapi({
	title: "GachaImageProxyRequest",
	example: buildGachaImageProxyRequestExample()
});
const GachaImageProxyResponseSchema = z.object({ urls: z.record(z.string(), z.string().url()) }).openapi({
	title: "GachaImageProxyResponse",
	example: buildGachaImageProxyResponseExample()
});

//#endregion
export { GachaBySrcResponseSchema, GachaCreateSchema, GachaCreateWithOverrideSchema, GachaErrorResponseSchema, GachaImageProxyRequestSchema, GachaImageProxyResponseSchema, GachaListResponseSchema, GachaQuerySchema, GachaRarityEnum, GachaResponseSchema, GachaSortSchema, GachaSrcQuerySchema };