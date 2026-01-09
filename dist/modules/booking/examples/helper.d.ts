import { ExampleClock } from "../../../shared/examples/index.js";

//#region src/modules/booking/examples/helper.d.ts
type PublicBookingExample = {
  id: string;
  userId: string;
  bookingDate: string;
  bookingTime: number;
  registName: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};
type DeniedBookingExample = {
  id: string;
  startDate: string;
  startTime: number;
  endTime: number | null;
  description: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};
declare const createPublicBooking: (clock: ExampleClock, overrides?: Partial<PublicBookingExample>) => PublicBookingExample;
declare const createDeniedBooking: (clock: ExampleClock, overrides?: Partial<DeniedBookingExample>) => DeniedBookingExample;
//#endregion
export { DeniedBookingExample, PublicBookingExample, createDeniedBooking, createPublicBooking };