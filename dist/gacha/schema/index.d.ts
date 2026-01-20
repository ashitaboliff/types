import { z } from "zod";

//#region src/modules/gacha/schema/index.d.ts
declare const GachaRaritySchema: z.ZodEnum<{
  COMMON: "COMMON";
  RARE: "RARE";
  SUPER_RARE: "SUPER_RARE";
  SS_RARE: "SS_RARE";
  ULTRA_RARE: "ULTRA_RARE";
  SECRET_RARE: "SECRET_RARE";
}>;
declare const GachaSortOrderSchema: z.ZodEnum<{
  new: "new";
  old: "old";
  rare: "rare";
  notrare: "notrare";
}>;
declare const GachaListQuerySchema: z.ZodObject<{
  sort: z.ZodDefault<z.ZodEnum<{
    new: "new";
    old: "old";
    rare: "rare";
    notrare: "notrare";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const GachaSchema: z.ZodObject<{
  id: z.ZodString;
  userId: z.ZodString;
  gachaVersion: z.ZodString;
  gachaRarity: z.ZodEnum<{
    COMMON: "COMMON";
    RARE: "RARE";
    SUPER_RARE: "SUPER_RARE";
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
      COMMON: "COMMON";
      RARE: "RARE";
      SUPER_RARE: "SUPER_RARE";
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
declare const GachaCreateRequestSchema: z.ZodObject<{
  userId: z.ZodString;
  gachaRarity: z.ZodEnum<{
    COMMON: "COMMON";
    RARE: "RARE";
    SUPER_RARE: "SUPER_RARE";
    SS_RARE: "SS_RARE";
    ULTRA_RARE: "ULTRA_RARE";
    SECRET_RARE: "SECRET_RARE";
  }>;
  gachaVersion: z.ZodString;
  gachaSrc: z.ZodString;
}, z.core.$strip>;
declare const GachaCreateWithOverrideRequestSchema: z.ZodObject<{
  userId: z.ZodString;
  gachaRarity: z.ZodEnum<{
    COMMON: "COMMON";
    RARE: "RARE";
    SUPER_RARE: "SUPER_RARE";
    SS_RARE: "SS_RARE";
    ULTRA_RARE: "ULTRA_RARE";
    SECRET_RARE: "SECRET_RARE";
  }>;
  gachaVersion: z.ZodString;
  gachaSrc: z.ZodString;
  ignoreLimit: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
declare const GachaSourceQuerySchema: z.ZodObject<{
  gachaSrc: z.ZodString;
}, z.core.$strip>;
declare const GachaBySourceResponseSchema: z.ZodObject<{
  gacha: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    gachaVersion: z.ZodString;
    gachaRarity: z.ZodEnum<{
      COMMON: "COMMON";
      RARE: "RARE";
      SUPER_RARE: "SUPER_RARE";
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
export { GachaBySourceResponseSchema, GachaCreateRequestSchema, GachaCreateWithOverrideRequestSchema, GachaErrorResponseSchema, GachaImageProxyRequestSchema, GachaImageProxyResponseSchema, GachaListQuerySchema, GachaListResponseSchema, GachaRaritySchema, GachaSchema, GachaSortOrderSchema, GachaSourceQuerySchema };