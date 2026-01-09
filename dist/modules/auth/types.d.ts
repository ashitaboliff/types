import { PadLockSchema } from "./schema.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/auth/types.d.ts
type PublicPadLock = z.infer<typeof PadLockSchema>;
//#endregion
export { PublicPadLock };