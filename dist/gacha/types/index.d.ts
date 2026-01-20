import { GachaBySourceResponseSchema, GachaCreateRequestSchema, GachaCreateWithOverrideRequestSchema, GachaImageProxyRequestSchema, GachaImageProxyResponseSchema, GachaListQuerySchema, GachaListResponseSchema, GachaRaritySchema, GachaSchema, GachaSortOrderSchema, GachaSourceQuerySchema } from "../schema/index.js";
import { z } from "zod";

//#region src/modules/gacha/types/index.d.ts
type Gacha = z.infer<typeof GachaSchema>;
type GachaListResponse = z.infer<typeof GachaListResponseSchema>;
type GachaListQuery = z.infer<typeof GachaListQuerySchema>;
type GachaSortOrder = z.infer<typeof GachaSortOrderSchema>;
type GachaCreateRequest = z.infer<typeof GachaCreateRequestSchema>;
type GachaCreateWithOverrideRequest = z.infer<typeof GachaCreateWithOverrideRequestSchema>;
type GachaSourceQuery = z.infer<typeof GachaSourceQuerySchema>;
type GachaBySourceResponse = z.infer<typeof GachaBySourceResponseSchema>;
type GachaImageProxyRequest = z.infer<typeof GachaImageProxyRequestSchema>;
type GachaImageProxyResponse = z.infer<typeof GachaImageProxyResponseSchema>;
type GachaRarity = z.infer<typeof GachaRaritySchema>;
//#endregion
export { Gacha, GachaBySourceResponse, GachaCreateRequest, GachaCreateWithOverrideRequest, GachaImageProxyRequest, GachaImageProxyResponse, GachaListQuery, GachaListResponse, GachaRarity, GachaSortOrder, GachaSourceQuery };