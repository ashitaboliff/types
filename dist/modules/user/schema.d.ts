import { z } from "@hono/zod-openapi";

//#region src/modules/user/schema.d.ts
declare const UserAccountRoleSchema: z.ZodEnum<{
  USER: "USER";
  ADMIN: "ADMIN";
  TOPADMIN: "TOPADMIN";
}>;
declare const UserPartSchema: z.ZodEnum<{
  VOCAL: "VOCAL";
  BACKING_GUITAR: "BACKING_GUITAR";
  LEAD_GUITAR: "LEAD_GUITAR";
  BASS: "BASS";
  DRUMS: "DRUMS";
  KEYBOARD: "KEYBOARD";
  OTHER: "OTHER";
}>;
declare const UserRoleSchema: z.ZodEnum<{
  GRADUATE: "GRADUATE";
  STUDENT: "STUDENT";
}>;
declare const UserSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  userId: z.ZodOptional<z.ZodString>;
  password: z.ZodOptional<z.ZodString>;
  email: z.ZodOptional<z.ZodEmail>;
  emailVerified: z.ZodOptional<z.ZodBoolean>;
  image: z.ZodNullable<z.ZodString>;
  role: z.ZodEnum<{
    USER: "USER";
    ADMIN: "ADMIN";
    TOPADMIN: "TOPADMIN";
  }>;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
}, z.core.$strip>;
declare const ProfileSchema: z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  studentId: z.ZodNullable<z.ZodString>;
  expected: z.ZodNullable<z.ZodString>;
  role: z.ZodEnum<{
    GRADUATE: "GRADUATE";
    STUDENT: "STUDENT";
  }>;
  part: z.ZodNullable<z.ZodArray<z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>>>;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>;
declare const ProfilePayloadSchema: z.ZodObject<{
  name: z.ZodNullable<z.ZodString>;
  role: z.ZodEnum<{
    GRADUATE: "GRADUATE";
    STUDENT: "STUDENT";
  }>;
  studentId: z.ZodNullable<z.ZodString>;
  expected: z.ZodNullable<z.ZodString>;
  part: z.ZodNullable<z.ZodArray<z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>>>;
}, z.core.$strip>;
declare const ProfileResponseSchema: z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  studentId: z.ZodNullable<z.ZodString>;
  expected: z.ZodNullable<z.ZodString>;
  role: z.ZodEnum<{
    GRADUATE: "GRADUATE";
    STUDENT: "STUDENT";
  }>;
  part: z.ZodNullable<z.ZodArray<z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>>>;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>;
declare const UserSelectItemSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  image: z.ZodNullable<z.ZodString>;
  profile: z.ZodNullable<z.ZodObject<{
    name: z.ZodNullable<z.ZodString>;
    part: z.ZodNullable<z.ZodArray<z.ZodEnum<{
      VOCAL: "VOCAL";
      BACKING_GUITAR: "BACKING_GUITAR";
      LEAD_GUITAR: "LEAD_GUITAR";
      BASS: "BASS";
      DRUMS: "DRUMS";
      KEYBOARD: "KEYBOARD";
      OTHER: "OTHER";
    }>>>;
  }, z.core.$strip>>;
}, z.core.$strip>;
declare const UserSelectListSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  image: z.ZodNullable<z.ZodString>;
  profile: z.ZodNullable<z.ZodObject<{
    name: z.ZodNullable<z.ZodString>;
    part: z.ZodNullable<z.ZodArray<z.ZodEnum<{
      VOCAL: "VOCAL";
      BACKING_GUITAR: "BACKING_GUITAR";
      LEAD_GUITAR: "LEAD_GUITAR";
      BASS: "BASS";
      DRUMS: "DRUMS";
      KEYBOARD: "KEYBOARD";
      OTHER: "OTHER";
    }>>>;
  }, z.core.$strip>>;
}, z.core.$strip>>;
declare const UserQuerySchema: z.ZodObject<{
  sort: z.ZodDefault<z.ZodEnum<{
    new: "new";
    old: "old";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const UpdateUserRoleSchema: z.ZodObject<{
  role: z.ZodEnum<{
    USER: "USER";
    ADMIN: "ADMIN";
    TOPADMIN: "TOPADMIN";
  }>;
}, z.core.$strip>;
declare const UserDetailForAdminSchema: z.ZodObject<{
  id: z.ZodString;
  name: z.ZodNullable<z.ZodString>;
  fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
  studentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
  expected: z.ZodOptional<z.ZodNullable<z.ZodString>>;
  image: z.ZodNullable<z.ZodString>;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  accountRole: z.ZodNullable<z.ZodEnum<{
    USER: "USER";
    ADMIN: "ADMIN";
    TOPADMIN: "TOPADMIN";
  }>>;
  role: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
    GRADUATE: "GRADUATE";
    STUDENT: "STUDENT";
  }>>>;
  part: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
    VOCAL: "VOCAL";
    BACKING_GUITAR: "BACKING_GUITAR";
    LEAD_GUITAR: "LEAD_GUITAR";
    BASS: "BASS";
    DRUMS: "DRUMS";
    KEYBOARD: "KEYBOARD";
    OTHER: "OTHER";
  }>>>>;
}, z.core.$strip>;
declare const UserListForAdminResponseSchema: z.ZodObject<{
  users: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    fullName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    studentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expected: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    accountRole: z.ZodNullable<z.ZodEnum<{
      USER: "USER";
      ADMIN: "ADMIN";
      TOPADMIN: "TOPADMIN";
    }>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
      GRADUATE: "GRADUATE";
      STUDENT: "STUDENT";
    }>>>;
    part: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
      VOCAL: "VOCAL";
      BACKING_GUITAR: "BACKING_GUITAR";
      LEAD_GUITAR: "LEAD_GUITAR";
      BASS: "BASS";
      DRUMS: "DRUMS";
      KEYBOARD: "KEYBOARD";
      OTHER: "OTHER";
    }>>>>;
  }, z.core.$strip>>;
  totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const UserErrorResponseSchema: z.ZodObject<{
  error: z.ZodString;
}, z.core.$strip>;
//#endregion
export { ProfilePayloadSchema, ProfileResponseSchema, ProfileSchema, UpdateUserRoleSchema, UserAccountRoleSchema, UserDetailForAdminSchema, UserErrorResponseSchema, UserListForAdminResponseSchema, UserPartSchema, UserQuerySchema, UserRoleSchema, UserSchema, UserSelectItemSchema, UserSelectListSchema };