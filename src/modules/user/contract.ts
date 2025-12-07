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

export const listUsersForSelect = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'get',
	path: '/select',
	summary: 'セレクト用ユーザー一覧',
	operationId: 'listUsersForSelect',
	responses: {
		[HTTP_STATUS.OK]: {
			description: HTTP_STATUS_MESSAGE[HTTP_STATUS.OK],
			content: {
				'application/json': { schema: schema.UserSelectListSchema },
			},
		},
	},
})

export const getUserProfile = createApiRoute({
	tags: [USER_TAG.name],
	method: 'get',
	path: '/{userId}/profile',
	summary: 'ユーザープロフィール取得',
	operationId: 'getUserProfile',
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

export const createUserProfile = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'post',
	path: '/{userId}/profile',
	summary: 'ユーザープロフィール作成',
	operationId: 'createUserProfile',
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

export const updateUserProfile = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'put',
	path: '/{userId}/profile',
	summary: 'ユーザープロフィール更新',
	operationId: 'updateUserProfile',
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

export const listUsersForAdmin = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'get',
	path: '/admin',
	summary: 'ユーザー一覧（管理者）',
	operationId: 'adminListUsers',
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

export const deleteUser = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'delete',
	path: '/{userId}',
	summary: 'ユーザー削除（管理者）',
	operationId: 'deleteUser',
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

export const updateUserRole = createAuthenticatedRoute({
	tags: [USER_TAG.name],
	method: 'put',
	path: '/{userId}/role',
	summary: 'ユーザー権限更新',
	operationId: 'updateUserRole',
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
