import { describe, expect, it } from 'vitest'
import {
	PlaylistVideosQuerySchema,
	VideoAdminSyncRequestSchema,
	VideoAdminSyncStatusResponseSchema,
	VideoIdsQuerySchema,
	VideoSearchResponseSchema,
} from '../src/modules/video/schema'

describe('Video schemas', () => {
	it('defaults playlist videos query pagination', () => {
		const parsed = PlaylistVideosQuerySchema.parse({})
		expect(parsed.page).toBe(1)
		expect(parsed.videoPerPage).toBe(10)
	})

	it('allows empty admin sync payload and limits max ids', () => {
		expect(VideoAdminSyncRequestSchema.parse({})).toEqual({})
		expect(
			VideoAdminSyncRequestSchema.safeParse({
				playlistIds: Array(100).fill('id'),
			}).success,
		).toBe(true)
		expect(
			VideoAdminSyncRequestSchema.safeParse({
				playlistIds: Array(101).fill('id'),
			}).success,
		).toBe(false)
	})

	it('video ids query type is optional and constrained', () => {
		expect(VideoIdsQuerySchema.safeParse({}).success).toBe(true)
		expect(VideoIdsQuerySchema.safeParse({ type: 'video' }).success).toBe(true)
		expect(VideoIdsQuerySchema.safeParse({ type: 'playlist' }).success).toBe(
			true,
		)
		expect(VideoIdsQuerySchema.safeParse({ type: 'other' }).success).toBe(false)
	})

	it('search response enforces discriminated union items', () => {
		const result = VideoSearchResponseSchema.safeParse({
			items: [
				{
					type: 'playlist',
					playlistId: 'pl1',
					title: 'live',
					link: 'https://example.com',
					liveDate: '2024-01-01',
					videoId: 'vid1',
					createdAt: '2024-01-01',
					updatedAt: '2024-01-02',
				},
			],
			total: 1,
		})
		expect(result.success).toBe(true)
	})

	it('sync status response accepts nullable timestamps', () => {
		const result = VideoAdminSyncStatusResponseSchema.safeParse({
			jobId: 'job-1',
			status: 'processing',
			queuedAt: '2025-01-01T00:00:00Z',
			startedAt: null,
			finishedAt: null,
			error: null,
		})
		expect(result.success).toBe(true)
	})
})
