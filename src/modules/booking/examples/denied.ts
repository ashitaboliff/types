import { createExampleClock } from '@/shared/examples'
import { createDeniedBooking } from './helper'

export const buildDeniedBookingResponseExample = () => {
	const clock = createExampleClock()
	return [
		createDeniedBooking(clock),
		createDeniedBooking(clock, {
			id: '77777777-7777-4777-8777-777777777777',
			startDate: clock.isoDate(clock.daysFromToday(1)),
			startTime: 5,
			endTime: 6,
			description: 'イベント利用',
		}),
	]
}

export const buildBookingIdsExample = () => [
	'11111111-1111-4111-8111-111111111111',
	'33333333-3333-4333-8333-333333333333',
	'44444444-4444-4444-8444-444444444444',
]

export const buildDeniedBookingQueryExample = () => {
	const clock = createExampleClock()
	return {
		sort: 'relativeCurrent' as const,
		page: 1,
		perPage: 20,
		today: clock.isoDate(clock.today),
	}
}

export const buildAdminDeniedBookingCreateExample = () => {
	const clock = createExampleClock()
	return {
		startDate: clock.isoDate(clock.daysFromToday(3)),
		startTime: 4,
		endTime: 5,
		description: '設備点検',
	}
}

export const buildAdminDeniedBookingResponseExample = () => {
	return {
		data: buildDeniedBookingResponseExample(),
		totalCount: 1,
	}
}
