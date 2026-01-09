import { z } from "@hono/zod-openapi";

//#region src/modules/auth/schema.d.ts
declare const PadLockCreateSchema: z.ZodObject<{
  name: z.ZodString;
  password: z.ZodString;
}, z.core.$strip>;
declare const PadLockIdParam: z.ZodObject<{
  padLockId: z.ZodString;
}, z.core.$strip>;
declare const PadLockSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>;
declare const PadlockRequestSchema: z.ZodObject<{
  password: z.ZodString;
}, z.core.$strip>;
declare const PadlockResponseSchema: z.ZodObject<{
  status: z.ZodEnum<{
    ok: "ok";
    invalid: "invalid";
    locked: "locked";
  }>;
  minutesRemaining: z.ZodOptional<z.ZodNumber>;
  attemptsRemaining: z.ZodOptional<z.ZodNumber>;
  token: z.ZodOptional<z.ZodString>;
  expiresAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//#endregion
export { PadLockCreateSchema, PadLockIdParam, PadLockSchema, PadlockRequestSchema, PadlockResponseSchema };