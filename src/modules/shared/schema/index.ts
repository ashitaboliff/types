import { z } from 'zod'

export const SortOrderSchema = z.enum(['new', 'old'])

export const UserIdParamSchema = z.object({ userId: z.string().min(1) })
