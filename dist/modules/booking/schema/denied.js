import { buildAdminDeniedBookingCreateExample, buildAdminDeniedBookingResponseExample, buildDeniedBookingQueryExample, buildDeniedBookingResponseExample } from "../examples/denied.js";
import { z } from "@hono/zod-openapi";

//#region src/modules/booking/schema/denied.ts
const DeniedBookingIdParamSchema = z.object({ deniedBookingId: z.string().min(1) });
const AdminDeniedSortSchema = z.enum([
	"new",
	"old",
	"relativeCurrent"
]);
const DeniedBookingSchema = z.object({
	id: z.string(),
	startDate: z.string(),
	startTime: z.number().int(),
	endTime: z.number().int().nullable(),
	description: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isDeleted: z.boolean()
}).openapi({
	title: "DeniedBooking",
	example: buildDeniedBookingResponseExample()[0]
});
const AdminDeniedBookingQuerySchema = z.object({
	sort: AdminDeniedSortSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(100).default(10),
	today: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).default((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))
}).openapi({
	title: "AdminDeniedBookingQuery",
	example: buildDeniedBookingQueryExample()
});
const AdminDeniedBookingCreateSchema = z.object({
	startDate: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}$/), z.array(z.string().regex(/^\d{4}-\d{2}-\d{2}$/))]),
	startTime: z.number().int().min(0),
	endTime: z.number().int().min(0).optional(),
	description: z.string().min(1)
}).openapi({
	title: "AdminDeniedBookingCreate",
	example: buildAdminDeniedBookingCreateExample()
});
const AdminDeniedBookingResponseSchema = z.object({
	data: z.array(DeniedBookingSchema),
	totalCount: z.number().min(0)
}).openapi({
	title: "AdminDeniedBookingResponse",
	example: buildAdminDeniedBookingResponseExample()
});
const DeniedBookingIdParam = DeniedBookingIdParamSchema.openapi({
	param: {
		name: "deniedBookingId",
		in: "path",
		description: "予約禁止ID",
		required: true
	},
	example: "denied_1"
});

//#endregion
export { AdminDeniedBookingCreateSchema, AdminDeniedBookingQuerySchema, AdminDeniedBookingResponseSchema, AdminDeniedSortSchema, DeniedBookingIdParam, DeniedBookingSchema };