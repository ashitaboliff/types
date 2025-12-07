import {
	UserAccountRoleSchema,
	UserPartSchema,
	UserRoleSchema,
} from '@/modules/user/schema'
import type { UserAccountRole, UserPart, UserRole } from '@/modules/user/types'

export const pickRole = (): UserRole => {
	if (UserAccountRoleSchema.options.includes('STUDENT' as UserAccountRole))
		return 'STUDENT'
	return UserRoleSchema.options[0]
}

export const pickPart = (): UserPart => {
	if (UserPartSchema.options.includes('LEAD_GUITAR' as UserPart))
		return 'LEAD_GUITAR'
	return UserPartSchema.options[0]
}
