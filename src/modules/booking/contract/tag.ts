import { registerFeatureTag } from '@/shared/openapi'

export const BOOKING_TAG = registerFeatureTag({
	name: 'Bookings',
	description: 'スタジオ予約・管理を扱うAPI。',
})
