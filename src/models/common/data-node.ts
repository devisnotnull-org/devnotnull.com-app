import { z } from 'zod';

export const CommonDataNodeSchema = z.object({
    nodeType: z.string(),
    data: z.any(),
    content: z.array(z.lazy(() => CommonDataNodeSchema)),
    value: z.string(),
    marks: z.array(z.object({
        type: z.string(),
    })),
});

export type CommonDataNodeType = z.infer<typeof CommonDataNodeSchema>;