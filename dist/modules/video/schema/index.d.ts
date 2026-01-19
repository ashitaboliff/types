import { z } from "zod";

//#region src/modules/video/schema/index.d.ts
declare const PlaylistIdParamSchema: z.ZodObject<{
  playlistId: z.ZodString;
}, z.core.$strip>;
declare const VideoIdParamSchema: z.ZodObject<{
  videoId: z.ZodString;
}, z.core.$strip>;
declare const VideoSearchTargetSchema: z.ZodEnum<{
  live: "live";
  band: "band";
}>;
declare const VideoSearchQuerySchema: z.ZodObject<{
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
declare const PlaylistDetailResponseSchema: z.ZodObject<{
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
declare const VideoDetailResponseSchema: z.ZodObject<{
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
declare const VideoAdminSyncRequestSchema: z.ZodDefault<z.ZodObject<{
  playlistIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
declare const VideoAdminSyncResponseSchema: z.ZodObject<{
  ok: z.ZodLiteral<true>;
  playlists: z.ZodNumber;
  videos: z.ZodNumber;
}, z.core.$strip>;
declare const VideoAdminSyncQueuedResponseSchema: z.ZodObject<{
  status: z.ZodLiteral<"queued">;
  message: z.ZodString;
}, z.core.$strip>;
declare const VideoSearchResponseSchema: z.ZodObject<{
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
declare const videoExamples: {
  searchQuery: {
    liveOrBand: "live";
    sort: "new";
    page: number;
    videoPerPage: number;
    bandName: string;
    liveName: string;
  };
  playlistDoc: {
    type: "playlist";
    playlistId: string;
    title: string;
    link: string;
    liveDate: string;
    videoId: string;
    createdAt: string;
    updatedAt: string;
  };
  videoDoc: {
    type: "video";
    videoId: string;
    title: string;
    link: string;
    liveDate: string;
    playlistId: string;
    playlistTitle: string;
    createdAt: string;
    updatedAt: string;
  };
  playlistDetail: {
    videos: {
      type: "video";
      videoId: string;
      title: string;
      link: string;
      liveDate: string;
      playlistId: string;
      playlistTitle: string;
      createdAt: string;
      updatedAt: string;
    }[];
    type: "playlist";
    playlistId: string;
    title: string;
    link: string;
    liveDate: string;
    videoId: string;
    createdAt: string;
    updatedAt: string;
  };
  videoDetail: {
    type: "video";
    videoId: string;
    title: string;
    link: string;
    liveDate: string;
    playlistId: string;
    playlistTitle: string;
    createdAt: string;
    updatedAt: string;
  };
  adminSyncRequest: {
    playlistIds: string[];
  };
  adminSyncResponse: {
    ok: true;
    playlists: number;
    videos: number;
  };
  adminSyncQueued: {
    status: "queued";
    message: string;
  };
  searchResponse: {
    items: {
      type: "playlist";
      playlistId: string;
      title: string;
      link: string;
      liveDate: string;
      videoId: string;
      createdAt: string;
      updatedAt: string;
    }[];
    total: number;
  };
  playlistVideosResponse: {
    items: {
      type: "video";
      videoId: string;
      title: string;
      link: string;
      liveDate: string;
      playlistId: string;
      playlistTitle: string;
      createdAt: string;
      updatedAt: string;
    }[];
    total: number;
  };
  videoIdsResponse: string[];
};
//#endregion
export { PlaylistDetailResponseSchema, PlaylistDocSchema, PlaylistIdParamSchema, PlaylistVideosQuerySchema, PlaylistVideosResponseSchema, VideoAdminSyncQueuedResponseSchema, VideoAdminSyncRequestSchema, VideoAdminSyncResponseSchema, VideoDetailResponseSchema, VideoDocSchema, VideoIdParamSchema, VideoIdsQuerySchema, VideoIdsResponseSchema, VideoSearchQuerySchema, VideoSearchResponseSchema, VideoSearchTargetSchema, videoExamples };