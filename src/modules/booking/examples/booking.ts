import { createExampleClock } from '@/shared/examples'
import type { PublicBookingExample } from './helper'
import { createPublicBooking } from './helper'

export const buildBookingQueryExample = () => {
	const clock = createExampleClock()
	return {
		start: clock.isoDate(clock.today),
		end: clock.isoDate(clock.daysFromToday(6)),
	}
}

type BookingResponseExample = Record<
	string,
	Record<string, PublicBookingExample | null>
>

export const buildBookingResponseExample = (): BookingResponseExample => {
	const clock = createExampleClock()
	const today = clock.today
	const tomorrow = clock.daysFromToday(1)
	const dayAfterTomorrow = clock.daysFromToday(2)
	const booking: PublicBookingExample = createPublicBooking(clock, {
		bookingDate: clock.isoDate(today),
		bookingTime: 1,
	})

	const tomorrowBooking: PublicBookingExample = createPublicBooking(clock, {
		id: '33333333-3333-4333-8333-333333333333',
		bookingDate: clock.isoDate(tomorrow),
		bookingTime: 0,
		name: 'リハーサル',
	})

	const dayAfterBooking: PublicBookingExample = createPublicBooking(clock, {
		id: '44444444-4444-4444-8444-444444444444',
		bookingDate: clock.isoDate(dayAfterTomorrow),
		bookingTime: 4,
		name: 'ダンス練習',
	})

	return {
		[clock.isoDate(today)]: {
			'0': null,
			'1': booking,
			'2': null,
			'3': null,
		},
		[clock.isoDate(tomorrow)]: {
			'0': tomorrowBooking,
			'1': null,
			'2': null,
			'3': null,
		},
		[clock.isoDate(dayAfterTomorrow)]: {
			'0': null,
			'1': null,
			'2': null,
			'3': dayAfterBooking,
		},
	}
}

export const buildPublicBookingExample = (): PublicBookingExample =>
	createPublicBooking(createExampleClock())

export const buildBookingLogsExample = () => {
	const clock = createExampleClock()
	return [
		createPublicBooking(clock),
		createPublicBooking(clock, {
			id: '55555555-5555-4555-8555-555555555555',
			bookingDate: clock.isoDate(clock.daysFromToday(1)),
			bookingTime: 2,
			name: '個人練習',
		}),
	]
}

export const buildBookingByUserResponseExample = () => {
	const bookings = buildBookingLogsExample()
	return {
		bookings,
		totalCount: bookings.length,
	}
}

export const buildBookingCreateExample = () => {
	const clock = createExampleClock()
	return {
		userId: 'user_mock',
		bookingDate: clock.isoDate(clock.daysFromToday(1)),
		bookingTime: 1,
		registName: 'モック太郎',
		name: 'スタジオ練習',
		password: 'mock-password',
		today: clock.isoDate(clock.today),
	}
}

export const buildBookingCreateResponseExample = () => ({
	id: '66666666-6666-4666-8666-666666666666',
})

export const buildBookingUpdateExample = () => {
	const clock = createExampleClock()
	return {
		bookingDate: clock.isoDate(clock.daysFromToday(2)),
		bookingTime: 2,
		registName: 'モック太郎',
		name: 'スタジオ練習（更新）',
		today: clock.isoDate(clock.today),
		authToken: 'booking-token-example',
	}
}

export const buildBookingPasswordExample = () => ({
	password: 'mock-password',
})

export const buildBookingAccessTokenResponseExample = () => {
	const clock = createExampleClock()
	return {
		token: 'booking-token-example',
		expiresAt: clock.isoDateTime(clock.hoursFromNow(1 / 6)),
	}
}
