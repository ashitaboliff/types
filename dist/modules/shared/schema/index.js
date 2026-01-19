import { z } from "zod";

//#region src/modules/shared/schema/index.ts
const SortOrderSchema = z.enum(["new", "old"]);
const UserIdParamSchema = z.object({ userId: z.string().min(1) });

//#endregion
export { SortOrderSchema, UserIdParamSchema };