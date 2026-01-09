import { ProfilePayloadSchema, ProfileResponseSchema, ProfileSchema, UpdateUserRoleSchema, UserAccountRoleSchema, UserDetailForAdminSchema, UserPartSchema, UserQuerySchema, UserRoleSchema, UserSchema, UserSelectItemSchema, UserSelectListSchema } from "./schema.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/user/types.d.ts
type UserAccountRole = z.infer<typeof UserAccountRoleSchema>;
type UserRole = z.infer<typeof UserRoleSchema>;
type UserPart = z.infer<typeof UserPartSchema>;
type UserModel = z.infer<typeof UserSchema>;
type ProfileModel = z.infer<typeof ProfileSchema>;
type UserWithProfile = {
  user: UserModel;
  profile: ProfileModel | null;
};
type UserForSelect = z.infer<typeof UserSelectItemSchema>;
type UserSelectList = z.infer<typeof UserSelectListSchema>;
type UserForAdmin = z.infer<typeof UserDetailForAdminSchema>;
type UserListForAdmin = {
  users: UserForAdmin[];
  totalCount: number;
};
type ProfileInput = z.infer<typeof ProfilePayloadSchema>;
type ProfileResponse = z.infer<typeof ProfileResponseSchema>;
type UserQuery = z.infer<typeof UserQuerySchema>;
type UpdateUserRole = z.infer<typeof UpdateUserRoleSchema>;
//#endregion
export { ProfileInput, ProfileModel, ProfileResponse, UpdateUserRole, UserAccountRole, UserForAdmin, UserForSelect, UserListForAdmin, UserModel, UserPart, UserQuery, UserRole, UserSelectList, UserWithProfile };