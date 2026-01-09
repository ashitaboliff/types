//#region src/modules/user/examples.d.ts
declare const buildUserExample: () => {
  id: string;
  name: string;
  userId: undefined;
  email: undefined;
  emailVerified: undefined;
  image: string;
  role: "USER";
  createdAt: string;
  updatedAt: string;
};
declare const buildUserProfilePayloadExample: () => {
  name: string;
  studentId: string;
  expected: string;
  role: "STUDENT";
  part: "LEAD_GUITAR"[];
};
declare const buildUserProfileExample: () => {
  id: string;
  userId: string;
  name: string;
  studentId: string;
  expected: string;
  role: "STUDENT";
  part: "LEAD_GUITAR"[];
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
};
declare const buildUserSelectItemExample: () => {
  id: string;
  name: string;
  image: string;
  profile: {
    name: string;
    part: "LEAD_GUITAR"[];
  };
};
declare const buildUserSelectListExample: () => ({
  id: string;
  name: string;
  image: string;
  profile: {
    name: string;
    part: "LEAD_GUITAR"[];
  };
} | {
  id: string;
  name: string;
  image: null;
  profile: {
    name: string;
    part: "LEAD_GUITAR"[];
  };
})[];
declare const buildUserQueryExample: () => {
  sort: "new";
  page: number;
  perPage: number;
};
declare const buildUpdateUserRoleExample: () => {
  role: "ADMIN";
};
declare const buildUserDetailForAdminExample: () => {
  id: string;
  name: string;
  fullName: string;
  studentId: string;
  expected: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  accountRole: string;
  role: "STUDENT";
  part: "LEAD_GUITAR"[];
};
declare const buildUserListForAdminResponseExample: () => {
  users: {
    id: string;
    name: string;
    fullName: string;
    studentId: string;
    expected: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    accountRole: string;
    role: "STUDENT";
    part: "LEAD_GUITAR"[];
  }[];
  totalCount: number;
};
declare const buildUserErrorExample: () => {
  error: string;
};
//#endregion
export { buildUpdateUserRoleExample, buildUserDetailForAdminExample, buildUserErrorExample, buildUserExample, buildUserListForAdminResponseExample, buildUserProfileExample, buildUserProfilePayloadExample, buildUserQueryExample, buildUserSelectItemExample, buildUserSelectListExample };