import { PublicBookingExample } from "./helper.js";

//#region src/modules/booking/examples/booking.d.ts
declare const buildBookingQueryExample: () => {
  start: string;
  end: string;
};
type BookingResponseExample = Record<string, Record<string, PublicBookingExample | null>>;
declare const buildBookingResponseExample: () => BookingResponseExample;
declare const buildPublicBookingExample: () => PublicBookingExample;
declare const buildBookingLogsExample: () => PublicBookingExample[];
declare const buildBookingByUserResponseExample: () => {
  bookings: PublicBookingExample[];
  totalCount: number;
};
declare const buildBookingCreateExample: () => {
  userId: string;
  bookingDate: string;
  bookingTime: number;
  registName: string;
  name: string;
  password: string;
  today: string;
};
declare const buildBookingCreateResponseExample: () => {
  id: string;
};
declare const buildBookingUpdateExample: () => {
  bookingDate: string;
  bookingTime: number;
  registName: string;
  name: string;
  today: string;
  authToken: string;
};
declare const buildBookingPasswordExample: () => {
  password: string;
};
declare const buildBookingAccessTokenResponseExample: () => {
  token: string;
  expiresAt: string;
};
//#endregion
export { buildBookingAccessTokenResponseExample, buildBookingByUserResponseExample, buildBookingCreateExample, buildBookingCreateResponseExample, buildBookingLogsExample, buildBookingPasswordExample, buildBookingQueryExample, buildBookingResponseExample, buildBookingUpdateExample, buildPublicBookingExample };