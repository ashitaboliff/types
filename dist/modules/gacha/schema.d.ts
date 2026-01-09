import { z } from "@hono/zod-openapi";

//#region src/modules/gacha/schema.d.ts
declare const GachaRarityEnum: z.ZodEnum<{
  SUPER_RARE: "SUPER_RARE";
  COMMON: "COMMON";
  RARE: "RARE";
  SS_RARE: "SS_RARE";
  ULTRA_RARE: "ULTRA_RARE";
  SECRET_RARE: "SECRET_RARE";
}>;
declare const GachaSortSchema: z.ZodEnum<{
  rare: "rare";
  new: "new";
  old: "old";
  notrare: "notrare";
}>;
declare const GachaQuerySchema: z.ZodObject<{
  sort: z.ZodDefault<z.ZodEnum<{
    rare: "rare";
    new: "new";
    old: "old";
    notrare: "notrare";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const GachaResponseSchema: z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  gachaVersion: z.ZodString;
  gachaRarity: z.ZodEnum<{
    SUPER_RARE: "SUPER_RARE";
    COMMON: "COMMON";
    RARE: "RARE";
    SS_RARE: "SS_RARE";
    ULTRA_RARE: "ULTRA_RARE";
    SECRET_RARE: "SECRET_RARE";
  }>;
  gachaSrc: z.ZodString;
  signedGachaSrc: z.ZodOptional<z.ZodString>;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  isDeleted: z.ZodBoolean;
}, z.core.$strip>;
declare const GachaListResponseSchema: z.ZodObject<{
  gacha: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    gachaVersion: z.ZodString;
    gachaRarity: z.ZodEnum<{
      SUPER_RARE: "SUPER_RARE";
      COMMON: "COMMON";
      RARE: "RARE";
      SS_RARE: "SS_RARE";
      ULTRA_RARE: "ULTRA_RARE";
      SECRET_RARE: "SECRET_RARE";
    }>;
    gachaSrc: z.ZodString;
    signedGachaSrc: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    isDeleted: z.ZodBoolean;
  }, z.core.$strip>>;
  totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const GachaCreateSchema: z.ZodObject<{
  userId: z.ZodString;
  gachaRarity: z.ZodEnum<{
    SUPER_RARE: "SUPER_RARE";
    COMMON: "COMMON";
    RARE: "RARE";
    SS_RARE: "SS_RARE";
    ULTRA_RARE: "ULTRA_RARE";
    SECRET_RARE: "SECRET_RARE";
  }>;
  gachaVersion: z.ZodString;
  gachaSrc: z.ZodString;
}, z.core.$strip>;
declare const GachaCreateWithOverrideSchema: z.ZodObject<{
  userId: z.ZodString;
  gachaRarity: z.ZodEnum<{
    SUPER_RARE: "SUPER_RARE";
    COMMON: "COMMON";
    RARE: "RARE";
    SS_RARE: "SS_RARE";
    ULTRA_RARE: "ULTRA_RARE";
    SECRET_RARE: "SECRET_RARE";
  }>;
  gachaVersion: z.ZodString;
  gachaSrc: z.ZodString;
  ignoreLimit: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const GachaSrcQuerySchema: z.ZodObject<{
  gachaSrc: z.ZodString;
}, z.core.$strip>;
declare const GachaBySrcResponseSchema: z.ZodObject<{
  gacha: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    gachaVersion: z.ZodString;
    gachaRarity: z.ZodEnum<{
      SUPER_RARE: "SUPER_RARE";
      COMMON: "COMMON";
      RARE: "RARE";
      SS_RARE: "SS_RARE";
      ULTRA_RARE: "ULTRA_RARE";
      SECRET_RARE: "SECRET_RARE";
    }>;
    gachaSrc: z.ZodString;
    signedGachaSrc: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    isDeleted: z.ZodBoolean;
  }, z.core.$strip>>;
  totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const GachaErrorResponseSchema: z.ZodObject<{
  error: z.ZodString;
}, z.core.$strip>;
declare const GachaImageProxyRequestSchema: z.ZodObject<{
  keys: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
declare const GachaImageProxyResponseSchema: z.ZodObject<{
  urls: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
//#endregion
export { GachaBySrcResponseSchema, GachaCreateSchema, GachaCreateWithOverrideSchema, GachaErrorResponseSchema, GachaImageProxyRequestSchema, GachaImageProxyResponseSchema, GachaListResponseSchema, GachaQuerySchema, GachaRarityEnum, GachaResponseSchema, GachaSortSchema, GachaSrcQuerySchema };