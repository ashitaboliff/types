import { createExampleClock } from "../../../shared/examples/index.js";

//#region src/modules/auth/examples/index.ts
const buildPadlockRequestExample = () => ({ password: "secret-password" });
const buildPadlockResponseOkExample = () => ({
	status: "ok",
	token: "padlock-token-example",
	expiresAt: new Date(Date.now() + 600 * 1e3).toISOString()
});
const buildPadlockResponseInvalidExample = () => ({
	status: "invalid",
	attemptsRemaining: 2
});
const buildPadlockResponseLockedExample = () => ({
	status: "locked",
	minutesRemaining: 15,
	attemptsRemaining: 0
});
const buildPadLockCreateExample = () => ({
	name: "スタジオ出入り口",
	password: "lock-1234"
});
const buildPadLockExample = () => {
	const clock = createExampleClock();
	return {
		id: "padlock_1",
		name: "スタジオ出入り口",
		createdAt: clock.isoDateTime(clock.hoursFromNow(-120)),
		updatedAt: clock.isoDateTime(clock.hoursFromNow(-1)),
		isDeleted: false
	};
};
const buildPadLockListExample = () => {
	const base = buildPadLockExample();
	return [base, {
		...base,
		id: "padlock_2",
		name: "倉庫入口"
	}];
};
const buildAuthSessionExample = () => ({
	user: {
		id: "user_mock_id",
		email: "mock@example.com",
		name: "モック太郎"
	},
	expires: new Date(Date.now() + 1e3 * 60 * 60).toISOString()
});
const buildAuthErrorJsonExample = () => ({
	error: "AuthenticationFailed",
	message: "Mock error message for authentication failure."
});
const buildAuthErrorHtmlExample = () => "<html><body><h1>Authentication Error</h1><p>Mock error page.</p></body></html>";

//#endregion
export { buildAuthErrorHtmlExample, buildAuthErrorJsonExample, buildAuthSessionExample, buildPadLockCreateExample, buildPadLockExample, buildPadLockListExample, buildPadlockRequestExample, buildPadlockResponseInvalidExample, buildPadlockResponseLockedExample, buildPadlockResponseOkExample };