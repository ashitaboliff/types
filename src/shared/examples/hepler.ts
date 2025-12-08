const USER_ROLES = ['GRADUATE', 'STUDENT'] as const
const USER_PARTS = [
	'VOCAL',
	'BACKING_GUITAR',
	'LEAD_GUITAR',
	'BASS',
	'DRUMS',
	'KEYBOARD',
	'OTHER',
] as const

export const pickRole = () => USER_ROLES[1]

export const pickPart = () => USER_PARTS[2]
