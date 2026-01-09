import { z } from "@hono/zod-openapi";

//#region src/modules/shared/schema.d.ts
declare const SortSchema: z.ZodEnum<{
  new: "new";
  old: "old";
}>;
declare const UserIdParam: z.ZodObject<{
  userId: z.ZodString;
}, z.core.$strip>;
//#endregion
export { SortSchema, UserIdParam };