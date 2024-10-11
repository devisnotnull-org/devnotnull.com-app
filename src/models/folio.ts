import { z } from 'zod';

export const IFolioPayloadSchema = z.object({
  title: z.string(),
  primaryMediaItem: z.object({
    href: z.string().url(),
    text: z.string().optional(),
  }),
  secondaryMediaItems: z.array(
    z.object({
      href: z.string().url(),
      text: z.string().optional(),
    })
  ),
});

export type IFolioPayload = z.infer<typeof IFolioPayloadSchema>;
