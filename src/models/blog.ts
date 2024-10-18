import { z } from 'zod';

import { AssetSchema } from './common/asset';
import { BaseContentfulRecord } from './common/base';

export const BlogFieldsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  image: z.array(AssetSchema),
  blogContent: z
    .object({
      nodeType: z.string(),
      content: z.array(z.any()),
    })
    .optional(),
});

export const BlogSchema = BaseContentfulRecord(BlogFieldsSchema);

export type BlogSchemaType = z.infer<typeof BlogSchema>;
