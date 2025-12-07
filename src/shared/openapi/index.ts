import { createRoute, type RouteConfig, z } from '@hono/zod-openapi'
import { HTTP_STATUS, HTTP_STATUS_MESSAGE } from '@/shared/http'

export type FeatureTag = {
	name: string
	description?: string
}

const registeredTags = new Map<string, FeatureTag>()

export const registerFeatureTag = (tag: FeatureTag) => {
	registeredTags.set(tag.name, tag)
	return tag
}

export const listRegisteredTags = () => Array.from(registeredTags.values())

export const ErrorResponseSchema = z
	.object({ error: z.string() })
	.openapi('ErrorResponse')

export const DEFAULT_UNAUTHORIZED_RESPONSE = {
	description: HTTP_STATUS_MESSAGE[HTTP_STATUS.UNAUTHORIZED],
	content: {
		'application/json': {
			schema: ErrorResponseSchema,
		},
	},
} as const

export const createApiRoute = <
	const P extends string,
	const R extends Omit<RouteConfig, 'path'> & { path: P },
>(
	config: R,
) => createRoute<P, R>(config)

export const createAuthenticatedRoute = <
	const P extends string,
	const R extends Omit<RouteConfig, 'path'> & { path: P },
>(
	config: R,
) =>
	createRoute<P, R>({
		...config,
		responses: {
			...config.responses,
			[HTTP_STATUS.UNAUTHORIZED]:
				config.responses[HTTP_STATUS.UNAUTHORIZED] ??
				DEFAULT_UNAUTHORIZED_RESPONSE,
		},
	})
