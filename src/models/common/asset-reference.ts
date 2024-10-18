import { z } from "zod";

const AssetReferenceSchema = z.object({
    sys: z.object({
      id: z.string(),
      linkType: z.string(),
      type: z.string(),
    }),
  });

export type AssetReferenceSchemaType = z.infer<typeof AssetReferenceSchema>;