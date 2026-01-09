import { DeniedBookingExample } from "./helper.js";

//#region src/modules/booking/examples/denied.d.ts
declare const buildDeniedBookingResponseExample: () => DeniedBookingExample[];
declare const buildBookingIdsExample: () => string[];
declare const buildDeniedBookingQueryExample: () => {
  sort: "relativeCurrent";
  page: number;
  perPage: number;
  today: string;
};
declare const buildAdminDeniedBookingCreateExample: () => {
  startDate: string;
  startTime: number;
  endTime: number;
  description: string;
};
declare const buildAdminDeniedBookingResponseExample: () => {
  data: DeniedBookingExample[];
  totalCount: number;
};
//#endregion
export { buildAdminDeniedBookingCreateExample, buildAdminDeniedBookingResponseExample, buildBookingIdsExample, buildDeniedBookingQueryExample, buildDeniedBookingResponseExample };