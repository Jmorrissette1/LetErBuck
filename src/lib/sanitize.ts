// src/lib/sanitize.ts
import { z } from "zod";

/**
 * Basic string cleaners to prevent header injection, control chars,
 * and to standardize whitespace.
 */
const stripControl = (s: string) => s.replace(/[\u0000-\u001F\u007F]/g, "");
const stripHeaderBreaks = (s: string) => s.replace(/[\r\n]+/g, " ");
const collapseWhitespace = (s: string) => s.replace(/\s+/g, " ").trim();
const clean = (s: string) => collapseWhitespace(stripHeaderBreaks(stripControl(s)));

export const ManageSubSchema = z.object({
  firstName: z.string().min(1, "First name required").max(50).transform(clean),
  lastName: z.string().min(1, "Last name required").max(50).transform(clean),
  email: z.string().min(3).max(254).email("Invalid email").transform((e) => clean(e).toLowerCase()),
  phone: z.string().max(30).optional().nullable().transform((v) => (typeof v === "string" ? clean(v) : v)),
  plateNum: z.string().max(15).optional().nullable().transform((v) => (typeof v === "string" ? clean(v) : v)),
  sticker: z.string().max(20).optional().nullable().transform((v) => (typeof v === "string" ? clean(v) : v)),
  locationSelect: z.string().min(1, "Location required").transform(clean),
  subscriptionType: z.string().max(40).optional().nullable().transform((v) => (typeof v === "string" ? clean(v) : v)),
  comments: z.string().max(2000).optional().nullable().transform((v) => (typeof v === "string" ? clean(v) : v)),
});

/**
 * Use on the server in your API route.
 * Throws ZodError if invalid; catch it to return 400.
 */
export function sanitizeManageSub(input: unknown) {
  return ManageSubSchema.parse(input);
}
