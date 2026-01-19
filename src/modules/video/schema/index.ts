import { z } from 'zod'
import { SortOrderSchema } from '@/modules/shared/schema'
import * as examples from '@/modules/video/examples'

export const PlaylistIdParamSchema = z.object({ playlistId: z.string().min(1) })
export const VideoIdParamSchema = z.object({ videoId: z.string().min(1) })

export const VideoSearchTargetSchema = z.enum(['live', 'band'])

export const VideoSearchQuerySchema = z.object({
	liveOrBand: VideoSearchTargetSchema,
	bandName: z.string().optional(),
	liveName: z.string().optional(),
	sort: SortOrderSchema.default('new'),
	page: z.coerce.number().int().positive().default(1),
	videoPerPage: z.coerce.number().int().min(1).max(200).default(10),
})

export const PlaylistDocSchema = z.object({
	type: z.literal('playlist'),
	playlistId: z.string(),
	title: z.string(),
	link: z.string(),
	liveDate: z.string(),
	videoId: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
})

export const VideoDocSchema = z.object({
	type: z.literal('video'),
	videoId: z.string(),
	title: z.string(),
	link: z.string(),
	liveDate: z.string(),
	playlistId: z.string(),
	playlistTitle: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
})

export const PlaylistDetailResponseSchema = PlaylistDocSchema.extend({
	videos: z.array(VideoDocSchema),
})

export const VideoDetailResponseSchema = VideoDocSchema

export const VideoAdminSyncRequestSchema = z
	.object({
		playlistIds: z.array(z.string().min(1)).max(100).optional(),
	})
	.default({})

export const VideoAdminSyncResponseSchema = z.object({
	ok: z.literal(true),
	playlists: z.number().int().nonnegative(),
	videos: z.number().int().nonnegative(),
})

export const VideoAdminSyncQueuedResponseSchema = z.object({
	status: z.literal('queued'),
	message: z.string(),
})

export const VideoSearchResponseSchema = z.object({
	items: z.array(
		z.discriminatedUnion('type', [PlaylistDocSchema, VideoDocSchema]),
	),
	total: z.number().int().nonnegative(),
})

export const PlaylistVideosQuerySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	videoPerPage: z.coerce.number().int().min(1).max(50).default(10),
})

export const PlaylistVideosResponseSchema = z.object({
	items: z.array(VideoDocSchema),
	total: z.number().int().nonnegative(),
})

export const VideoIdsQuerySchema = z.object({
	type: z.enum(['video', 'playlist']).optional(),
})

export const VideoIdsResponseSchema = z.array(z.string())

export const videoExamples = {
	searchQuery: examples.buildSearchQueryExample(),
	playlistDoc: examples.buildPlaylistDocExample(),
	videoDoc: examples.buildVideoDocExample(),
	playlistDetail: examples.buildPlaylistDetailExample(),
	videoDetail: examples.buildVideoDetailExample(),
	adminSyncRequest: examples.buildAdminSyncPayloadExample(),
	adminSyncResponse: examples.buildAdminSyncResponseExample(),
	adminSyncQueued: examples.buildAdminSyncQueuedExample(),
	searchResponse: examples.buildSearchResponseExample(),
	playlistVideosResponse: examples.buildPlaylistVideosResponseExample(),
	videoIdsResponse: examples.buildVideoIdsResponseExample(),
}
