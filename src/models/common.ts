import { z } from 'zod';

const ICommonDataNode = z.object({
  nodeType: z.string(),
  data: z.any(),
  content: z.array(z.lazy(() => ICommonDataNode)),
  value: z.string(),
  marks: z.array(z.object({ type: z.string() })),
});

const IAsset = z.object({
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

const IAssetReference = z.object({
  sys: z.object({
    id: z.string(),
    linkType: z.string(),
    type: z.string(),
  }),
});

const ILink = z.object({
  href: z.string().url(),
  text: z.string().optional(),
});

const BaseContentfulRecord = <T extends z.ZodTypeAny>(fields: T) =>
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

const CommonContentPayload = <T extends z.ZodTypeAny>(fields: T) =>
  z.object({
    payload: BaseContentfulRecord(fields).extend({
      includes: z.object({
        Asset: z.array(IAsset),
      }),
    }),
  });

const CommonContentListPayload = <T extends z.ZodTypeAny>(fields: T) =>
  z.object({
    payload: z.object({
      total: z.number(),
      skip: z.number(),
      limit: z.number(),
      items: z.array(BaseContentfulRecord(fields)),
      includes: z.object({
        Asset: z.array(IAsset),
      }),
    }),
  });

export {
  ICommonDataNode,
  IAsset,
  IAssetReference,
  ILink,
  BaseContentfulRecord,
  CommonContentPayload,
  CommonContentListPayload,
};
