import { SortOrderSchema } from "../../shared/schema/index.js";
import { buildUpdateUserRoleExample, buildUserDetailForAdminExample, buildUserErrorExample, buildUserExample, buildUserListForAdminResponseExample, buildUserProfileExample, buildUserProfilePayloadExample, buildUserQueryExample, buildUserSelectItemExample, buildUserSelectListExample } from "../examples/index.js";
import { z } from "zod";

//#region src/modules/user/schema/index.ts
const UserAccountRoleSchema = z.enum([
	"TOPADMIN",
	"ADMIN",
	"USER"
]);
const UserPartSchema = z.enum([
	"VOCAL",
	"BACKING_GUITAR",
	"LEAD_GUITAR",
	"BASS",
	"DRUMS",
	"KEYBOARD",
	"OTHER"
]);
const UserRoleSchema = z.enum(["GRADUATE", "STUDENT"]);
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
});
const ProfileUpsertRequestSchema = ProfileSchema.omit({
	id: true,
	userId: true,
	createdAt: true,
	updatedAt: true,
	isDeleted: true
});
const ProfileResponseSchema = ProfileSchema;
const UserSelectItemSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	image: z.string().nullable(),
	profile: z.object({
		name: z.string().nullable(),
		part: UserPartSchema.array().nullable()
	}).nullable()
});
const UserSelectResponseSchema = z.array(UserSelectItemSchema);
const UserListQuerySchema = z.object({
	sort: SortOrderSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(100).default(10)
});
const UserRoleUpdateRequestSchema = z.object({ role: UserAccountRoleSchema });
const AdminUserDetailSchema = z.object({
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
});
const AdminUserListResponseSchema = z.object({
	users: z.array(AdminUserDetailSchema),
	totalCount: z.number().int().nonnegative()
});
const UserErrorResponseSchema = z.object({ error: z.string() });
const userExamples = {
	user: buildUserExample(),
	profile: buildUserProfileExample(),
	profilePayload: buildUserProfilePayloadExample(),
	selectItem: buildUserSelectItemExample(),
	selectList: buildUserSelectListExample(),
	listQuery: buildUserQueryExample(),
	updateRole: buildUpdateUserRoleExample(),
	adminDetail: buildUserDetailForAdminExample(),
	adminList: buildUserListForAdminResponseExample(),
	error: buildUserErrorExample()
};

//#endregion
export { AdminUserDetailSchema, AdminUserListResponseSchema, ProfileResponseSchema, ProfileSchema, ProfileUpsertRequestSchema, UserAccountRoleSchema, UserErrorResponseSchema, UserListQuerySchema, UserPartSchema, UserRoleSchema, UserRoleUpdateRequestSchema, UserSchema, UserSelectItemSchema, UserSelectResponseSchema, userExamples };