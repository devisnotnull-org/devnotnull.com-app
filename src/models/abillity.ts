import { z } from 'zod';

export const AbillitySchema = z.object({
  subject: z.string(),
  skills: z.array(z.string()),
});

export type AbillitySchemaType = z.infer<typeof AbillitySchema>;
