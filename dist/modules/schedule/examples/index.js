import { createExampleClock } from "../../../shared/examples/index.js";

//#region src/modules/schedule/examples/index.ts
const buildScheduleCreateRequestExample = () => {
	const clock = createExampleClock();
	return {
		id: void 0,
		userId: "user_mock_id",
		title: "学園祭準備ミーティング",
		description: "学園祭の進行確認と作業分担を行います。",
		dates: [clock.isoDate(clock.daysFromToday(7)), clock.isoDate(clock.daysFromToday(14))],
		mention: ["@all"],
		timeExtended: false,
		deadline: clock.isoDate(clock.daysFromToday(5))
	};
};
const buildScheduleResponseExample = () => {
	const clock = createExampleClock();
	return {
		id: "sched_123",
		userId: "user_mock_id",
		title: "学園祭準備ミーティング",
		description: "学園祭の進行確認と作業分担を行います。",
		startDate: clock.isoDate(clock.daysFromToday(7)),
		endDate: clock.isoDate(clock.daysFromToday(7)),
		mention: ["@all"],
		timeExtended: false,
		deadline: clock.isoDate(clock.daysFromToday(5)),
		createdAt: clock.isoDateTime(clock.hoursFromNow(-24)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-1))
	};
};
const buildScheduleUserExample = () => ({
	id: "user_mock_id",
	name: "モック太郎",
	image: "https://example.com/users/mock-taro.png"
});
const buildScheduleUserListExample = () => [buildScheduleUserExample(), {
	id: "user_mock_2",
	name: "モック花子",
	image: null
}];
const buildScheduleCreatedResponseExample = () => ({ id: "sched_created_1" });
const buildScheduleErrorExample = () => ({ error: "スケジュールの処理に失敗しました" });

//#endregion
export { buildScheduleCreateRequestExample, buildScheduleCreatedResponseExample, buildScheduleErrorExample, buildScheduleResponseExample, buildScheduleUserExample, buildScheduleUserListExample };