import { describe, expect, it } from 'vitest'
import {
	ScheduleCreatedResponseSchema,
	ScheduleCreateSchema,
	ScheduleErrorResponseSchema,
} from '../src/modules/schedule/schema'

describe('Schedule schemas', () => {
	it('rejects create payload without userId', () => {
		const result = ScheduleCreateSchema.safeParse({ title: 'event' })
		expect(result.success).toBe(false)
	})

	it('applies defaults for mention and timeExtended', () => {
		const parsed = ScheduleCreateSchema.parse({
			userId: 'user_1',
			title: 'event',
			dates: ['2024-01-01'],
			deadline: '2023-12-31',
		})
		expect(parsed.mention).toEqual([])
		expect(parsed.timeExtended).toBe(false)
	})

	it('accepts created response and error response shapes', () => {
		expect(
			ScheduleCreatedResponseSchema.safeParse({ id: 'sched_1' }).success,
		).toBe(true)
		expect(
			ScheduleErrorResponseSchema.safeParse({ error: 'not found' }).success,
		).toBe(true)
	})
})
