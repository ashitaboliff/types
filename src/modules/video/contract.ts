import * as schema from '@/modules/video/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import {
	createApiRoute,
	createAuthenticatedRoute,
	ErrorResponseSchema,
	registerFeatureTag,
} from '@/shared/openapi'

export const VIDEO_TAG = registerFeatureTag({
	name: 'Videos',
	description: 'YouTube動画やプレイリストに関するAPI',
})

export const GetVideoSearch = createApiRoute({
	tags: [VIDEO_TAG.name],
	method: 'get',
	path: '/search',
	summary: '動画・プレイリスト検索',
	operationId: 'getVideoSearch',
	request: {
		query: schema.YoutubeSearchQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.SearchResponseSchema },
			},
		},
	},
})

export const GetVideoIds = createApiRoute({
	tags: [VIDEO_TAG.name],
	method: 'get',
	path: '/ids',
	summary: '動画またはプレイリストID一覧',
	operationId: 'getVideoIds',
	request: {
		query: schema.VideoIdsQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.VideoIdsResponseSchema },
			},
		},
	},
})

export const GetVideoVideosVideoId = createApiRoute({
	tags: [VIDEO_TAG.name],
	method: 'get',
	path: '/videos/{videoId}',
	summary: '動画詳細取得',
	operationId: 'getVideoVideosVideoId',
	request: {
		params: schema.VideoIdParam,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.VideoDetailSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: ErrorResponseSchema },
			},
		},
	},
})

export const GetVideoPlaylistsPlaylistId = createApiRoute({
	tags: [VIDEO_TAG.name],
	method: 'get',
	path: '/playlists/{playlistId}',
	summary: 'プレイリスト詳細取得',
	operationId: 'getVideoPlaylistsPlaylistId',
	request: {
		params: schema.PlaylistIdParam,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.PlaylistDetailSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: ErrorResponseSchema },
			},
		},
	},
})

// キチガイみたいなルート定義でごめん
export const GetVideoPlaylistsPlaylistIdVideos = createApiRoute({
	tags: [VIDEO_TAG.name],
	method: 'get',
	path: '/playlists/{playlistId}/videos',
	summary: 'プレイリスト内動画一覧',
	operationId: 'getVideoPlaylistsPlaylistIdVideos',
	request: {
		params: schema.PlaylistIdParam,
		query: schema.PlaylistVideosQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': {
					schema: schema.PlaylistVideosResponseSchema,
				},
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: ErrorResponseSchema },
			},
		},
	},
})

export const PostVideoWebhook = createAuthenticatedRoute({
	tags: [VIDEO_TAG.name],
	method: 'post',
	path: '/webhook',
	summary: 'YouTube動画・プレイリストの同期',
	operationId: 'postVideoWebhook',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.AdminSyncPayloadSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.ACCEPTED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.ACCEPTED],
			content: {
				'application/json': { schema: schema.AdminSyncQueuedResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.UNAUTHORIZED],
			content: {
				'application/json': { schema: ErrorResponseSchema },
			},
		},
	},
})
