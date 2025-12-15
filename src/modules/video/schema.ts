import { z } from '@hono/zod-openapi'
import { SortSchema } from '@/modules/shared/schema'
import * as examples from '@/modules/video/examples'

const PlaylistIdParamSchema = z.object({ playlistId: z.string().min(1) })
const VideoIdParamSchema = z.object({ videoId: z.string().min(1) })

export const PlaylistIdParam = PlaylistIdParamSchema.openapi({
	param: {
		name: 'playlistId',
		in: 'path',
		description: 'プレイリストID',
		required: true,
	},
})

export const VideoIdParam = VideoIdParamSchema.openapi({
	param: {
		name: 'videoId',
		in: 'path',
		description: '動画ID',
		required: true,
	},
})

export const liveOrBandSchema = z.enum(['live', 'band'])

export const YoutubeSearchQuerySchema = z
	.object({
		liveOrBand: liveOrBandSchema.openapi({
			description: '検索対象。"live" はプレイリスト、"band" は動画を検索。',
		}),
		bandName: z.string().optional().openapi({
			description: '動画タイトル（バンド名や曲名など）部分一致フィルタ。',
		}),
		liveName: z.string().optional().openapi({
			description: 'プレイリストタイトル部分一致フィルタ。',
		}),
		sort: SortSchema.default('new').openapi({
			description: 'liveDate の昇順/降順。',
		}),
		page: z.coerce.number().int().positive().default(1).openapi({
			description: '1 始まりのページ番号。',
		}),
		videoPerPage: z.coerce
			.number()
			.int()
			.min(1)
			.max(200)
			.default(10)
			.openapi({ description: '1 ページあたり件数。' }),
	})
	.openapi({
		title: 'YoutubeSearchQuery',
		example: examples.buildSearchQueryExample(),
	})

export const PlaylistDocSchema = z
	.object({
		type: z.literal('playlist'),
		playlistId: z.string(),
		title: z.string(),
		link: z.string(),
		liveDate: z.string(),
		videoId: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
	})
	.openapi({
		title: 'PlaylistDoc',
		example: examples.buildPlaylistDocExample(),
	})

export const VideoDocSchema = z
	.object({
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
	.openapi({ title: 'VideoDoc', example: examples.buildVideoDocExample() })

export const PlaylistDetailSchema = PlaylistDocSchema.extend({
	videos: z.array(VideoDocSchema),
}).openapi({
	title: 'PlaylistDetail',
	example: examples.buildPlaylistDetailExample(),
})

export const VideoDetailSchema = VideoDocSchema.openapi({
	title: 'VideoDetail',
	example: examples.buildVideoDetailExample(),
})

export const AdminSyncPayloadSchema = z
	.object({
		playlistIds: z.array(z.string().min(1)).max(100).optional(),
	})
	.default({})
	.openapi({
		title: 'AdminSyncPayload',
		example: examples.buildAdminSyncPayloadExample(),
	})

export const AdminSyncResponseSchema = z
	.object({
		ok: z.literal(true),
		playlists: z.number().int().nonnegative(),
		videos: z.number().int().nonnegative(),
	})
	.openapi({
		title: 'AdminSyncResponse',
		example: examples.buildAdminSyncResponseExample(),
	})

export const AdminSyncQueuedResponseSchema = z
	.object({
		status: z.literal('queued'),
		message: z.string(),
	})
	.openapi({
		title: 'AdminSyncQueuedResponse',
		example: examples.buildAdminSyncQueuedExample(),
	})

export const SearchResponseSchema = z
	.object({
		items: z.array(
			z.discriminatedUnion('type', [PlaylistDocSchema, VideoDocSchema]),
		),
		total: z.number().int().nonnegative(),
	})
	.openapi({
		title: 'VideoSearchResponse',
		example: examples.buildSearchResponseExample(),
	})

export const PlaylistVideosQuerySchema = z
	.object({
		page: z.coerce.number().int().positive().default(1),
		videoPerPage: z.coerce.number().int().min(1).max(50).default(10),
	})
	.openapi({ title: 'PlaylistVideosQuery' })

export const PlaylistVideosResponseSchema = z
	.object({
		items: z.array(VideoDocSchema),
		total: z.number().int().nonnegative(),
	})
	.openapi({
		title: 'PlaylistVideosResponse',
		example: examples.buildPlaylistVideosResponseExample(),
	})

export const VideoIdsQuerySchema = z
	.object({
		type: z.enum(['video', 'playlist']).optional().openapi({
			description:
				'取得対象。"video" で動画ID、"playlist" でプレイリストID。省略時は "video"。',
		}),
	})
	.openapi({ title: 'VideoIdsQuery' })

export const VideoIdsResponseSchema = z.array(z.string()).openapi({
	title: 'VideoIdsResponse',
	example: examples.buildVideoIdsResponseExample(),
})
