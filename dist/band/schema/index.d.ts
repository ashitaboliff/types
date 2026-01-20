import { z } from "zod";

//#region src/modules/band/schema/index.d.ts
declare const BandIdParamSchema: z.ZodObject<{
  bandId: z.ZodString;
}, z.core.$strip>;
declare const BandMemberIdParamSchema: z.ZodObject<{
  bandMemberId: z.ZodString;
}, z.core.$strip>;
declare const BandMemberSchema: z.ZodObject<{
  id: z.ZodString;
  bandId: z.ZodString;
  userId: z.ZodString;
  part: z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  user: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    image: z.ZodNullable<z.ZodString>;
    profile: z.ZodNullable<z.ZodObject<{
      id: z.ZodString;
      name: z.ZodNullable<z.ZodString>;
      studentId: z.ZodNullable<z.ZodString>;
      expected: z.ZodNullable<z.ZodString>;
      role: z.ZodString;
      part: z.ZodNullable<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
  }, z.core.$strip>;
}, z.core.$strip>;
declare const BandSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
  members: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    bandId: z.ZodString;
    userId: z.ZodString;
    part: z.ZodEnum<{
      VOCAL: "VOCAL";
      BACKING_GUITAR: "BACKING_GUITAR";
      LEAD_GUITAR: "LEAD_GUITAR";
      BASS: "BASS";
      DRUMS: "DRUMS";
      KEYBOARD: "KEYBOARD";
      OTHER: "OTHER";
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    user: z.ZodObject<{
      id: z.ZodString;
      name: z.ZodNullable<z.ZodString>;
      image: z.ZodNullable<z.ZodString>;
      profile: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        studentId: z.ZodNullable<z.ZodString>;
        expected: z.ZodNullable<z.ZodString>;
        role: z.ZodString;
        part: z.ZodNullable<z.ZodArray<z.ZodString>>;
      }, z.core.$strip>>;
    }, z.core.$strip>;
  }, z.core.$strip>>;
}, z.core.$strip>;
declare const BandListResponseSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  name: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
  members: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    bandId: z.ZodString;
    userId: z.ZodString;
    part: z.ZodEnum<{
      VOCAL: "VOCAL";
      BACKING_GUITAR: "BACKING_GUITAR";
      LEAD_GUITAR: "LEAD_GUITAR";
      BASS: "BASS";
      DRUMS: "DRUMS";
      KEYBOARD: "KEYBOARD";
      OTHER: "OTHER";
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    user: z.ZodObject<{
      id: z.ZodString;
      name: z.ZodNullable<z.ZodString>;
      image: z.ZodNullable<z.ZodString>;
      profile: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        studentId: z.ZodNullable<z.ZodString>;
        expected: z.ZodNullable<z.ZodString>;
        role: z.ZodString;
        part: z.ZodNullable<z.ZodArray<z.ZodString>>;
      }, z.core.$strip>>;
    }, z.core.$strip>;
  }, z.core.$strip>>;
}, z.core.$strip>>;
declare const BandCreateRequestSchema: z.ZodObject<{
  name: z.ZodString;
}, z.core.$strip>;
declare const BandCreateResponseSchema: z.ZodObject<{
  id: z.ZodString;
}, z.core.$strip>;
declare const BandUpdateRequestSchema: z.ZodObject<{
  name: z.ZodString;
}, z.core.$strip>;
declare const BandMemberCreateRequestSchema: z.ZodObject<{
  userId: z.ZodString;
  part: z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>;
}, z.core.$strip>;
declare const BandMemberUpdateRequestSchema: z.ZodObject<{
  part: z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>;
}, z.core.$strip>;
declare const BandSearchQuerySchema: z.ZodObject<{
  query: z.ZodOptional<z.ZodString>;
  part: z.ZodOptional<z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>>;
}, z.core.$strip>;
declare const BandSearchResponseSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  image: z.ZodNullable<z.ZodString>;
  profile: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    studentId: z.ZodNullable<z.ZodString>;
    expected: z.ZodNullable<z.ZodString>;
    role: z.ZodString;
    part: z.ZodNullable<z.ZodArray<z.ZodString>>;
  }, z.core.$strip>>;
}, z.core.$strip>>;
declare const BandErrorResponseSchema: z.ZodObject<{
  error: z.ZodString;
}, z.core.$strip>;
//#endregion
export { BandCreateRequestSchema, BandCreateResponseSchema, BandErrorResponseSchema, BandIdParamSchema, BandListResponseSchema, BandMemberCreateRequestSchema, BandMemberIdParamSchema, BandMemberSchema, BandMemberUpdateRequestSchema, BandSchema, BandSearchQuerySchema, BandSearchResponseSchema, BandUpdateRequestSchema };