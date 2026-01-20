import { PadlockCreateRequestSchema, PadlockSchema, PadlockVerifyRequestSchema, PadlockVerifyResponseSchema } from "../schema/index.js";
import { z } from "zod";

//#region src/modules/auth/types/index.d.ts
type Padlock = z.infer<typeof PadlockSchema>;
type PadlockCreateRequest = z.infer<typeof PadlockCreateRequestSchema>;
type PadlockVerifyRequest = z.infer<typeof PadlockVerifyRequestSchema>;
type PadlockVerifyResponse = z.infer<typeof PadlockVerifyResponseSchema>;
//#endregion
export { Padlock, PadlockCreateRequest, PadlockVerifyRequest, PadlockVerifyResponse };