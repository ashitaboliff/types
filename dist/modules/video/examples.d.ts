//#region src/modules/video/examples.d.ts
declare const buildSearchQueryExample: () => {
  liveOrBand: "live";
  sort: "new";
  page: number;
  videoPerPage: number;
  bandName: string;
  liveName: string;
};
declare const buildPlaylistDocExample: () => {
  type: "playlist";
  playlistId: string;
  title: string;
  link: string;
  liveDate: string;
  videoId: string;
  createdAt: string;
  updatedAt: string;
};
declare const buildVideoDocExample: () => {
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
declare const buildSearchResponseExample: () => {
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
declare const buildPlaylistVideosResponseExample: () => {
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
declare const buildAdminSyncPayloadExample: () => {
  playlistIds: string[];
};
declare const buildAdminSyncResponseExample: () => {
  ok: true;
  playlists: number;
  videos: number;
};
declare const buildAdminSyncQueuedExample: () => {
  status: "queued";
  message: string;
};
declare const buildPlaylistDetailExample: () => {
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
declare const buildVideoDetailExample: () => {
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
declare const buildVideoIdsResponseExample: () => string[];
//#endregion
export { buildAdminSyncPayloadExample, buildAdminSyncQueuedExample, buildAdminSyncResponseExample, buildPlaylistDetailExample, buildPlaylistDocExample, buildPlaylistVideosResponseExample, buildSearchQueryExample, buildSearchResponseExample, buildVideoDetailExample, buildVideoDocExample, buildVideoIdsResponseExample };