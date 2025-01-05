import { z } from '@/libs/zod';

export const ComicSummarySchema = z.object({
  resourceURI: z.string().optional(),
  name: z.string().optional(),
});

export type ComicSummary = z.infer<typeof ComicSummarySchema>;
