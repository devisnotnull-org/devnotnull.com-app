import { z } from 'zod';

export const EducationSchema = z.object({
  institute: z.string(),
  subject: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  qualifications: z.array(z.string()),
});
