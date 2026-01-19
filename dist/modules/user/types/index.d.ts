import { AdminUserDetailSchema, AdminUserListResponseSchema, ProfileResponseSchema, ProfileSchema, ProfileUpsertRequestSchema, UserAccountRoleSchema, UserListQuerySchema, UserPartSchema, UserRoleSchema, UserRoleUpdateRequestSchema, UserSchema, UserSelectItemSchema, UserSelectResponseSchema } from "../schema/index.js";
import { z } from "zod";

//#region src/modules/user/types/index.d.ts
type UserAccountRole = z.infer<typeof UserAccountRoleSchema>;
type UserRole = z.infer<typeof UserRoleSchema>;
type UserPart = z.infer<typeof UserPartSchema>;
type UserModel = z.infer<typeof UserSchema>;
type ProfileModel = z.infer<typeof ProfileSchema>;
type UserWithProfile = {
  user: UserModel;
  profile: ProfileModel | null;
};
type UserSelectItem = z.infer<typeof UserSelectItemSchema>;
type UserSelectResponse = z.infer<typeof UserSelectResponseSchema>;
type AdminUserDetail = z.infer<typeof AdminUserDetailSchema>;
type AdminUserListResponse = z.infer<typeof AdminUserListResponseSchema>;
type ProfileUpsertRequest = z.infer<typeof ProfileUpsertRequestSchema>;
type ProfileResponse = z.infer<typeof ProfileResponseSchema>;
type UserListQuery = z.infer<typeof UserListQuerySchema>;
type UserRoleUpdateRequest = z.infer<typeof UserRoleUpdateRequestSchema>;
//#endregion
export { AdminUserDetail, AdminUserListResponse, ProfileModel, ProfileResponse, ProfileUpsertRequest, UserAccountRole, UserListQuery, UserModel, UserPart, UserRole, UserRoleUpdateRequest, UserSelectItem, UserSelectResponse, UserWithProfile };