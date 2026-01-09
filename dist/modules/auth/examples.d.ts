//#region src/modules/auth/examples.d.ts
declare const buildPadlockRequestExample: () => {
  password: string;
};
declare const buildPadlockResponseOkExample: () => {
  status: "ok";
  token: string;
  expiresAt: string;
};
declare const buildPadlockResponseInvalidExample: () => {
  status: "invalid";
  attemptsRemaining: number;
};
declare const buildPadlockResponseLockedExample: () => {
  status: "locked";
  minutesRemaining: number;
  attemptsRemaining: number;
};
declare const buildPadLockCreateExample: () => {
  name: string;
  password: string;
};
declare const buildPadLockExample: () => {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};
declare const buildPadLockListExample: () => {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}[];
declare const buildAuthSessionExample: () => {
  user: {
    id: string;
    email: string;
    name: string;
  };
  expires: string;
};
declare const buildAuthErrorJsonExample: () => {
  error: string;
  message: string;
};
declare const buildAuthErrorHtmlExample: () => string;
//#endregion
export { buildAuthErrorHtmlExample, buildAuthErrorJsonExample, buildAuthSessionExample, buildPadLockCreateExample, buildPadLockExample, buildPadLockListExample, buildPadlockRequestExample, buildPadlockResponseInvalidExample, buildPadlockResponseLockedExample, buildPadlockResponseOkExample };