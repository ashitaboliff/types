import type { z } from '@hono/zod-openapi'
import type {
	AdminSyncPayloadSchema,
	AdminSyncQueuedResponseSchema,
	AdminSyncResponseSchema,
	PlaylistDetailSchema,
	PlaylistDocSchema,
	PlaylistVideosQuerySchema,
	PlaylistVideosResponseSchema,
	SearchResponseSchema,
	VideoDetailSchema,
	VideoDocSchema,
	VideoIdsQuerySchema,
	VideoIdsResponseSchema,
	YoutubeSearchQuerySchema,
} from '@/modules/video/schema'

export type PlaylistDoc = z.infer<typeof PlaylistDocSchema>
export type VideoDoc = z.infer<typeof VideoDocSchema>
export type PlaylistDetail = z.infer<typeof PlaylistDetailSchema>
export type VideoDetail = z.infer<typeof VideoDetailSchema>

export type VideoItem = z.infer<typeof VideoDocSchema>
export type PlaylistItem = z.infer<typeof PlaylistDetailSchema>

export type YoutubeSearchQuery = z.infer<typeof YoutubeSearchQuerySchema>
export type SearchResponse = z.infer<typeof SearchResponseSchema>
export type SearchResult<T extends PlaylistDoc | VideoDoc> = {
	items: T[]
	total: number
}

export type YoutubeIdType = z.infer<typeof VideoIdsQuerySchema>['type'] extends
	| undefined
	| null
	? 'video' | 'playlist'
	: NonNullable<z.infer<typeof VideoIdsQuerySchema>['type']>

export type SyncJobRecord = {
	triggeredAt: string
	succeeded: boolean
	playlists: number
	videos: number
	durationMs: number
	error?: string
}

export type PlaylistSnippet = {
	id: string
	title?: string
	publishedAt?: string
}

export type PlaylistVideoSnippet = {
	playlistId: string
	videoId: string
	title?: string
	publishedAt?: string
}

export type PlaylistRaw = {
	playlistId: string
	title?: string
	publishedAt?: string
	videos: PlaylistVideoSnippet[]
}

export type VideoSyncQueueItem =
	| { type: 'playlist'; playlistId: string }
	| { type: 'delete-playlist'; playlistId: string }
	| { type: 'full' }

export type AdminSyncPayload = z.infer<typeof AdminSyncPayloadSchema>
export type AdminSyncResponse = z.infer<typeof AdminSyncResponseSchema>
export type AdminSyncQueuedResponse = z.infer<
	typeof AdminSyncQueuedResponseSchema
>
export type PlaylistVideosQuery = z.infer<typeof PlaylistVideosQuerySchema>
export type PlaylistVideosResponse = z.infer<
	typeof PlaylistVideosResponseSchema
>
export type VideoIdsQuery = z.infer<typeof VideoIdsQuerySchema>
export type VideoIdsResponse = z.infer<typeof VideoIdsResponseSchema>
