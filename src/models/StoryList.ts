import { z } from '@/libs/zod';

import { StorySummarySchema } from './StorySummary';

export const StoryListSchema = z.object({
  available: z.number().optional(),
  returned: z.number().optional(),
  collectionURI: z.string().optional(),
  items: z.array(StorySummarySchema).optional(),
});

export type StoryList = z.infer<typeof StoryListSchema>;
