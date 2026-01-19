import type { z } from 'zod'
import type {
	PadlockCreateRequestSchema,
	PadlockSchema,
	PadlockVerifyRequestSchema,
	PadlockVerifyResponseSchema,
} from '@/modules/auth/schema'

export type Padlock = z.infer<typeof PadlockSchema>

export type PadlockCreateRequest = z.infer<typeof PadlockCreateRequestSchema>

export type PadlockVerifyRequest = z.infer<typeof PadlockVerifyRequestSchema>

export type PadlockVerifyResponse = z.infer<typeof PadlockVerifyResponseSchema>
