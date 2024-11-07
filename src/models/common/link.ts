import { z } from "zod";

const LinkSchema = z.object({
    href: z.string().url(),
    text: z.string().optional(),
});

export type LinkSchemaType = z.infer<typeof LinkSchema>;