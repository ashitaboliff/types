import { SortSchema } from "../shared/schema.js";
import { buildUpdateUserRoleExample, buildUserDetailForAdminExample, buildUserErrorExample, buildUserExample, buildUserListForAdminResponseExample, buildUserProfileExample, buildUserProfilePayloadExample, buildUserQueryExample, buildUserSelectItemExample, buildUserSelectListExample } from "./examples.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/user/schema.ts
const UserAccountRoleSchema = z.enum([
	"TOPADMIN",
	"ADMIN",
	"USER"
]).openapi({
	title: "UserAccountRole",
	example: "USER"
});
const UserPartSchema = z.enum([
	"VOCAL",
	"BACKING_GUITAR",
	"LEAD_GUITAR",
	"BASS",
	"DRUMS",
	"KEYBOARD",
	"OTHER"
]).openapi({
	title: "UserPart",
	example: "VOCAL"
});
const UserRoleSchema = z.enum(["GRADUATE", "STUDENT"]).openapi({
	title: "UserRole",
	example: "STUDENT"
});
const UserSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	userId: z.string().optional(),
	password: z.string().optional(),
	email: z.email().optional(),
	emailVerified: z.boolean().optional(),
	image: z.string().nullable(),
	role: UserAccountRoleSchema,
	createdAt: z.string(),
	updatedAt: z.string()
}).openapi({
	title: "User",
	example: buildUserExample()
});
const ProfileSchema = z.object({
	id: z.string(),
	userId: z.string(),
	name: z.string().min(1).max(255).nullable(),
	studentId: z.string().max(255).nullable(),
	expected: z.string().max(255).nullable(),
	role: UserRoleSchema,
	part: UserPartSchema.array().nullable(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean()
}).openapi({
	title: "UserProfile",
	example: buildUserProfileExample()
});
const ProfilePayloadSchema = ProfileSchema.omit({
	id: true,
	userId: true,
	createdAt: true,
	updatedAt: true,
	isDeleted: true
}).openapi({
	title: "UserProfilePayload",
	description: "ユーザープロフィール作成・更新時の入力",
	example: buildUserProfilePayloadExample()
});
const ProfileResponseSchema = ProfileSchema.openapi({
	title: "UserProfileResponse",
	example: buildUserProfileExample()
});
const UserSelectItemSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	image: z.string().nullable(),
	profile: z.object({
		name: z.string().nullable(),
		part: UserPartSchema.array().nullable()
	}).nullable()
}).openapi({
	title: "UserSelectItem",
	example: buildUserSelectItemExample()
});
const UserSelectListSchema = z.array(UserSelectItemSchema).openapi({
	title: "UserSelectList",
	description: "セレクト用のユーザー一覧レスポンス",
	example: buildUserSelectListExample()
});
const UserQuerySchema = z.object({
	sort: SortSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(100).default(10)
}).openapi({
	title: "UserQuery",
	example: buildUserQueryExample()
});
const UpdateUserRoleSchema = z.object({ role: UserAccountRoleSchema }).openapi({
	title: "UpdateUserRole",
	example: buildUpdateUserRoleExample()
});
const UserDetailForAdminSchema = z.object({
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
	part: UserPartSchema.array().nullable().optional()
}).openapi({
	title: "UserDetailForAdmin",
	example: buildUserDetailForAdminExample()
});
const UserListForAdminResponseSchema = z.object({
	users: z.array(UserDetailForAdminSchema),
	totalCount: z.number().int().nonnegative()
}).openapi({
	title: "UserListForAdminResponse",
	example: buildUserListForAdminResponseExample()
});
const UserErrorResponseSchema = z.object({ error: z.string() }).openapi({
	title: "UserError",
	example: buildUserErrorExample()
});

//#endregion
export { ProfilePayloadSchema, ProfileResponseSchema, ProfileSchema, UpdateUserRoleSchema, UserAccountRoleSchema, UserDetailForAdminSchema, UserErrorResponseSchema, UserListForAdminResponseSchema, UserPartSchema, UserQuerySchema, UserRoleSchema, UserSchema, UserSelectItemSchema, UserSelectListSchema };