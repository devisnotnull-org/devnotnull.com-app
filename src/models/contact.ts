import { z } from 'zod';

export const ContactPayloadSchema = z.object({
  icon: z.string(),
  text: z.string(),
  link: z.string().optional(),
});

export type IContactPayload = z.infer<typeof ContactPayloadSchema>;
