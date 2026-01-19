import type { z } from 'zod'
import type {
	GachaBySourceResponseSchema,
	GachaCreateRequestSchema,
	GachaCreateWithOverrideRequestSchema,
	GachaImageProxyRequestSchema,
	GachaImageProxyResponseSchema,
	GachaListQuerySchema,
	GachaListResponseSchema,
	GachaRaritySchema,
	GachaSchema,
	GachaSortOrderSchema,
	GachaSourceQuerySchema,
} from '@/modules/gacha/schema'

export type Gacha = z.infer<typeof GachaSchema>
export type GachaListResponse = z.infer<typeof GachaListResponseSchema>
export type GachaListQuery = z.infer<typeof GachaListQuerySchema>
export type GachaSortOrder = z.infer<typeof GachaSortOrderSchema>
export type GachaCreateRequest = z.infer<typeof GachaCreateRequestSchema>
export type GachaCreateWithOverrideRequest = z.infer<
	typeof GachaCreateWithOverrideRequestSchema
>
export type GachaSourceQuery = z.infer<typeof GachaSourceQuerySchema>
export type GachaBySourceResponse = z.infer<typeof GachaBySourceResponseSchema>
export type GachaImageProxyRequest = z.infer<
	typeof GachaImageProxyRequestSchema
>
export type GachaImageProxyResponse = z.infer<
	typeof GachaImageProxyResponseSchema
>

export type GachaRarity = z.infer<typeof GachaRaritySchema>
