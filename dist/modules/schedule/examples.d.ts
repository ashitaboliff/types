//#region src/modules/schedule/examples.d.ts
declare const buildScheduleCreateRequestExample: () => {
  id: undefined;
  userId: string;
  title: string;
  description: string;
  dates: string[];
  mention: string[];
  timeExtended: boolean;
  deadline: string;
};
declare const buildScheduleResponseExample: () => {
  id: string;
  userId: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  mention: string[];
  timeExtended: boolean;
  deadline: string;
  createdAt: string;
  updatedAt: string;
};
declare const buildScheduleUserExample: () => {
  id: string;
  name: string;
  image: string;
};
declare const buildScheduleUserListExample: () => ({
  id: string;
  name: string;
  image: string;
} | {
  id: string;
  name: string;
  image: null;
})[];
declare const buildScheduleCreatedResponseExample: () => {
  id: string;
};
declare const buildScheduleErrorExample: () => {
  error: string;
};
//#endregion
export { buildScheduleCreateRequestExample, buildScheduleCreatedResponseExample, buildScheduleErrorExample, buildScheduleResponseExample, buildScheduleUserExample, buildScheduleUserListExample };