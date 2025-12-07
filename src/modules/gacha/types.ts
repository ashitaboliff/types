import type { z } from '@hono/zod-openapi'
import type {
	GachaBySrcResponseSchema,
	GachaCreateSchema,
	GachaCreateWithOverrideSchema,
	GachaImageProxyRequestSchema,
	GachaImageProxyResponseSchema,
	GachaListResponseSchema,
	GachaQuerySchema,
	GachaRarityEnum,
	GachaResponseSchema,
} from '@/modules/gacha/schema'

export type Gacha = z.infer<typeof GachaResponseSchema>
export type GachaListResponse = z.infer<typeof GachaListResponseSchema>
export type GachaQuery = z.infer<typeof GachaQuerySchema>
export type GachaSort = GachaQuery['sort']
export type GachaCreate = z.infer<typeof GachaCreateSchema>
export type GachaCreateWithOverride = z.infer<
	typeof GachaCreateWithOverrideSchema
>
export type GachaBySrcResponse = z.infer<typeof GachaBySrcResponseSchema>
export type GachaImageProxyRequest = z.infer<
	typeof GachaImageProxyRequestSchema
>
export type GachaImageProxyResponse = z.infer<
	typeof GachaImageProxyResponseSchema
>

export type RarityType = z.infer<typeof GachaRarityEnum>
