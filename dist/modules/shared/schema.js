import { z } from "@hono/zod-openapi";

//#region src/modules/shared/schema.ts
const UserIdParamSchema = z.object({ userId: z.string().min(1) });
const SortSchema = z.enum(["new", "old"]);
const UserIdParam = UserIdParamSchema.openapi({
	param: {
		name: "userId",
		in: "path",
		description: "対象となるユーザーID",
		required: true
	},
	example: "be68668f-f3a0-a94c-1127-445c0fcca4b1"
});

//#endregion
export { SortSchema, UserIdParam };