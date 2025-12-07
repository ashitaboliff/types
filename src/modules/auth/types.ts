import type { z } from '@hono/zod-openapi'
import type { PadLockSchema } from '@/modules/auth/schema'

export type PublicPadLock = z.infer<typeof PadLockSchema>
