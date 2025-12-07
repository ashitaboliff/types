const MS_PER_HOUR = 60 * 60 * 1000
const MS_PER_DAY = 24 * MS_PER_HOUR

const startOfDay = (date: Date): Date => {
	const atMidnight = new Date(date)
	atMidnight.setHours(0, 0, 0, 0)
	return atMidnight
}

const addHours = (date: Date, offset: number): Date =>
	new Date(date.getTime() + offset * MS_PER_HOUR)

const addDays = (date: Date, offset: number): Date =>
	new Date(date.getTime() + offset * MS_PER_DAY)

const formatISODate = (date: Date): string => date.toISOString().slice(0, 10)

export const createExampleClock = () => {
	const now = new Date()
	const today = startOfDay(now)

	const isoDate = (date: Date) => formatISODate(date)
	const isoDateTime = (date: Date) => date.toISOString()

	const daysFromToday = (offset: number) => addDays(today, offset)
	const hoursFromNow = (offset: number) => addHours(now, offset)
	const hoursFromDate = (date: Date, offset: number) => addHours(date, offset)

	return {
		now,
		today,
		isoDate,
		isoDateTime,
		daysFromToday,
		hoursFromNow,
		hoursFromDate,
	}
}

export type ExampleClock = ReturnType<typeof createExampleClock>
