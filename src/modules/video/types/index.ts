import type { z } from 'zod'
import type {
	PlaylistDetailResponseSchema,
	PlaylistDocSchema,
	PlaylistVideosQuerySchema,
	PlaylistVideosResponseSchema,
	VideoAdminSyncQueuedResponseSchema,
	VideoAdminSyncRequestSchema,
	VideoAdminSyncResponseSchema,
	VideoDetailResponseSchema,
	VideoDocSchema,
	VideoIdsQuerySchema,
	VideoIdsResponseSchema,
	VideoSearchQuerySchema,
	VideoSearchResponseSchema,
} from '@/modules/video/schema'

export type PlaylistDoc = z.infer<typeof PlaylistDocSchema>
export type VideoDoc = z.infer<typeof VideoDocSchema>
export type PlaylistDetail = z.infer<typeof PlaylistDetailResponseSchema>
export type VideoDetail = z.infer<typeof VideoDetailResponseSchema>

export type VideoItem = z.infer<typeof VideoDocSchema>
export type PlaylistItem = z.infer<typeof PlaylistDetailResponseSchema>

export type VideoSearchQuery = z.infer<typeof VideoSearchQuerySchema>
export type VideoSearchResponse = z.infer<typeof VideoSearchResponseSchema>
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

export type VideoAdminSyncRequest = z.infer<typeof VideoAdminSyncRequestSchema>
export type VideoAdminSyncResponse = z.infer<
	typeof VideoAdminSyncResponseSchema
>
export type VideoAdminSyncQueuedResponse = z.infer<
	typeof VideoAdminSyncQueuedResponseSchema
>
export type PlaylistVideosQuery = z.infer<typeof PlaylistVideosQuerySchema>
export type PlaylistVideosResponse = z.infer<
	typeof PlaylistVideosResponseSchema
>
export type VideoIdsQuery = z.infer<typeof VideoIdsQuerySchema>
export type VideoIdsResponse = z.infer<typeof VideoIdsResponseSchema>
