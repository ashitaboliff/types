//#region src/shared/examples/index.d.ts
declare const createExampleClock: () => {
  now: Date;
  today: Date;
  isoDate: (date: Date) => string;
  isoDateTime: (date: Date) => string;
  daysFromToday: (offset: number) => Date;
  hoursFromNow: (offset: number) => Date;
  hoursFromDate: (date: Date, offset: number) => Date;
};
type ExampleClock = ReturnType<typeof createExampleClock>;
//#endregion
export { ExampleClock, createExampleClock };