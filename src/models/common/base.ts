import { z } from 'zod';

import { AssetSchema } from "./asset";

export const BaseContentfulRecord = <T extends z.ZodTypeAny>(fields: T) =>
  z.object({
    metadata: z.object({
      tags: z.array(
        z.object({
          sys: z.object({
            type: z.string(),
            linkType: z.string(),
            id: z.string(),
          }),
        })
      ),
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
    fields: fields,
  });

export type BaseContentfulRecordType<T extends z.ZodTypeAny> = z.infer<ReturnType<typeof BaseContentfulRecord<T>>>;

const BaseContentPayload = <T extends z.ZodTypeAny>(fields: T) =>
  z.object({
    payload: BaseContentfulRecord(fields).extend({
      includes: z.object({
        Asset: z.array(AssetSchema),
      }),
    }),
  });

export type BaseContentPayloadType<T extends z.ZodTypeAny> = z.infer<ReturnType<typeof BaseContentPayload<T>>>;

const BaseContentListPayload = <T extends z.ZodTypeAny>(fields: T) =>
  z.object({
    payload: z.object({
      total: z.number(),
      skip: z.number(),
      limit: z.number(),
      items: z.array(BaseContentfulRecord(fields)),
      includes: z.object({
        Asset: z.array(AssetSchema),
      }),
    }),
  });

export type BaseContentListPayloadType<T extends z.ZodTypeAny> = z.infer<ReturnType<typeof BaseContentListPayload<T>>>;