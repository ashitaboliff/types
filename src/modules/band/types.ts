import type { z } from '@hono/zod-openapi'
import type {
	BandCreateSchema,
	BandMemberCreateSchema,
	BandMemberSchema,
	BandSchema,
	BandSearchQuerySchema,
	BandSearchResultSchema,
	BandUpdateSchema,
} from '@/modules/band/schema'

export type Band = z.infer<typeof BandSchema>
export type BandMember = z.infer<typeof BandMemberSchema>
export type BandList = Band[]
export type BandSearchQuery = z.infer<typeof BandSearchQuerySchema>
export type BandSearchResult = z.infer<typeof BandSearchResultSchema>
export type BandCreate = z.infer<typeof BandCreateSchema>
export type BandUpdate = z.infer<typeof BandUpdateSchema>
export type BandMemberCreate = z.infer<typeof BandMemberCreateSchema>
