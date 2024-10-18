import { z } from 'zod';

export const NetworkResponseSchema = z.object({
  loading: z.boolean(),
  errors: z.string().optional(),
});

export type INetworkResponse = z.infer<typeof NetworkResponseSchema>;
