import { BandCreateSchema, BandMemberCreateSchema, BandMemberSchema, BandSchema, BandSearchQuerySchema, BandSearchResultSchema, BandUpdateSchema } from "./schema.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/band/types.d.ts
type Band = z.infer<typeof BandSchema>;
type BandMember = z.infer<typeof BandMemberSchema>;
type BandList = Band[];
type BandSearchQuery = z.infer<typeof BandSearchQuerySchema>;
type BandSearchResult = z.infer<typeof BandSearchResultSchema>;
type BandCreate = z.infer<typeof BandCreateSchema>;
type BandUpdate = z.infer<typeof BandUpdateSchema>;
type BandMemberCreate = z.infer<typeof BandMemberCreateSchema>;
//#endregion
export { Band, BandCreate, BandList, BandMember, BandMemberCreate, BandSearchQuery, BandSearchResult, BandUpdate };