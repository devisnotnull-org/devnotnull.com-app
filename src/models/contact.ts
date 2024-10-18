import { z } from 'zod';

export const ContactSchema = z.object({
  icon: z.string(),
  text: z.string(),
  link: z.string().optional(),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
