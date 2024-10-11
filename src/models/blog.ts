import { z } from 'zod';

import { IAsset, BaseContentfulRecord } from './common';

export const BlogFieldsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  image: z.array(IAsset),
  blogContent: z
    .object({
      nodeType: z.string(),
      content: z.array(z.any()),
    })
    .optional(),
});

export const BlogSchema = BaseContentfulRecord(BlogFieldsSchema);

export type BlogSchemaType = z.infer<typeof BlogSchema>;
