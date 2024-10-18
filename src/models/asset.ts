import { z } from 'zod';

export const AssetFieldsSchema = z.object({
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

export type AssetFieldsSchemaType = z.infer<typeof AssetFieldsSchema>;

export const AssetSysSchema = z.object({
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

export type AssetSysSchemaType = z.infer<typeof AssetSysSchema>;

export const AssetSchema = z.object({
  sys: AssetSysSchema,
  fields: AssetFieldsSchema,
});

export type AssetSchemaType = z.infer<typeof AssetSchema>;
