import { createExampleClock } from "../../../shared/examples/index.js";

//#region src/modules/gacha/examples/index.ts
const buildGachaQueryExample = () => ({
	sort: "rare",
	page: 1,
	perPage: 20
});
const buildGachaItemExample = () => {
	const clock = createExampleClock();
	return {
		id: "gacha_item_1",
		userId: "user_mock_id",
		gachaVersion: "2025-autumn",
		gachaRarity: "SUPER_RARE",
		gachaSrc: "gacha/items/mock.png",
		signedGachaSrc: "https://cdn.example.com/gacha/items/mock.png?token=mock",
		createdAt: clock.isoDateTime(clock.hoursFromNow(-48)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-2)),
		isDeleted: false
	};
};
const buildGachaListResponseExample = () => {
	return {
		gacha: [buildGachaItemExample()],
		totalCount: 1
	};
};
const buildGachaCreateExample = () => ({
	userId: "user_mock_id",
	gachaRarity: "SUPER_RARE",
	gachaVersion: "2025-autumn",
	gachaSrc: "gacha/items/mock.png"
});
const buildGachaCreateWithOverrideExample = () => ({
	...buildGachaCreateExample(),
	ignoreLimit: true
});
const buildGachaSrcQueryExample = () => ({ gachaSrc: "gacha/items/mock.png" });
const buildGachaBySrcResponseExample = () => ({
	gacha: buildGachaItemExample(),
	totalCount: 1
});
const buildGachaErrorExample = () => ({ error: "ガチャ結果の取得に失敗しました" });
const buildGachaImageProxyRequestExample = () => ({ keys: ["gacha/items/mock.png", "gacha/items/mock2.png"] });
const buildGachaImageProxyResponseExample = () => ({ urls: {
	"gacha/items/mock.png": "https://proxy.example.com/gacha/items/mock.png",
	"gacha/items/mock2.png": "https://proxy.example.com/gacha/items/mock2.png"
} });

//#endregion
export { buildGachaBySrcResponseExample, buildGachaCreateExample, buildGachaCreateWithOverrideExample, buildGachaErrorExample, buildGachaImageProxyRequestExample, buildGachaImageProxyResponseExample, buildGachaItemExample, buildGachaListResponseExample, buildGachaQueryExample, buildGachaSrcQueryExample };