import { createExampleClock } from '@/shared/examples'

export const buildGachaQueryExample = () => ({
	sort: 'rare' as const,
	page: 1,
	perPage: 20,
})

export const buildGachaItemExample = () => {
	const clock = createExampleClock()
	return {
		id: 'gacha_item_1',
		userId: 'user_mock_id',
		gachaVersion: '2025-autumn',
		gachaRarity: 'SUPER_RARE' as const,
		gachaSrc: 'gacha/items/mock.png',
		signedGachaSrc: 'https://cdn.example.com/gacha/items/mock.png?token=mock',
		createdAt: clock.isoDateTime(clock.hoursFromNow(-48)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-2)),
		isDeleted: false,
	}
}

export const buildGachaListResponseExample = () => {
	const item = buildGachaItemExample()
	return {
		gacha: [item],
		totalCount: 1,
	}
}

export const buildGachaCreateExample = () => ({
	userId: 'user_mock_id',
	gachaRarity: 'SUPER_RARE',
	gachaVersion: '2025-autumn',
	gachaSrc: 'gacha/items/mock.png',
})

export const buildGachaCreateWithOverrideExample = () => ({
	...buildGachaCreateExample(),
	ignoreLimit: true,
})

export const buildGachaSrcQueryExample = () => ({
	gachaSrc: 'gacha/items/mock.png',
})

export const buildGachaBySrcResponseExample = () => ({
	gacha: buildGachaItemExample(),
	totalCount: 1,
})

export const buildGachaErrorExample = () => ({
	error: 'ガチャ結果の取得に失敗しました',
})

export const buildGachaImageProxyRequestExample = () => ({
	keys: ['gacha/items/mock.png', 'gacha/items/mock2.png'],
})

export const buildGachaImageProxyResponseExample = () => ({
	urls: {
		'gacha/items/mock.png': 'https://proxy.example.com/gacha/items/mock.png',
		'gacha/items/mock2.png': 'https://proxy.example.com/gacha/items/mock2.png',
	},
})
