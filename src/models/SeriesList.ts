import { z } from '@/libs/zod';

import { SeriesSummarySchema } from './SeriesSummary';

export const SeriesListSchema = z.object({
  available: z.number().optional(),
  returned: z.number().optional(),
  collectionURI: z.string().optional(),
  items: z.array(SeriesSummarySchema).optional(),
});

export type SeriesList = z.infer<typeof SeriesListSchema>;
