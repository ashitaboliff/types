import { z } from "zod";

//#region src/modules/shared/schema/index.d.ts
declare const SortOrderSchema: z.ZodEnum<{
  new: "new";
  old: "old";
}>;
declare const UserIdParamSchema: z.ZodObject<{
  userId: z.ZodString;
}, z.core.$strip>;
//#endregion
export { SortOrderSchema, UserIdParamSchema };