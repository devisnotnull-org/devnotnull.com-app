import { z } from 'zod';

export const AssetDataPayloadSchema = z.object({
  title: z.string(),
  file: z.object({
    url: z.string(),
    details: z.object({
      size: z.number(),
      image: z.object({
        width: z.number(),
        height: z.number(),
      }),
    }),
  }),
  fileName: z.string(),
  contentType: z.string(),
});

export type IAssetDataPayload = z.infer<typeof AssetDataPayloadSchema>;

export const AssetSysPayloadSchema = z.object({
  id: z.string(),
  type: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  environment: z.object({
    sys: z.object({
      id: z.string(),
      type: z.string(),
      linkType: z.string(),
    }),
  }),
  space: z.object({
    sys: z.object({
      type: z.string(),
      linkType: z.string(),
      id: z.string(),
    }),
  }),
});

export type IAssetSysPayload = z.infer<typeof AssetSysPayloadSchema>;

export const AssetPayloadSchema = z.object({
  sys: AssetSysPayloadSchema,
  fields: AssetDataPayloadSchema,
});

export type IAssetPayload = z.infer<typeof AssetPayloadSchema>;
