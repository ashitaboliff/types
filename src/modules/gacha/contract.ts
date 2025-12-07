import * as schema from '@/modules/gacha/schema'
import { UserIdParam } from '@/modules/user/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import {
	createAuthenticatedRoute,
	DEFAULT_UNAUTHORIZED_RESPONSE,
	registerFeatureTag,
} from '@/shared/openapi'

export const GACHA_TAG = registerFeatureTag({
	name: 'Gacha',
	description: 'ガチャ履歴の参照と記録を扱うAPI。',
})

export const listUserGacha = createAuthenticatedRoute({
	tags: [GACHA_TAG.name],
	method: 'get',
	path: '/users/{userId}',
	summary: 'ユーザーのガチャ履歴一覧',
	operationId: 'listUserGacha',
	request: {
		params: UserIdParam,
		query: schema.GachaQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.GachaListResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: DEFAULT_UNAUTHORIZED_RESPONSE,
	},
})

export const getGachaBySrc = createAuthenticatedRoute({
	tags: [GACHA_TAG.name],
	method: 'get',
	path: '/users/{userId}/by-src',
	summary: 'ユーザーの指定ソース最新ガチャ取得',
	operationId: 'getGachaBySrc',
	request: {
		params: UserIdParam,
		query: schema.GachaSrcQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.GachaBySrcResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.UNAUTHORIZED],
			content: {
				'application/json': { schema: schema.GachaErrorResponseSchema },
			},
		},
	},
})

export const createUserGacha = createAuthenticatedRoute({
	tags: [GACHA_TAG.name],
	method: 'post',
	path: '/users/{userId}',
	summary: 'ユーザーのガチャ記録作成',
	operationId: 'createUserGacha',
	request: {
		params: UserIdParam,
		body: {
			content: {
				'application/json': { schema: schema.GachaCreateWithOverrideSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.CREATED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CREATED],
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.GachaErrorResponseSchema },
			},
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.GachaErrorResponseSchema },
			},
		},
	},
})

export const createGachaImageProxyUrls = createAuthenticatedRoute({
	tags: [GACHA_TAG.name],
	method: 'post',
	path: '/images/proxy',
	summary: 'ガチャ画像用プロキシURLの生成',
	operationId: 'createGachaImageProxyUrls',
	request: {
		body: {
			content: {
				'application/json': {
					schema: schema.GachaImageProxyRequestSchema,
				},
			},
		},
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': {
					schema: schema.GachaImageProxyResponseSchema,
				},
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: DEFAULT_UNAUTHORIZED_RESPONSE,
	},
})
