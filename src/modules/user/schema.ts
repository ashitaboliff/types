import { z } from '@hono/zod-openapi'
import { email } from 'zod'
import * as example from '@/modules/user/examples'

const UserIdParamSchema = z.object({ userId: z.string().min(1) })

export const UserAccountRoleSchema = z
	.enum(['TOPADMIN', 'ADMIN', 'USER'])
	.openapi({
		title: 'UserAccountRole',
		example: 'USER',
	})

export const UserPartSchema = z
	.enum([
		'VOCAL',
		'BACKING_GUITAR',
		'LEAD_GUITAR',
		'BASS',
		'DRUMS',
		'KEYBOARD',
		'OTHER',
	])
	.openapi({
		title: 'UserPart',
		example: 'VOCAL',
	})

export const UserRoleSchema = z.enum(['GRADUATE', 'STUDENT']).openapi({
	title: 'UserRole',
	example: 'STUDENT',
})

export const UserIdParam = UserIdParamSchema.openapi({
	param: {
		name: 'userId',
		in: 'path',
		description: '対象となるユーザーID',
		required: true,
	},
	example: 'user_1234567890',
})

export const UserSchema = z
	.object({
		id: z.string(),
		name: z.string().nullable(),
		userId: z.string().optional(),
		password: z.string().optional(),
		email: email().optional(),
		emailVerified: z.boolean().optional(),
		image: z.string().nullable(),
		role: UserAccountRoleSchema.nullable(),
		createdAt: z.string(),
		updatedAt: z.string(),
	})
	.openapi({
		title: 'User',
		example: example.buildUserExample(),
	})

export const ProfileSchema = z
	.object({
		id: z.string(),
		userId: z.string(),
		name: z.string().min(1).max(255).nullable(),
		studentId: z.string().max(255).nullable(),
		expected: z.string().max(255).nullable(),
		role: UserRoleSchema,
		part: UserPartSchema.array().nullable(),
		createdAt: z.string(),
		updatedAt: z.string(),
		isDeleted: z.boolean(),
	})
	.openapi({
		title: 'UserProfile',
		example: example.buildUserProfileExample(),
	})

export const ProfilePayloadSchema = ProfileSchema.omit({
	id: true,
	userId: true,
	createdAt: true,
	updatedAt: true,
	isDeleted: true,
}).openapi({
	title: 'UserProfilePayload',
	description: 'ユーザープロフィール作成・更新時の入力',
	example: example.buildUserProfilePayloadExample(),
})

export const ProfileResponseSchema = ProfileSchema.openapi({
	title: 'UserProfileResponse',
	example: example.buildUserProfileExample(),
})

export const UserSelectItemSchema = z
	.object({
		id: z.string(),
		name: z.string().nullable(),
		image: z.string().nullable(),
		profile: z
			.object({
				name: z.string().nullable(),
				part: UserPartSchema.array().nullable(),
			})
			.nullable(),
	})
	.openapi({
		title: 'UserSelectItem',
		example: example.buildUserSelectItemExample(),
	})

export const UserSelectListSchema = z.array(UserSelectItemSchema).openapi({
	title: 'UserSelectList',
	description: 'セレクト用のユーザー一覧レスポンス',
	example: example.buildUserSelectListExample(),
})

export const UserQuerySchema = z
	.object({
		sort: z.enum(['new', 'old']).default('new'),
		page: z.coerce.number().int().positive().default(1),
		perPage: z.coerce.number().int().min(1).max(100).default(10),
	})
	.openapi({
		title: 'UserQuery',
		example: example.buildUserQueryExample(),
	})

export const UpdateUserRoleSchema = z
	.object({
		role: UserAccountRoleSchema,
	})
	.openapi({
		title: 'UpdateUserRole',
		example: example.buildUpdateUserRoleExample(),
	})

export const UserDetailForAdminSchema = z
	.object({
		id: z.string(),
		name: z.string().nullable(),
		fullName: z.string().nullable().optional(),
		studentId: z.string().nullable().optional(),
		expected: z.string().nullable().optional(),
		image: z.string().nullable(),
		createdAt: z.string(),
		updatedAt: z.string(),
		accountRole: UserAccountRoleSchema.nullable(),
		role: UserRoleSchema.nullable().optional(),
		part: UserPartSchema.array().nullable().optional(),
	})
	.openapi({
		title: 'UserDetailForAdmin',
		example: example.buildUserDetailForAdminExample(),
	})

export const UserListForAdminResponseSchema = z
	.object({
		users: z.array(UserDetailForAdminSchema),
		totalCount: z.number().int().nonnegative(),
	})
	.openapi({
		title: 'UserListForAdminResponse',
		example: example.buildUserListForAdminResponseExample(),
	})

export const UserErrorResponseSchema = z.object({ error: z.string() }).openapi({
	title: 'UserError',
	example: example.buildUserErrorExample(),
})
