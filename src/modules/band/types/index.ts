import type { z } from 'zod'
import type {
	BandCreateRequestSchema,
	BandCreateResponseSchema,
	BandListResponseSchema,
	BandMemberCreateRequestSchema,
	BandMemberSchema,
	BandMemberUpdateRequestSchema,
	BandSchema,
	BandSearchQuerySchema,
	BandSearchResponseSchema,
	BandUpdateRequestSchema,
} from '@/modules/band/schema'

export type Band = z.infer<typeof BandSchema>
export type BandMember = z.infer<typeof BandMemberSchema>
export type BandListResponse = z.infer<typeof BandListResponseSchema>
export type BandSearchQuery = z.infer<typeof BandSearchQuerySchema>
export type BandSearchResponse = z.infer<typeof BandSearchResponseSchema>
export type BandCreateRequest = z.infer<typeof BandCreateRequestSchema>
export type BandCreateResponse = z.infer<typeof BandCreateResponseSchema>
export type BandUpdateRequest = z.infer<typeof BandUpdateRequestSchema>
export type BandMemberCreateRequest = z.infer<
	typeof BandMemberCreateRequestSchema
>
export type BandMemberUpdateRequest = z.infer<
	typeof BandMemberUpdateRequestSchema
>
