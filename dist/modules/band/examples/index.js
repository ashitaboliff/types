import { pickPart } from "../../../shared/examples/hepler.js";
import { createExampleClock } from "../../../shared/examples/index.js";

//#region src/modules/band/examples/index.ts
const buildBandMemberExample = () => {
	const clock = createExampleClock();
	const memberPart = pickPart();
	return {
		id: "band_member_1",
		bandId: "band_1",
		userId: "user_mock_id",
		part: memberPart,
		createdAt: clock.isoDateTime(clock.hoursFromNow(-96)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-6)),
		user: {
			id: "user_mock_id",
			name: "モック太郎",
			image: "https://example.com/users/mock-taro.png",
			profile: {
				id: "profile_mock_id",
				name: "モック太郎",
				studentId: "21t0000a",
				expected: "26",
				role: "STUDENT",
				part: [memberPart]
			}
		}
	};
};
const buildBandExample = () => {
	const clock = createExampleClock();
	const member = buildBandMemberExample();
	return {
		id: "band_1",
		name: "Mock Band",
		createdAt: clock.isoDateTime(clock.hoursFromNow(-168)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-1)),
		isDeleted: false,
		members: [member, {
			...member,
			id: "band_member_2",
			userId: "user_mock_2",
			user: {
				...member.user,
				id: "user_mock_2",
				name: "モック花子",
				profile: {
					...member.user.profile,
					id: "profile_mock_2",
					name: "モック花子"
				}
			}
		}]
	};
};
const buildBandListExample = () => [buildBandExample()];
const buildBandCreateRequestExample = () => ({ name: "New Mock Band" });
const buildBandCreateResponseExample = () => ({ id: "band_new_id" });
const buildBandUpdateRequestExample = () => ({ name: "Updated Mock Band" });
const buildBandMemberCreateExample = () => ({
	userId: "user_mock_id",
	part: pickPart()
});
const buildBandMemberUpdateExample = () => ({ part: pickPart() });
const buildBandSearchQueryExample = () => ({
	query: "Mock",
	part: pickPart()
});
const buildBandSearchResultExample = () => [{
	id: "user_mock_id",
	name: "モック太郎",
	image: "https://example.com/users/mock-taro.png",
	profile: {
		id: "profile_mock_id",
		name: "モック太郎",
		studentId: "21t0000a",
		expected: "26",
		role: "STUDENT",
		part: [pickPart()]
	}
}];
const buildBandErrorExample = () => ({ error: "操作に失敗しました" });

//#endregion
export { buildBandCreateRequestExample, buildBandCreateResponseExample, buildBandErrorExample, buildBandExample, buildBandListExample, buildBandMemberCreateExample, buildBandMemberExample, buildBandMemberUpdateExample, buildBandSearchQueryExample, buildBandSearchResultExample, buildBandUpdateRequestExample };