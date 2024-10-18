import { z } from 'zod';

const SysSchema = 
  z.object({
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
      environment: z.object({
        sys: z.object({
          id: z.string(),
          type: z.string(),
          linkType: z.string(),
        }),
      }),
      revision: z.number(),
      contentType: z.object({
        sys: z.object({
          type: z.string(),
          linkType: z.string(),
          id: z.string(),
        }),
      }),
      locale: z.string(),
    }),
  });

  export type SysSchemaType = z.infer<typeof SysSchema>;