import { z } from '@hono/zod-openapi'
import * as schema from '@/modules/auth/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import {
	createApiRoute,
	createAuthenticatedRoute,
	DEFAULT_UNAUTHORIZED_RESPONSE,
	ErrorResponseSchema,
	registerFeatureTag,
} from '@/shared/openapi'

export const AUTH_TAG = registerFeatureTag({
	name: 'Auth',
	description: 'LINEログインによるセッション管理と部室鍵認証を提供します。',
})

export const GetAuthAdminPadLocks = createAuthenticatedRoute({
	tags: [AUTH_TAG.name],
	method: 'get',
	path: '/admin/padlocks',
	summary: '部室鍵一覧取得',
	operationId: 'listPadLocks',
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: z.array(schema.PadLockSchema) },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: ErrorResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: DEFAULT_UNAUTHORIZED_RESPONSE,
	},
})

export const PostAuthAdminPadLocks = createAuthenticatedRoute({
	tags: [AUTH_TAG.name],
	method: 'post',
	path: '/admin/padlocks',
	summary: '部室鍵作成',
	operationId: 'createPadLock',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.PadLockCreateSchema },
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
				'application/json': { schema: ErrorResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: DEFAULT_UNAUTHORIZED_RESPONSE,
	},
})

export const DeleteAuthAdminPadLocksPadLockId = createAuthenticatedRoute({
	tags: [AUTH_TAG.name],
	method: 'delete',
	path: '/admin/padlocks/{padLockId}',
	summary: '部室鍵削除',
	operationId: 'deletePadLock',
	request: {
		params: schema.PadLockIdParam,
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: ErrorResponseSchema },
			},
		},
		[HTTP_STATUS.UNAUTHORIZED]: DEFAULT_UNAUTHORIZED_RESPONSE,
	},
})

export const PostAuthPadlock = createApiRoute({
	tags: [AUTH_TAG.name],
	method: 'post',
	path: '/padlock',
	summary: '部室鍵認証のパスワード検証',
	description: '共有パスワードを検証し、残り試行回数やロック状態を返します。',
	operationId: 'verifyPadlockPassword',
	request: {
		body: {
			content: {
				'application/json': { schema: schema.PadlockRequestSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: 'パスワードが正しい場合のレスポンス',
			content: {
				'application/json': { schema: schema.PadlockResponseSchema },
			},
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: 'パスワードが間違っている場合のレスポンス',
			content: {
				'application/json': { schema: schema.PadlockResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: '試行回数超過でロックされた場合のレスポンス',
			content: {
				'application/json': { schema: schema.PadlockResponseSchema },
			},
		},
	},
})

// --- Auth.js 内部エンドポイント (OpenAPI 明示用) --------------------------
// 注意: 実処理は auth/routes.ts の authJsHandler() (app.use) が担当。
// ここではクライアント/ドキュメント向けにリダイレクトやセッション取得仕様を明示する。

// 汎用的な provider パラメータ schema
const ProviderPathParam = {
	name: 'provider',
	in: 'path' as const,
	required: true,
	schema: {
		type: 'string' as const,
		minLength: 1,
		example: 'line',
		description: 'Auth プロバイダ識別子',
	},
}

// 302 のみを返すリダイレクト系共通レスポンス
const Redirect302Response = {
	description: '外部認可/次ステップへのリダイレクト (Location ヘッダ参照)',
} as const

export const GetAuthSignIn = createApiRoute({
	tags: [AUTH_TAG.name],
	method: 'get',
	path: '/signin',
	summary: 'サインイン開始 (プロバイダ選択または即リダイレクト)',
	operationId: 'authSignInRoot',
	responses: {
		302: Redirect302Response,
	},
})

export const GetAuthSignInProvider = createApiRoute({
	tags: [AUTH_TAG.name],
	method: 'get',
	path: '/signin/{provider}',
	summary: '指定プロバイダでのサインイン開始',
	operationId: 'authSignInProvider',
	parameters: [ProviderPathParam],
	responses: {
		302: Redirect302Response,
		[HTTP_STATUS.BAD_REQUEST]: {
			description: '無効なプロバイダ指定等',
		},
	},
})

export const GetAuthCallbackProvider = createApiRoute({
	tags: [AUTH_TAG.name],
	method: 'get',
	path: '/callback/{provider}',
	summary: 'OAuth コールバック (Auth.js)',
	description:
		'外部プロバイダから戻り JWT セッション Cookie を設定後、アプリのページへリダイレクトします。',
	operationId: 'authCallback',
	parameters: [ProviderPathParam],
	responses: {
		302: Redirect302Response,
		[HTTP_STATUS.BAD_REQUEST]: { description: 'コード/ステート不正 等' },
	},
})

export const GetAuthSession = createApiRoute({
	tags: [AUTH_TAG.name],
	method: 'get',
	path: '/session',
	summary: '現在のセッション情報 (Auth.js 生データ)',
	operationId: 'authSession',
	responses: {
		[HTTP_STATUS.OK]: {
			description: 'セッション JSON (未ログインの場合は null など)',
			content: {
				'application/json': {
					schema: z
						.object({
							user: z.any().nullable().optional(),
							expires: z.string().optional(),
							// error 等 Auth.js 特有フィールドを包括的に any で許容
						})
						.openapi({ title: 'AuthJsSessionRaw' }),
				},
			},
		},
	},
})

export const PostAuthSignOut = createApiRoute({
	tags: [AUTH_TAG.name],
	method: 'post',
	path: '/signout',
	summary: 'サインアウト (セッション無効化後リダイレクト)',
	operationId: 'authSignOut',
	responses: {
		302: Redirect302Response,
	},
})

export const GetAuthError = createApiRoute({
	tags: [AUTH_TAG.name],
	method: 'get',
	path: '/error',
	summary: 'サインイン/コールバック時のエラーページ',
	operationId: 'authErrorPage',
	responses: {
		[HTTP_STATUS.OK]: {
			description: 'エラーページ (HTML) または JSON',
			content: {
				'text/html': {
					schema: z.string().openapi({ example: '<html>...</html>' }),
				},
				'application/json': {
					schema: z
						.object({ error: z.string(), message: z.string().optional() })
						.openapi('AuthErrorJson'),
				},
			},
		},
	},
})
