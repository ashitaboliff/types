import { SortOrderSchema } from "../../shared/schema/index.js";
import { z } from "zod";

//#region src/modules/video/schema/index.ts
const PlaylistIdParamSchema = z.object({ playlistId: z.string().min(1) });
const VideoIdParamSchema = z.object({ videoId: z.string().min(1) });
const VideoSearchTargetSchema = z.enum(["live", "band"]);
const VideoSearchQuerySchema = z.object({
	liveOrBand: VideoSearchTargetSchema,
	bandName: z.string().optional(),
	liveName: z.string().optional(),
	sort: SortOrderSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	videoPerPage: z.coerce.number().int().min(1).max(200).default(10)
});
const PlaylistDocSchema = z.object({
	type: z.literal("playlist"),
	playlistId: z.string(),
	title: z.string(),
	link: z.string(),
	liveDate: z.string(),
	videoId: z.string(),
	createdAt: z.string(),
	updatedAt: z.string()
});
const VideoDocSchema = z.object({
	type: z.literal("video"),
	videoId: z.string(),
	title: z.string(),
	link: z.string(),
	liveDate: z.string(),
	playlistId: z.string(),
	playlistTitle: z.string(),
	createdAt: z.string(),
	updatedAt: z.string()
});
const PlaylistDetailResponseSchema = PlaylistDocSchema.extend({ videos: z.array(VideoDocSchema) });
const VideoDetailResponseSchema = VideoDocSchema;
const VideoAdminSyncRequestSchema = z.object({ playlistIds: z.array(z.string().min(1)).max(100).optional() }).default({});
const VideoAdminSyncResponseSchema = z.object({
	ok: z.literal(true),
	playlists: z.number().int().nonnegative(),
	videos: z.number().int().nonnegative()
});
const VideoAdminSyncQueuedResponseSchema = z.object({
	status: z.literal("queued"),
	message: z.string(),
	jobId: z.string()
});
const VideoAdminSyncStatusSchema = z.enum([
	"queued",
	"processing",
	"succeeded",
	"failed"
]);
const VideoAdminSyncStatusResponseSchema = z.object({
	jobId: z.string(),
	status: VideoAdminSyncStatusSchema,
	queuedAt: z.string(),
	startedAt: z.string().nullable(),
	finishedAt: z.string().nullable(),
	error: z.string().nullable()
});
const VideoSearchResponseSchema = z.object({
	items: z.array(z.discriminatedUnion("type", [PlaylistDocSchema, VideoDocSchema])),
	total: z.number().int().nonnegative()
});
const PlaylistVideosQuerySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	videoPerPage: z.coerce.number().int().min(1).max(50).default(10)
});
const PlaylistVideosResponseSchema = z.object({
	items: z.array(VideoDocSchema),
	total: z.number().int().nonnegative()
});
const VideoIdsQuerySchema = z.object({ type: z.enum(["video", "playlist"]).optional() });
const VideoIdsResponseSchema = z.array(z.string());

//#endregion
export { PlaylistDetailResponseSchema, PlaylistDocSchema, PlaylistIdParamSchema, PlaylistVideosQuerySchema, PlaylistVideosResponseSchema, VideoAdminSyncQueuedResponseSchema, VideoAdminSyncRequestSchema, VideoAdminSyncResponseSchema, VideoAdminSyncStatusResponseSchema, VideoAdminSyncStatusSchema, VideoDetailResponseSchema, VideoDocSchema, VideoIdParamSchema, VideoIdsQuerySchema, VideoIdsResponseSchema, VideoSearchQuerySchema, VideoSearchResponseSchema, VideoSearchTargetSchema };