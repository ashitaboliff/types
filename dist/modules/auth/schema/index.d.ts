import { z } from "zod";

//#region src/modules/auth/schema/index.d.ts
declare const PadlockCreateRequestSchema: z.ZodObject<{
  name: z.ZodString;
  password: z.ZodString;
}, z.core.$strip>;
declare const PadlockIdParamSchema: z.ZodObject<{
  padLockId: z.ZodString;
}, z.core.$strip>;
declare const PadlockSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>;
declare const PadlockVerifyRequestSchema: z.ZodObject<{
  password: z.ZodString;
}, z.core.$strip>;
declare const PadlockVerifyResponseSchema: z.ZodObject<{
  status: z.ZodEnum<{
    ok: "ok";
    locked: "locked";
    invalid: "invalid";
  }>;
  minutesRemaining: z.ZodOptional<z.ZodNumber>;
  attemptsRemaining: z.ZodOptional<z.ZodNumber>;
  token: z.ZodOptional<z.ZodString>;
  expiresAt: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
declare const padlockExamples: {
  createRequest: {
    name: string;
    password: string;
  };
  entity: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
  };
  verifyRequest: {
    password: string;
  };
  verifyResponse: {
    status: "ok";
    token: string;
    expiresAt: string;
  };
};
//#endregion
export { PadlockCreateRequestSchema, PadlockIdParamSchema, PadlockSchema, PadlockVerifyRequestSchema, PadlockVerifyResponseSchema, padlockExamples };