import { z } from "zod";

export const AssetSchema = z.object({
    metadata: z.object({
      tags: z.array(z.string()),
    }),
    sys: z.object({
      space: z.object({
        sys: z.object({
          type: z.string(),
          linkType: z.string(),
          id: z.string(),
        }),
      }),
      id: z.string(),
      type: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      revision: z.number(),
      locale: z.string(),
    }),
    fields: z.object({
      title: z.string(),
      description: z.string(),
      file: z.object({
        url: z.string(),
        details: z.object({
          size: z.number(),
          image: z.object({
            width: z.number(),
            height: z.number(),
          }),
        }),
        fileName: z.string(),
        contentType: z.string(),
      }),
    }),
  });

  export type AssetSchemaType = z.infer<typeof AssetSchema>;