import { z } from '@/libs/zod';

export const StorySummarySchema = z.object({
  resourceURI: z.string().optional(),
  name: z.string().optional(),
  type: z.string().optional(),
});

export type StorySummary = z.infer<typeof StorySummarySchema>;
