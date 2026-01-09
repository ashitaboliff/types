import { z } from "@hono/zod-openapi";

//#region src/modules/video/schema.d.ts
declare const PlaylistIdParam: z.ZodObject<{
  playlistId: z.ZodString;
}, z.core.$strip>;
declare const VideoIdParam: z.ZodObject<{
  videoId: z.ZodString;
}, z.core.$strip>;
declare const liveOrBandSchema: z.ZodEnum<{
  live: "live";
  band: "band";
}>;
declare const YoutubeSearchQuerySchema: z.ZodObject<{
  liveOrBand: z.ZodEnum<{
    live: "live";
    band: "band";
  }>;
  bandName: z.ZodOptional<z.ZodString>;
  liveName: z.ZodOptional<z.ZodString>;
  sort: z.ZodDefault<z.ZodEnum<{
    new: "new";
    old: "old";
  }>>;
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  videoPerPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const PlaylistDocSchema: z.ZodObject<{
  type: z.ZodLiteral<"playlist">;
  playlistId: z.ZodString;
  title: z.ZodString;
  link: z.ZodString;
  liveDate: z.ZodString;
  videoId: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
}, z.core.$strip>;
declare const VideoDocSchema: z.ZodObject<{
  type: z.ZodLiteral<"video">;
  videoId: z.ZodString;
  title: z.ZodString;
  link: z.ZodString;
  liveDate: z.ZodString;
  playlistId: z.ZodString;
  playlistTitle: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
}, z.core.$strip>;
declare const PlaylistDetailSchema: z.ZodObject<{
  type: z.ZodLiteral<"playlist">;
  playlistId: z.ZodString;
  title: z.ZodString;
  link: z.ZodString;
  liveDate: z.ZodString;
  videoId: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
  videos: z.ZodArray<z.ZodObject<{
    type: z.ZodLiteral<"video">;
    videoId: z.ZodString;
    title: z.ZodString;
    link: z.ZodString;
    liveDate: z.ZodString;
    playlistId: z.ZodString;
    playlistTitle: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
  }, z.core.$strip>>;
}, z.core.$strip>;
declare const VideoDetailSchema: z.ZodObject<{
  type: z.ZodLiteral<"video">;
  videoId: z.ZodString;
  title: z.ZodString;
  link: z.ZodString;
  liveDate: z.ZodString;
  playlistId: z.ZodString;
  playlistTitle: z.ZodString;
  createdAt: z.ZodString;
  updatedAt: z.ZodString;
}, z.core.$strip>;
declare const AdminSyncPayloadSchema: z.ZodDefault<z.ZodObject<{
  playlistIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
declare const AdminSyncResponseSchema: z.ZodObject<{
  ok: z.ZodLiteral<true>;
  playlists: z.ZodNumber;
  videos: z.ZodNumber;
}, z.core.$strip>;
declare const AdminSyncQueuedResponseSchema: z.ZodObject<{
  status: z.ZodLiteral<"queued">;
  message: z.ZodString;
}, z.core.$strip>;
declare const SearchResponseSchema: z.ZodObject<{
  items: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"playlist">;
    playlistId: z.ZodString;
    title: z.ZodString;
    link: z.ZodString;
    liveDate: z.ZodString;
    videoId: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
  }, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"video">;
    videoId: z.ZodString;
    title: z.ZodString;
    link: z.ZodString;
    liveDate: z.ZodString;
    playlistId: z.ZodString;
    playlistTitle: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
  }, z.core.$strip>], "type">>;
  total: z.ZodNumber;
}, z.core.$strip>;
declare const PlaylistVideosQuerySchema: z.ZodObject<{
  page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
  videoPerPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
declare const PlaylistVideosResponseSchema: z.ZodObject<{
  items: z.ZodArray<z.ZodObject<{
    type: z.ZodLiteral<"video">;
    videoId: z.ZodString;
    title: z.ZodString;
    link: z.ZodString;
    liveDate: z.ZodString;
    playlistId: z.ZodString;
    playlistTitle: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
  }, z.core.$strip>>;
  total: z.ZodNumber;
}, z.core.$strip>;
declare const VideoIdsQuerySchema: z.ZodObject<{
  type: z.ZodOptional<z.ZodEnum<{
    playlist: "playlist";
    video: "video";
  }>>;
}, z.core.$strip>;
declare const VideoIdsResponseSchema: z.ZodArray<z.ZodString>;
//#endregion
export { AdminSyncPayloadSchema, AdminSyncQueuedResponseSchema, AdminSyncResponseSchema, PlaylistDetailSchema, PlaylistDocSchema, PlaylistIdParam, PlaylistVideosQuerySchema, PlaylistVideosResponseSchema, SearchResponseSchema, VideoDetailSchema, VideoDocSchema, VideoIdParam, VideoIdsQuerySchema, VideoIdsResponseSchema, YoutubeSearchQuerySchema, liveOrBandSchema };