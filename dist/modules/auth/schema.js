import { buildPadLockCreateExample, buildPadLockExample, buildPadlockRequestExample, buildPadlockResponseOkExample } from "./examples.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/auth/schema.ts
const PadLockCreateSchema = z.object({
	name: z.string().min(1).max(255),
	password: z.string().min(4)
}).openapi({
	title: "部室鍵認証 - 鍵作成",
	example: buildPadLockCreateExample()
});
const PadLockIdParam = z.object({ padLockId: z.string().min(1) }).openapi({
	title: "部室鍵IDパラメータ",
	param: {
		name: "padLockId",
		in: "path",
		description: "部室鍵ID",
		required: true
	},
	example: "padlock_1"
});
const PadLockSchema = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean()
}).openapi({
	title: "PadLock",
	example: buildPadLockExample()
});
const PadlockRequestSchema = z.object({ password: z.string().min(1) }).openapi({
	title: "PadlockPasswordRequest",
	description: "部室鍵認証解錠用の共有パスワード。",
	example: buildPadlockRequestExample()
});
const PadlockResponseSchema = z.object({
	status: z.enum([
		"ok",
		"locked",
		"invalid"
	]),
	minutesRemaining: z.number().int().positive().optional(),
	attemptsRemaining: z.number().int().nonnegative().optional(),
	token: z.string().min(1).optional(),
	expiresAt: z.string().openapi({ example: new Date(Date.now() + 600 * 1e3).toISOString() }).optional()
}).openapi({
	title: "PadlockPasswordResponse",
	example: buildPadlockResponseOkExample()
});

//#endregion
export { PadLockCreateSchema, PadLockIdParam, PadLockSchema, PadlockRequestSchema, PadlockResponseSchema };