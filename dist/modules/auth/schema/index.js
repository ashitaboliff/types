import { buildPadLockCreateExample, buildPadLockExample, buildPadlockRequestExample, buildPadlockResponseOkExample } from "../examples/index.js";
import { z } from "zod";

//#region src/modules/auth/schema/index.ts
const PadlockCreateRequestSchema = z.object({
	name: z.string().min(1).max(255),
	password: z.string().min(4)
});
const PadlockIdParamSchema = z.object({ padLockId: z.string().min(1) });
const PadlockSchema = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean()
});
const PadlockVerifyRequestSchema = z.object({ password: z.string().min(1) });
const PadlockVerifyResponseSchema = z.object({
	status: z.enum([
		"ok",
		"locked",
		"invalid"
	]),
	minutesRemaining: z.number().int().positive().optional(),
	attemptsRemaining: z.number().int().nonnegative().optional(),
	token: z.string().min(1).optional(),
	expiresAt: z.string().optional()
});
const padlockExamples = {
	createRequest: buildPadLockCreateExample(),
	entity: buildPadLockExample(),
	verifyRequest: buildPadlockRequestExample(),
	verifyResponse: buildPadlockResponseOkExample()
};

//#endregion
export { PadlockCreateRequestSchema, PadlockIdParamSchema, PadlockSchema, PadlockVerifyRequestSchema, PadlockVerifyResponseSchema, padlockExamples };