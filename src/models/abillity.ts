import { z } from 'zod';

export const AbillityPayloadSchema = z.object({
  subject: z.string(),
  skills: z.array(z.string()),
});

export type IAbillityPayload = z.infer<typeof AbillityPayloadSchema>;
