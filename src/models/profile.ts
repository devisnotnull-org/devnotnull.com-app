import { z } from 'zod';

export const ProfilePayloadSchema = z.object({
  image: z.string(),
  title: z.string(),
  subTitle: z.string(),
});

export type IProfilePayload = z.infer<typeof ProfilePayloadSchema>;
