import { z } from 'zod';

export const MetadataPayloadSchema = z.object({
  title: z.string(),
  summary: z.string(),
  blurb: z.string(),
});

export type IMetadataPayload = z.infer<typeof MetadataPayloadSchema>;
