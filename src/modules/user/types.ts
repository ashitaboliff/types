import type { z } from '@hono/zod-openapi'
import type {
	ProfilePayloadSchema,
	ProfileResponseSchema,
	ProfileSchema,
	UpdateUserRoleSchema,
	UserAccountRoleSchema,
	UserDetailForAdminSchema,
	UserPartSchema,
	UserQuerySchema,
	UserRoleSchema,
	UserSchema,
	UserSelectItemSchema,
	UserSelectListSchema,
} from '@/modules/user/schema'

export type UserAccountRole = z.infer<typeof UserAccountRoleSchema>
export type UserRole = z.infer<typeof UserRoleSchema>
export type UserPart = z.infer<typeof UserPartSchema>

export type UserModel = z.infer<typeof UserSchema>
export type ProfileModel = z.infer<typeof ProfileSchema>

export type UserWithProfile = {
	user: UserModel
	profile: ProfileModel | null
}

export type UserForSelect = z.infer<typeof UserSelectItemSchema>
export type UserSelectList = z.infer<typeof UserSelectListSchema>

export type UserForAdmin = z.infer<typeof UserDetailForAdminSchema>
export type UserListForAdmin = {
	users: UserForAdmin[]
	totalCount: number
}

export type ProfileInput = z.infer<typeof ProfilePayloadSchema>
export type ProfileResponse = z.infer<typeof ProfileResponseSchema>

export type UserQuery = z.infer<typeof UserQuerySchema>
export type UpdateUserRole = z.infer<typeof UpdateUserRoleSchema>
