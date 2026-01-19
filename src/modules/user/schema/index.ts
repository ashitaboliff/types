import { z } from 'zod'
import { SortOrderSchema } from '@/modules/shared/schema'
import * as example from '@/modules/user/examples'

export const UserAccountRoleSchema = z.enum(['TOPADMIN', 'ADMIN', 'USER'])

export const UserPartSchema = z.enum([
	'VOCAL',
	'BACKING_GUITAR',
	'LEAD_GUITAR',
	'BASS',
	'DRUMS',
	'KEYBOARD',
	'OTHER',
])

export const UserRoleSchema = z.enum(['GRADUATE', 'STUDENT'])

export const UserSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	userId: z.string().optional(),
	password: z.string().optional(),
	email: z.email().optional(),
	emailVerified: z.boolean().optional(),
	image: z.string().nullable(),
	role: UserAccountRoleSchema,
	createdAt: z.string(),
	updatedAt: z.string(),
})

export const ProfileSchema = z.object({
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

export const ProfileUpsertRequestSchema = ProfileSchema.omit({
	id: true,
	userId: true,
	createdAt: true,
	updatedAt: true,
	isDeleted: true,
})

export const ProfileResponseSchema = ProfileSchema

export const UserSelectItemSchema = z.object({
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

export const UserSelectResponseSchema = z.array(UserSelectItemSchema)

export const UserListQuerySchema = z.object({
	sort: SortOrderSchema.default('new'),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(100).default(10),
})

export const UserRoleUpdateRequestSchema = z.object({
	role: UserAccountRoleSchema,
})

export const AdminUserDetailSchema = z.object({
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

export const AdminUserListResponseSchema = z.object({
	users: z.array(AdminUserDetailSchema),
	totalCount: z.number().int().nonnegative(),
})

export const UserErrorResponseSchema = z.object({ error: z.string() })

export const userExamples = {
	user: example.buildUserExample(),
	profile: example.buildUserProfileExample(),
	profilePayload: example.buildUserProfilePayloadExample(),
	selectItem: example.buildUserSelectItemExample(),
	selectList: example.buildUserSelectListExample(),
	listQuery: example.buildUserQueryExample(),
	updateRole: example.buildUpdateUserRoleExample(),
	adminDetail: example.buildUserDetailForAdminExample(),
	adminList: example.buildUserListForAdminResponseExample(),
	error: example.buildUserErrorExample(),
}
