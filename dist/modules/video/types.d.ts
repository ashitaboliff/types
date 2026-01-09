import { AdminSyncPayloadSchema, AdminSyncQueuedResponseSchema, AdminSyncResponseSchema, PlaylistDetailSchema, PlaylistDocSchema, PlaylistVideosQuerySchema, PlaylistVideosResponseSchema, SearchResponseSchema, VideoDetailSchema, VideoDocSchema, VideoIdsQuerySchema, VideoIdsResponseSchema, YoutubeSearchQuerySchema } from "./schema.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/video/types.d.ts
type PlaylistDoc = z.infer<typeof PlaylistDocSchema>;
type VideoDoc = z.infer<typeof VideoDocSchema>;
type PlaylistDetail = z.infer<typeof PlaylistDetailSchema>;
type VideoDetail = z.infer<typeof VideoDetailSchema>;
type VideoItem = z.infer<typeof VideoDocSchema>;
type PlaylistItem = z.infer<typeof PlaylistDetailSchema>;
type YoutubeSearchQuery = z.infer<typeof YoutubeSearchQuerySchema>;
type SearchResponse = z.infer<typeof SearchResponseSchema>;
type SearchResult<T extends PlaylistDoc | VideoDoc> = {
  items: T[];
  total: number;
};
type YoutubeIdType = z.infer<typeof VideoIdsQuerySchema>['type'] extends undefined | null ? 'video' | 'playlist' : NonNullable<z.infer<typeof VideoIdsQuerySchema>['type']>;
type SyncJobRecord = {
  triggeredAt: string;
  succeeded: boolean;
  playlists: number;
  videos: number;
  durationMs: number;
  error?: string;
};
type PlaylistSnippet = {
  id: string;
  title?: string;
  publishedAt?: string;
};
type PlaylistVideoSnippet = {
  playlistId: string;
  videoId: string;
  title?: string;
  publishedAt?: string;
};
type PlaylistRaw = {
  playlistId: string;
  title?: string;
  publishedAt?: string;
  videos: PlaylistVideoSnippet[];
};
type VideoSyncQueueItem = {
  type: 'playlist';
  playlistId: string;
} | {
  type: 'delete-playlist';
  playlistId: string;
} | {
  type: 'full';
};
type AdminSyncPayload = z.infer<typeof AdminSyncPayloadSchema>;
type AdminSyncResponse = z.infer<typeof AdminSyncResponseSchema>;
type AdminSyncQueuedResponse = z.infer<typeof AdminSyncQueuedResponseSchema>;
type PlaylistVideosQuery = z.infer<typeof PlaylistVideosQuerySchema>;
type PlaylistVideosResponse = z.infer<typeof PlaylistVideosResponseSchema>;
type VideoIdsQuery = z.infer<typeof VideoIdsQuerySchema>;
type VideoIdsResponse = z.infer<typeof VideoIdsResponseSchema>;
//#endregion
export { AdminSyncPayload, AdminSyncQueuedResponse, AdminSyncResponse, PlaylistDetail, PlaylistDoc, PlaylistItem, PlaylistRaw, PlaylistSnippet, PlaylistVideoSnippet, PlaylistVideosQuery, PlaylistVideosResponse, SearchResponse, SearchResult, SyncJobRecord, VideoDetail, VideoDoc, VideoIdsQuery, VideoIdsResponse, VideoItem, VideoSyncQueueItem, YoutubeIdType, YoutubeSearchQuery };