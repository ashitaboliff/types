import type { ExampleClock } from '@/shared/examples'

export type PublicBookingExample = {
	id: string
	userId: string
	bookingDate: string
	bookingTime: number
	registName: string
	name: string
	createdAt: string
	updatedAt: string
	isDeleted: boolean
}

export type DeniedBookingExample = {
	id: string
	startDate: string
	startTime: number
	endTime: number | null
	description: string
	createdAt: string
	updatedAt: string
	isDeleted: boolean
}

export const createPublicBooking = (
	clock: ExampleClock,
	overrides: Partial<PublicBookingExample> = {},
): PublicBookingExample => {
	const baseDate = clock.today
	const fiveDaysAgo = clock.daysFromToday(-5)
	return {
		id: '11111111-1111-4111-8111-111111111111',
		userId: 'user_mock',
		bookingDate: clock.isoDate(baseDate),
		bookingTime: 1,
		registName: 'モック太郎',
		name: 'スタジオ練習',
		createdAt: clock.isoDateTime(clock.hoursFromDate(fiveDaysAgo, -2)),
		updatedAt: clock.isoDateTime(clock.hoursFromDate(fiveDaysAgo, -1)),
		isDeleted: false,
		...overrides,
	}
}

export const createDeniedBooking = (
	clock: ExampleClock,
	overrides: Partial<DeniedBookingExample> = {},
): DeniedBookingExample => {
	const baseDate = clock.daysFromToday(4)
	const fiveDaysAgo = clock.daysFromToday(-5)
	return {
		id: '22222222-2222-4222-8222-222222222222',
		startDate: clock.isoDate(baseDate),
		startTime: 2,
		endTime: 3,
		description: '設備メンテナンス',
		createdAt: clock.isoDateTime(clock.hoursFromDate(fiveDaysAgo, -2)),
		updatedAt: clock.isoDateTime(clock.hoursFromDate(fiveDaysAgo, -1)),
		isDeleted: false,
		...overrides,
	}
}
