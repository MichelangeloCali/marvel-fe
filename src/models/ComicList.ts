import { z } from '@/libs/zod';

import { ComicSummarySchema } from './ComicSummary';

export const ComicListSchema = z.object({
  available: z.number().optional(),
  returned: z.number().optional(),
  collectionURI: z.string().optional(),
  items: z.array(ComicSummarySchema).optional(),
});

export type ComicList = z.infer<typeof ComicListSchema>;
