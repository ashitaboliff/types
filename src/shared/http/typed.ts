import type { RouteConfig, z } from '@hono/zod-openapi'
import type { Context } from 'hono'
import type { ContentfulStatusCode } from 'hono/utils/http-status'

export type JsonBody<
	R extends RouteConfig,
	S extends ContentfulStatusCode,
> = R['responses'] extends {
	[K in S]: {
		content: {
			'application/json': { schema: infer Schema }
		}
	}
}
	? z.infer<Schema>
	: never

export const respondJson = <
	R extends RouteConfig,
	S extends ContentfulStatusCode,
	C extends Context,
>(
	c: C,
	status: S,
	body: JsonBody<R, S>,
) => c.json(body, status)
