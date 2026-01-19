import { BandCreateRequestSchema, BandCreateResponseSchema, BandListResponseSchema, BandMemberCreateRequestSchema, BandMemberSchema, BandMemberUpdateRequestSchema, BandSchema, BandSearchQuerySchema, BandSearchResponseSchema, BandUpdateRequestSchema } from "../schema/index.js";
import { z } from "zod";

//#region src/modules/band/types/index.d.ts
type Band = z.infer<typeof BandSchema>;
type BandMember = z.infer<typeof BandMemberSchema>;
type BandListResponse = z.infer<typeof BandListResponseSchema>;
type BandSearchQuery = z.infer<typeof BandSearchQuerySchema>;
type BandSearchResponse = z.infer<typeof BandSearchResponseSchema>;
type BandCreateRequest = z.infer<typeof BandCreateRequestSchema>;
type BandCreateResponse = z.infer<typeof BandCreateResponseSchema>;
type BandUpdateRequest = z.infer<typeof BandUpdateRequestSchema>;
type BandMemberCreateRequest = z.infer<typeof BandMemberCreateRequestSchema>;
type BandMemberUpdateRequest = z.infer<typeof BandMemberUpdateRequestSchema>;
//#endregion
export { Band, BandCreateRequest, BandCreateResponse, BandListResponse, BandMember, BandMemberCreateRequest, BandMemberUpdateRequest, BandSearchQuery, BandSearchResponse, BandUpdateRequest };