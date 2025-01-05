import { z } from '@/libs/zod';

export const SeriesSummarySchema = z.object({
  resourceURI: z.string().optional(),
  name: z.string().optional(),
});

export type SeriesSummary = z.infer<typeof SeriesSummarySchema>;
