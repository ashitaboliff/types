import * as schema from '@/modules/band/schema'
import { UserIdParam } from '@/modules/user/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import {
	createApiRoute,
	createAuthenticatedRoute,
	registerFeatureTag,
} from '@/shared/openapi'

export const BAND_TAG = registerFeatureTag({
	name: 'Bands',
	description: 'バンド情報とメンバー管理を扱うAPI。',
})

export const getMyBands = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'get',
	path: '/me',
	summary: '自身の所属バンド一覧',
	operationId: 'getMyBands',
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BandListSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.UNAUTHORIZED],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const getBandsByUser = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'get',
	path: '/user/{userId}',
	summary: 'ユーザー所属バンド一覧',
	operationId: 'getBandsByUser',
	request: {
		params: UserIdParam,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BandListSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.UNAUTHORIZED],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const createBand = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'post',
	path: '/',
	summary: 'バンド作成',
	operationId: 'createBand',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.BandCreateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.CREATED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CREATED],
			content: {
				'application/json': { schema: schema.BandCreateResponseSchema },
			},
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const getBandById = createApiRoute({
	tags: [BAND_TAG.name],
	method: 'get',
	path: '/{bandId}',
	summary: 'バンド詳細取得',
	operationId: 'getBandById',
	request: {
		params: schema.BandIdParam,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BandSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const updateBand = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'put',
	path: '/{bandId}',
	summary: 'バンド更新',
	operationId: 'updateBand',
	request: {
		params: schema.BandIdParam,
		body: {
			content: {
				'application/json': { schema: schema.BandUpdateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const deleteBand = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'delete',
	path: '/{bandId}',
	summary: 'バンド削除',
	operationId: 'deleteBand',
	request: {
		params: schema.BandIdParam,
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const addBandMember = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'post',
	path: '/{bandId}/members',
	summary: 'バンドメンバー追加',
	operationId: 'addBandMember',
	request: {
		params: schema.BandIdParam,
		body: {
			content: {
				'application/json': { schema: schema.BandMemberCreateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.CREATED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CREATED],
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const updateBandMember = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'put',
	path: '/members/{bandMemberId}',
	summary: 'バンドメンバー更新',
	operationId: 'updateBandMember',
	request: {
		params: schema.BandMemberIdParam,
		body: {
			content: {
				'application/json': { schema: schema.BandMemberUpdateSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const removeBandMember = createAuthenticatedRoute({
	tags: [BAND_TAG.name],
	method: 'delete',
	path: '/members/{bandMemberId}',
	summary: 'バンドメンバー削除',
	operationId: 'removeBandMember',
	request: {
		params: schema.BandMemberIdParam,
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.BandErrorResponseSchema },
			},
		},
	},
})

export const searchBandUsers = createApiRoute({
	tags: [BAND_TAG.name],
	method: 'get',
	path: '/search-users',
	summary: 'バンドメンバー候補検索',
	operationId: 'searchBandUsers',
	request: {
		query: schema.BandSearchQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.BandSearchResultSchema },
			},
		},
	},
})
