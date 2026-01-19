//#region src/modules/band/examples/index.d.ts
declare const buildBandMemberExample: () => {
  id: string;
  bandId: string;
  userId: string;
  part: "LEAD_GUITAR";
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    image: string;
    profile: {
      id: string;
      name: string;
      studentId: string;
      expected: string;
      role: string;
      part: "LEAD_GUITAR"[];
    };
  };
};
declare const buildBandExample: () => {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  members: {
    id: string;
    bandId: string;
    userId: string;
    part: "LEAD_GUITAR";
    createdAt: string;
    updatedAt: string;
    user: {
      id: string;
      name: string;
      image: string;
      profile: {
        id: string;
        name: string;
        studentId: string;
        expected: string;
        role: string;
        part: "LEAD_GUITAR"[];
      };
    };
  }[];
};
declare const buildBandListExample: () => {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  members: {
    id: string;
    bandId: string;
    userId: string;
    part: "LEAD_GUITAR";
    createdAt: string;
    updatedAt: string;
    user: {
      id: string;
      name: string;
      image: string;
      profile: {
        id: string;
        name: string;
        studentId: string;
        expected: string;
        role: string;
        part: "LEAD_GUITAR"[];
      };
    };
  }[];
}[];
declare const buildBandCreateRequestExample: () => {
  name: string;
};
declare const buildBandCreateResponseExample: () => {
  id: string;
};
declare const buildBandUpdateRequestExample: () => {
  name: string;
};
declare const buildBandMemberCreateExample: () => {
  userId: string;
  part: "LEAD_GUITAR";
};
declare const buildBandMemberUpdateExample: () => {
  part: "LEAD_GUITAR";
};
declare const buildBandSearchQueryExample: () => {
  query: string;
  part: "LEAD_GUITAR";
};
declare const buildBandSearchResultExample: () => {
  id: string;
  name: string;
  image: string;
  profile: {
    id: string;
    name: string;
    studentId: string;
    expected: string;
    role: string;
    part: "LEAD_GUITAR"[];
  };
}[];
declare const buildBandErrorExample: () => {
  error: string;
};
//#endregion
export { buildBandCreateRequestExample, buildBandCreateResponseExample, buildBandErrorExample, buildBandExample, buildBandListExample, buildBandMemberCreateExample, buildBandMemberExample, buildBandMemberUpdateExample, buildBandSearchQueryExample, buildBandSearchResultExample, buildBandUpdateRequestExample };