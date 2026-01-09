import { GachaBySrcResponseSchema, GachaCreateSchema, GachaCreateWithOverrideSchema, GachaImageProxyRequestSchema, GachaImageProxyResponseSchema, GachaListResponseSchema, GachaQuerySchema, GachaRarityEnum, GachaResponseSchema, GachaSortSchema } from "./schema.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/gacha/types.d.ts
type Gacha = z.infer<typeof GachaResponseSchema>;
type GachaListResponse = z.infer<typeof GachaListResponseSchema>;
type GachaQuery = z.infer<typeof GachaQuerySchema>;
type GachaSort = z.infer<typeof GachaSortSchema>;
type GachaCreate = z.infer<typeof GachaCreateSchema>;
type GachaCreateWithOverride = z.infer<typeof GachaCreateWithOverrideSchema>;
type GachaBySrcResponse = z.infer<typeof GachaBySrcResponseSchema>;
type GachaImageProxyRequest = z.infer<typeof GachaImageProxyRequestSchema>;
type GachaImageProxyResponse = z.infer<typeof GachaImageProxyResponseSchema>;
type RarityType = z.infer<typeof GachaRarityEnum>;
//#endregion
export { Gacha, GachaBySrcResponse, GachaCreate, GachaCreateWithOverride, GachaImageProxyRequest, GachaImageProxyResponse, GachaListResponse, GachaQuery, GachaSort, RarityType };