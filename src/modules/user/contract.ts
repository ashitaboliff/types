import * as schema from '@/modules/user/schema'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'
import {
	createApiRoute,
	createAuthenticatedRoute,
	registerFeatureTag,
} from '@/shared/openapi'

export const USER_TAG = registerFeatureTag({
	name: 'Users',
	description: 'ユーザーの表示用データとプロフィールを扱うAPI。',
})

export const GetUserSelect = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'get',
	path: '/select',
	summary: 'セレクト用ユーザー一覧',
	operationId: 'getUserSelect',
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.UserSelectListSchema },
			},
		},
	},
})

export const GetUserUserIdProfile = createApiRoute({
	tags: [USER_TAG.name],
	method: 'get',
	path: '/{userId}/profile',
	summary: 'ユーザープロフィール取得',
	operationId: 'getUserUserIdProfile',
	request: {
		params: schema.UserIdParam,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.ProfileResponseSchema },
			},
		},
		[HTTP_STATUS.NOT_FOUND]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NOT_FOUND],
			content: {
				'application/json': { schema: schema.UserErrorResponseSchema },
			},
		},
	},
})

export const PostUserUserIdProfile = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'post',
	path: '/{userId}/profile',
	summary: 'ユーザープロフィール作成',
	operationId: 'postUserUserIdProfile',
	request: {
		params: schema.UserIdParam,
		body: {
			content: {
				'application/json': { schema: schema.ProfilePayloadSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.CREATED]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.CREATED],
		},
		[HTTP_STATUS.BAD_REQUEST]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.BAD_REQUEST],
			content: {
				'application/json': { schema: schema.UserErrorResponseSchema },
			},
		},
	},
})

export const PutUserUserIdProfile = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'put',
	path: '/{userId}/profile',
	summary: 'ユーザープロフィール更新',
	operationId: 'putUserUserIdProfile',
	request: {
		params: schema.UserIdParam,
		body: {
			content: {
				'application/json': { schema: schema.ProfilePayloadSchema },
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
				'application/json': { schema: schema.UserErrorResponseSchema },
			},
		},
	},
})

export const GetUserUserIdForAdmin = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'get',
	path: '/admin',
	summary: 'ユーザー一覧（管理者）',
	operationId: 'getUserUserIdForAdmin',
	request: {
		query: schema.UserQuerySchema,
	},
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.UserListForAdminResponseSchema },
			},
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.UserErrorResponseSchema },
			},
		},
	},
})

export const DeleteUserUserId = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'delete',
	path: '/{userId}',
	summary: 'ユーザー削除（管理者）',
	operationId: 'deleteUserUserId',
	request: {
		params: schema.UserIdParam,
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.UserErrorResponseSchema },
			},
		},
	},
})

export const PutUserUserIdRole = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'put',
	path: '/{userId}/role',
	summary: 'ユーザー権限更新',
	operationId: 'putUserUserIdRole',
	request: {
		params: schema.UserIdParam,
		body: {
			content: {
				'application/json': { schema: schema.UpdateUserRoleSchema },
			},
		},
	},
	responses: {
		[HTTP_STATUS.NO_CONTENT]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.NO_CONTENT],
		},
		[HTTP_STATUS.FORBIDDEN]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.FORBIDDEN],
			content: {
				'application/json': { schema: schema.UserErrorResponseSchema },
			},
		},
	},
})
