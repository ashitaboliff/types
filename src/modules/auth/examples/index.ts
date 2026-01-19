import { createExampleClock } from '@/shared/examples'

export const buildPadlockRequestExample = () => ({
	password: 'secret-password',
})

export const buildPadlockResponseOkExample = () => ({
	status: 'ok' as const,
	token: 'padlock-token-example',
	expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
})

export const buildPadlockResponseInvalidExample = () => ({
	status: 'invalid' as const,
	attemptsRemaining: 2,
})

export const buildPadlockResponseLockedExample = () => ({
	status: 'locked' as const,
	minutesRemaining: 15,
	attemptsRemaining: 0,
})

export const buildPadLockCreateExample = () => ({
	name: 'スタジオ出入り口',
	password: 'lock-1234',
})

export const buildPadLockExample = () => {
	const clock = createExampleClock()
	return {
		id: 'padlock_1',
		name: 'スタジオ出入り口',
		createdAt: clock.isoDateTime(clock.hoursFromNow(-120)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-1)),
		isDeleted: false,
	}
}

export const buildPadLockListExample = () => {
	const base = buildPadLockExample()
	return [
		base,
		{
			...base,
			id: 'padlock_2',
			name: '倉庫入口',
		},
	]
}

export const buildAuthSessionExample = () => ({
	user: {
		id: 'user_mock_id',
		email: 'mock@example.com',
		name: 'モック太郎',
	},
	expires: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
})

export const buildAuthErrorJsonExample = () => ({
	error: 'AuthenticationFailed',
	message: 'Mock error message for authentication failure.',
})

export const buildAuthErrorHtmlExample = () =>
	'<html><body><h1>Authentication Error</h1><p>Mock error page.</p></body></html>'
