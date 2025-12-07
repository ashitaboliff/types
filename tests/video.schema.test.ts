import { describe, expect, it } from 'vitest'
import {
	AdminSyncPayloadSchema,
	PlaylistVideosQuerySchema,
	SearchResponseSchema,
	VideoIdsQuerySchema,
} from '../src/modules/video/schema'

describe('Video schemas', () => {
	it('defaults playlist videos query pagination', () => {
		const parsed = PlaylistVideosQuerySchema.parse({})
		expect(parsed.page).toBe(1)
		expect(parsed.videoPerPage).toBe(10)
	})

	it('allows empty admin sync payload and limits max ids', () => {
		expect(AdminSyncPayloadSchema.parse({})).toEqual({})
		expect(
			AdminSyncPayloadSchema.safeParse({ playlistIds: Array(100).fill('id') })
				.success,
		).toBe(true)
		expect(
			AdminSyncPayloadSchema.safeParse({ playlistIds: Array(101).fill('id') })
				.success,
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
		const result = SearchResponseSchema.safeParse({
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
})
