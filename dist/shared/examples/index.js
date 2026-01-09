//#region src/shared/examples/index.ts
const MS_PER_HOUR = 3600 * 1e3;
const MS_PER_DAY = 24 * MS_PER_HOUR;
const startOfDay = (date) => {
	const atMidnight = new Date(date);
	atMidnight.setHours(0, 0, 0, 0);
	return atMidnight;
};
const addHours = (date, offset) => new Date(date.getTime() + offset * MS_PER_HOUR);
const addDays = (date, offset) => new Date(date.getTime() + offset * MS_PER_DAY);
const formatISODate = (date) => date.toISOString().slice(0, 10);
const createExampleClock = () => {
	const now = /* @__PURE__ */ new Date();
	const today = startOfDay(now);
	const isoDate = (date) => formatISODate(date);
	const isoDateTime = (date) => date.toISOString();
	const daysFromToday = (offset) => addDays(today, offset);
	const hoursFromNow = (offset) => addHours(now, offset);
	const hoursFromDate = (date, offset) => addHours(date, offset);
	return {
		now,
		today,
		isoDate,
		isoDateTime,
		daysFromToday,
		hoursFromNow,
		hoursFromDate
	};
};

//#endregion
export { createExampleClock };