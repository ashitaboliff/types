import { createExampleClock } from '@/shared/examples'
import { pickPart, pickRole } from '@/shared/examples/hepler'

export const buildUserExample = () => {
	const clock = createExampleClock()
	return {
		id: 'user_mock_id',
		name: 'モック太郎',
		userId: undefined,
		email: undefined,
		emailVerified: undefined,
		image: 'https://example.com/avatar.png',
		role: 'USER' as const,
		createdAt: clock.isoDateTime(clock.hoursFromNow(-48)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-2)),
	}
}

export const buildUserProfilePayloadExample = () => ({
	name: 'モック太郎',
	studentId: '21t0000a',
	expected: '26',
	role: pickRole(),
	part: [pickPart()],
})

export const buildUserProfileExample = () => {
	const clock = createExampleClock()
	return {
		id: 'profile_mock_id',
		userId: 'user_mock_id',
		name: 'モック太郎',
		studentId: '21t0000a',
		expected: '27',
		role: pickRole(),
		part: [pickPart()],
		createdAt: clock.isoDateTime(clock.hoursFromNow(-48)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-2)),
		isDeleted: false,
	}
}

export const buildUserSelectItemExample = () => ({
	id: 'user_mock_id',
	name: 'モック太郎',
	image: 'https://example.com/avatar.png',
	profile: {
		name: 'モック太郎',
		part: [pickPart()],
	},
})

export const buildUserSelectListExample = () => [
	buildUserSelectItemExample(),
	{
		id: 'user_mock_2',
		name: 'モック花子',
		image: null,
		profile: {
			name: 'モック花子',
			part: [pickPart()],
		},
	},
]

export const buildUserQueryExample = () => ({
	sort: 'new' as const,
	page: 1,
	perPage: 10,
})

export const buildUpdateUserRoleExample = () => ({
	role: 'ADMIN' as const,
})

export const buildUserDetailForAdminExample = () => {
	const clock = createExampleClock()
	return {
		id: 'user_admin_1',
		name: '管理者太郎',
		fullName: '管理者 太郎',
		studentId: 'A1234567',
		expected: '2025卒',
		image: 'https://example.com/admin.png',
		createdAt: clock.isoDateTime(clock.hoursFromNow(-240)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-12)),
		accountRole: 'ADMIN',
		role: pickRole(),
		part: [pickPart()],
	}
}

export const buildUserListForAdminResponseExample = () => {
	const primary = buildUserDetailForAdminExample()
	return {
		users: [
			primary,
			{
				...primary,
				id: 'user_admin_2',
				name: '管理者花子',
				fullName: '管理者 花子',
				studentId: 'A7654321',
				accountRole: 'TOPADMIN',
			},
		],
		totalCount: 2,
	}
}

export const buildUserErrorExample = () => ({
	error: 'ユーザーが見つかりませんでした',
})
