import type { z } from 'zod'
import type {
	AdminUserDetailSchema,
	AdminUserListResponseSchema,
	ProfileResponseSchema,
	ProfileSchema,
	ProfileUpsertRequestSchema,
	UserAccountRoleSchema,
	UserListQuerySchema,
	UserPartSchema,
	UserRoleSchema,
	UserRoleUpdateRequestSchema,
	UserSchema,
	UserSelectItemSchema,
	UserSelectResponseSchema,
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

export type UserSelectItem = z.infer<typeof UserSelectItemSchema>
export type UserSelectResponse = z.infer<typeof UserSelectResponseSchema>

export type AdminUserDetail = z.infer<typeof AdminUserDetailSchema>
export type AdminUserListResponse = z.infer<typeof AdminUserListResponseSchema>

export type ProfileUpsertRequest = z.infer<typeof ProfileUpsertRequestSchema>
export type ProfileResponse = z.infer<typeof ProfileResponseSchema>

export type UserListQuery = z.infer<typeof UserListQuerySchema>
export type UserRoleUpdateRequest = z.infer<typeof UserRoleUpdateRequestSchema>
