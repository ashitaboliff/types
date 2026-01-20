import { z } from "zod";

//#region src/modules/booking/schema/denied.ts
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const DeniedBookingIdParamSchema = z.object({ deniedBookingId: z.string().min(1) });
const DeniedBookingSortSchema = z.enum([
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
});
const DeniedBookingAdminQuerySchema = z.object({
	sort: DeniedBookingSortSchema.default("new"),
	page: z.coerce.number().int().positive().default(1),
	perPage: z.coerce.number().int().min(1).max(100).default(10),
	today: z.string().regex(dateRegex).default((/* @__PURE__ */ new Date()).toISOString().slice(0, 10))
});
const DeniedBookingCreateRequestSchema = z.object({
	startDate: z.union([z.string().regex(dateRegex), z.array(z.string().regex(dateRegex))]),
	startTime: z.number().int().min(0),
	endTime: z.number().int().min(0).optional(),
	description: z.string().min(1)
});
const DeniedBookingAdminListResponseSchema = z.object({
	data: z.array(DeniedBookingSchema),
	totalCount: z.number().min(0)
});

//#endregion
export { DeniedBookingAdminListResponseSchema, DeniedBookingAdminQuerySchema, DeniedBookingCreateRequestSchema, DeniedBookingIdParamSchema, DeniedBookingSchema, DeniedBookingSortSchema };