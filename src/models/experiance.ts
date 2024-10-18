import { z } from 'zod';

export const ExperiancePayloadSchema = z.object({
  year: z.string(),
  company: z.string(),
  jobTitle: z.string(),
  description: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  order: z.number(),
  summary: z.any(),
});

export type ExperiancePayloadSchemaType = z.infer<typeof ExperiancePayloadSchema>;