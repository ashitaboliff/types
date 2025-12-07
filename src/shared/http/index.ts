import type { RouteConfig } from '@hono/zod-openapi'
import type { Context } from 'hono'
import { type JsonBody, respondJson } from './typed'

export const HTTP_STATUS = {
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	CONFLICT: 409,
	UNPROCESSABLE_ENTITY: 422,
	INTERNAL_SERVER_ERROR: 500,
	SERVICE_UNAVAILABLE: 503,
} as const

export const HTTP_STATUS_MESSAGE: Record<number, string> = {
	[HTTP_STATUS.OK]: 'OK',
	[HTTP_STATUS.CREATED]: 'Created',
	[HTTP_STATUS.ACCEPTED]: 'Accepted',
	[HTTP_STATUS.NO_CONTENT]: 'No Content',
	[HTTP_STATUS.BAD_REQUEST]: 'Bad Request',
	[HTTP_STATUS.UNAUTHORIZED]: 'Unauthorized',
	[HTTP_STATUS.FORBIDDEN]: 'Forbidden',
	[HTTP_STATUS.NOT_FOUND]: 'Not Found',
	[HTTP_STATUS.CONFLICT]: 'Conflict',
	[HTTP_STATUS.UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
	[HTTP_STATUS.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
	[HTTP_STATUS.SERVICE_UNAVAILABLE]: 'Service Unavailable',
}

export const ok = <R extends RouteConfig, C extends Context>(
	c: C,
	body: JsonBody<R, typeof HTTP_STATUS.OK>,
) => respondJson<R, typeof HTTP_STATUS.OK, C>(c, HTTP_STATUS.OK, body)
export const createdPayload = <R extends RouteConfig, C extends Context>(
	c: C,
	body: JsonBody<R, typeof HTTP_STATUS.CREATED>,
) => respondJson<R, typeof HTTP_STATUS.CREATED, C>(c, HTTP_STATUS.CREATED, body)
export const created = (c: Context) => c.body(null, HTTP_STATUS.CREATED)
export const accepted = <R extends RouteConfig, C extends Context>(
	c: C,
	body: JsonBody<R, typeof HTTP_STATUS.ACCEPTED>,
) =>
	respondJson<R, typeof HTTP_STATUS.ACCEPTED, C>(c, HTTP_STATUS.ACCEPTED, body)
export const noContent = (c: Context) => c.body(null, HTTP_STATUS.NO_CONTENT)
export const badRequest = (c: Context, message: string) =>
	c.json({ error: message }, HTTP_STATUS.BAD_REQUEST)
export const badRequestPayload = <R extends RouteConfig, C extends Context>(
	c: C,
	body: JsonBody<R, typeof HTTP_STATUS.BAD_REQUEST>,
) =>
	respondJson<R, typeof HTTP_STATUS.BAD_REQUEST, C>(
		c,
		HTTP_STATUS.BAD_REQUEST,
		body,
	)
export const unauthorized = (c: Context, message = 'Unauthorized') =>
	c.json({ error: message }, HTTP_STATUS.UNAUTHORIZED)
export const forbidden = (c: Context, message = 'Forbidden') =>
	c.json({ error: message }, HTTP_STATUS.FORBIDDEN)
export const forbiddenPayload = <R extends RouteConfig, C extends Context>(
	c: C,
	body: JsonBody<R, typeof HTTP_STATUS.FORBIDDEN>,
) =>
	respondJson<R, typeof HTTP_STATUS.FORBIDDEN, C>(
		c,
		HTTP_STATUS.FORBIDDEN,
		body,
	)
export const notFound = (c: Context, message = 'Not Found') =>
	c.json({ error: message }, HTTP_STATUS.NOT_FOUND)
export const conflict = (c: Context, message: string) =>
	c.json({ error: message }, HTTP_STATUS.CONFLICT)
export const unprocessableEntity = (c: Context, message: string) =>
	c.json({ error: message }, HTTP_STATUS.UNPROCESSABLE_ENTITY)
export const internalError = (c: Context, message = 'Internal Server Error') =>
	c.json({ error: message }, HTTP_STATUS.INTERNAL_SERVER_ERROR)
export const serviceUnavailable = (
	c: Context,
	message = 'Service Unavailable',
) => c.json({ error: message }, HTTP_STATUS.SERVICE_UNAVAILABLE)
