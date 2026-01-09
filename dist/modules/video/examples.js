import { createExampleClock } from "../../shared/examples/index.js";

//#region src/modules/video/examples.ts
const clock = createExampleClock();
const now = clock.isoDateTime(clock.hoursFromNow(0));
const created = clock.isoDateTime(clock.hoursFromNow(-24));
const buildSearchQueryExample = () => ({
	liveOrBand: "live",
	sort: "new",
	page: 1,
	videoPerPage: 10,
	bandName: "Mock Band",
	liveName: "Mock Live"
});
const buildPlaylistDocExample = () => ({
	type: "playlist",
	playlistId: "PLmock123",
	title: "Mock Live 2025 (2025/09/15)",
	link: "https://www.youtube.com/playlist?list=PLmock123",
	liveDate: "2025年09月15日",
	videoId: "mockvideoid001",
	createdAt: created,
	updatedAt: now
});
const buildVideoDocExample = () => ({
	type: "video",
	videoId: "mockvideoid001",
	title: "Mock Band - Highlight 2025",
	link: "https://www.youtube.com/watch?v=mockvideoid001",
	liveDate: "2025年09月15日",
	playlistId: "PLmock123",
	playlistTitle: "Mock Live 2025 (2025/09/15)",
	createdAt: clock.isoDateTime(clock.hoursFromNow(-23)),
	updatedAt: now
});
const buildSearchResponseExample = () => ({
	items: [buildPlaylistDocExample()],
	total: 1
});
const buildPlaylistVideosResponseExample = () => ({
	items: [buildVideoDocExample()],
	total: 1
});
const buildAdminSyncPayloadExample = () => ({ playlistIds: ["PLmock123", "PLmock456"] });
const buildAdminSyncResponseExample = () => ({
	ok: true,
	playlists: 2,
	videos: 24
});
const buildAdminSyncQueuedExample = () => ({
	status: "queued",
	message: "Sync job accepted. Processing in background."
});
const buildPlaylistDetailExample = () => ({
	...buildPlaylistDocExample(),
	videos: [buildVideoDocExample()]
});
const buildVideoDetailExample = () => buildVideoDocExample();
const buildVideoIdsResponseExample = () => [buildVideoDocExample().videoId, "mockvideoid002"];

//#endregion
export { buildAdminSyncPayloadExample, buildAdminSyncQueuedExample, buildAdminSyncResponseExample, buildPlaylistDetailExample, buildPlaylistDocExample, buildPlaylistVideosResponseExample, buildSearchQueryExample, buildSearchResponseExample, buildVideoDetailExample, buildVideoDocExample, buildVideoIdsResponseExample };