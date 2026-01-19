import { createExampleClock } from '@/shared/examples'
import { pickPart } from '@/shared/examples/hepler'

export const buildBandMemberExample = () => {
	const clock = createExampleClock()
	const memberPart = pickPart()
	return {
		id: 'band_member_1',
		bandId: 'band_1',
		userId: 'user_mock_id',
		part: memberPart,
		createdAt: clock.isoDateTime(clock.hoursFromNow(-96)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-6)),
		user: {
			id: 'user_mock_id',
			name: 'モック太郎',
			image: 'https://example.com/users/mock-taro.png',
			profile: {
				id: 'profile_mock_id',
				name: 'モック太郎',
				studentId: '21t0000a',
				expected: '26',
				role: 'STUDENT',
				part: [memberPart],
			},
		},
	}
}

export const buildBandExample = () => {
	const clock = createExampleClock()
	const member = buildBandMemberExample()
	return {
		id: 'band_1',
		name: 'Mock Band',
		createdAt: clock.isoDateTime(clock.hoursFromNow(-168)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-1)),
		isDeleted: false,
		members: [
			member,
			{
				...member,
				id: 'band_member_2',
				userId: 'user_mock_2',
				user: {
					...member.user,
					id: 'user_mock_2',
					name: 'モック花子',
					profile: {
						...member.user.profile,
						id: 'profile_mock_2',
						name: 'モック花子',
					},
				},
			},
		],
	}
}

export const buildBandListExample = () => [buildBandExample()]

export const buildBandCreateRequestExample = () => ({ name: 'New Mock Band' })

export const buildBandCreateResponseExample = () => ({ id: 'band_new_id' })

export const buildBandUpdateRequestExample = () => ({
	name: 'Updated Mock Band',
})

export const buildBandMemberCreateExample = () => ({
	userId: 'user_mock_id',
	part: pickPart(),
})

export const buildBandMemberUpdateExample = () => ({ part: pickPart() })

export const buildBandSearchQueryExample = () => ({
	query: 'Mock',
	part: pickPart(),
})

export const buildBandSearchResultExample = () => [
	{
		id: 'user_mock_id',
		name: 'モック太郎',
		image: 'https://example.com/users/mock-taro.png',
		profile: {
			id: 'profile_mock_id',
			name: 'モック太郎',
			studentId: '21t0000a',
			expected: '26',
			role: 'STUDENT',
			part: [pickPart()],
		},
	},
]

export const buildBandErrorExample = () => ({ error: '操作に失敗しました' })
