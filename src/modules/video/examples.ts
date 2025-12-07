import { createExampleClock } from '@/shared/examples'

const clock = createExampleClock()

const now = clock.isoDateTime(clock.hoursFromNow(0))
const created = clock.isoDateTime(clock.hoursFromNow(-24))

export const buildSearchQueryExample = () => ({
	liveOrBand: 'live' as const,
	sort: 'new' as const,
	page: 1,
	videoPerPage: 10,
	bandName: 'Mock Band',
	liveName: 'Mock Live',
})

export const buildPlaylistDocExample = () => ({
	type: 'playlist' as const,
	playlistId: 'PLmock123',
	title: 'Mock Live 2025 (2025/09/15)',
	link: 'https://www.youtube.com/playlist?list=PLmock123',
	liveDate: '2025年09月15日',
	videoId: 'mockvideoid001',
	createdAt: created,
	updatedAt: now,
})

export const buildVideoDocExample = () => ({
	type: 'video' as const,
	videoId: 'mockvideoid001',
	title: 'Mock Band - Highlight 2025',
	link: 'https://www.youtube.com/watch?v=mockvideoid001',
	liveDate: '2025年09月15日',
	playlistId: 'PLmock123',
	playlistTitle: 'Mock Live 2025 (2025/09/15)',
	createdAt: clock.isoDateTime(clock.hoursFromNow(-23)),
	updatedAt: now,
})

export const buildSearchResponseExample = () => ({
	items: [buildPlaylistDocExample()],
	total: 1,
})

export const buildPlaylistVideosResponseExample = () => ({
	items: [buildVideoDocExample()],
	total: 1,
})

export const buildAdminSyncPayloadExample = () => ({
	playlistIds: ['PLmock123', 'PLmock456'],
})

export const buildAdminSyncResponseExample = () => ({
	ok: true as const,
	playlists: 2,
	videos: 24,
})

export const buildAdminSyncQueuedExample = () => ({
	status: 'queued' as const,
	message: 'Sync job accepted. Processing in background.',
})

export const buildPlaylistDetailExample = () => ({
	...buildPlaylistDocExample(),
	videos: [buildVideoDocExample()],
})

export const buildVideoDetailExample = () => buildVideoDocExample()

export const buildVideoIdsResponseExample = () => [
	buildVideoDocExample().videoId,
	'mockvideoid002',
]
