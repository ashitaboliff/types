import { z } from 'zod'

export const PadlockCreateRequestSchema = z.object({
	name: z.string().min(1).max(255),
	password: z.string().min(4),
})

export const PadlockIdParamSchema = z.object({
	padLockId: z.string().min(1),
})

export const PadlockSchema = z.object({
	id: z.string(),
	name: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean(),
})

export const PadlockVerifyRequestSchema = z.object({
	password: z.string().min(1),
})

export const PadlockVerifyResponseSchema = z.object({
	status: z.enum(['ok', 'locked', 'invalid']),
	minutesRemaining: z.number().int().positive().optional(),
	attemptsRemaining: z.number().int().nonnegative().optional(),
	token: z.string().min(1).optional(),
	expiresAt: z.string().optional(),
})
