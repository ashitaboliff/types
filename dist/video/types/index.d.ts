import { PlaylistDetailResponseSchema, PlaylistDocSchema, PlaylistVideosQuerySchema, PlaylistVideosResponseSchema, VideoAdminSyncQueuedResponseSchema, VideoAdminSyncRequestSchema, VideoAdminSyncResponseSchema, VideoAdminSyncStatusResponseSchema, VideoDetailResponseSchema, VideoDocSchema, VideoIdsQuerySchema, VideoIdsResponseSchema, VideoSearchQuerySchema, VideoSearchResponseSchema } from "../schema/index.js";
import { z } from "zod";

//#region src/modules/video/types/index.d.ts
type PlaylistDoc = z.infer<typeof PlaylistDocSchema>;
type VideoDoc = z.infer<typeof VideoDocSchema>;
type PlaylistDetail = z.infer<typeof PlaylistDetailResponseSchema>;
type VideoDetail = z.infer<typeof VideoDetailResponseSchema>;
type VideoItem = z.infer<typeof VideoDocSchema>;
type PlaylistItem = z.infer<typeof PlaylistDetailResponseSchema>;
type VideoSearchQuery = z.infer<typeof VideoSearchQuerySchema>;
type VideoSearchResponse = z.infer<typeof VideoSearchResponseSchema>;
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
type VideoAdminSyncRequest = z.infer<typeof VideoAdminSyncRequestSchema>;
type VideoAdminSyncResponse = z.infer<typeof VideoAdminSyncResponseSchema>;
type VideoAdminSyncQueuedResponse = z.infer<typeof VideoAdminSyncQueuedResponseSchema>;
type VideoAdminSyncStatusResponse = z.infer<typeof VideoAdminSyncStatusResponseSchema>;
type PlaylistVideosQuery = z.infer<typeof PlaylistVideosQuerySchema>;
type PlaylistVideosResponse = z.infer<typeof PlaylistVideosResponseSchema>;
type VideoIdsQuery = z.infer<typeof VideoIdsQuerySchema>;
type VideoIdsResponse = z.infer<typeof VideoIdsResponseSchema>;
//#endregion
export { PlaylistDetail, PlaylistDoc, PlaylistItem, PlaylistRaw, PlaylistSnippet, PlaylistVideoSnippet, PlaylistVideosQuery, PlaylistVideosResponse, SearchResult, SyncJobRecord, VideoAdminSyncQueuedResponse, VideoAdminSyncRequest, VideoAdminSyncResponse, VideoAdminSyncStatusResponse, VideoDetail, VideoDoc, VideoIdsQuery, VideoIdsResponse, VideoItem, VideoSearchQuery, VideoSearchResponse, VideoSyncQueueItem, YoutubeIdType };