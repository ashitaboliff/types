import { z } from '@hono/zod-openapi'
import * as example from '@/modules/auth/examples'

export const PadLockCreateSchema = z
	.object({
		name: z.string().min(1).max(255),
		password: z.string().min(4),
	})
	.openapi({
		title: '部室鍵認証 - 鍵作成',
		example: example.buildPadLockCreateExample(),
	})

export const PadLockIdParam = z
	.object({ padLockId: z.string().min(1) })
	.openapi({
		title: '部室鍵IDパラメータ',
		param: {
			name: 'padLockId',
			in: 'path',
			description: '部室鍵ID',
			required: true,
		},
		example: 'padlock_1',
	})

export const PadLockSchema = z
	.object({
		id: z.string(),
		name: z.string(),
		createdAt: z.string(),
		updatedAt: z.string(),
		isDeleted: z.boolean(),
	})
	.openapi({
		title: 'PadLock',
		example: example.buildPadLockExample(),
	})

export const PadlockRequestSchema = z
	.object({ password: z.string().min(1) })
	.openapi({
		title: 'PadlockPasswordRequest',
		description: '部室鍵認証解錠用の共有パスワード。',
		example: example.buildPadlockRequestExample(),
	})

export const PadlockResponseSchema = z
	.object({
		status: z.enum(['ok', 'locked', 'invalid']),
		minutesRemaining: z.number().int().positive().optional(),
		attemptsRemaining: z.number().int().nonnegative().optional(),
		token: z.string().min(1).optional(),
		expiresAt: z
			.string()
			.openapi({ example: new Date(Date.now() + 10 * 60 * 1000).toISOString() })
			.optional(),
	})
	.openapi({
		title: 'PadlockPasswordResponse',
		example: example.buildPadlockResponseOkExample(),
	})
