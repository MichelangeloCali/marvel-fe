import { z } from '@/libs/zod';

import { EventSummarySchema } from './EventSummary';

export const EventListSchema = z.object({
  available: z.number().optional(),
  returned: z.number().optional(),
  collectionURI: z.string().optional(),
  items: z.array(EventSummarySchema).optional(),
});

export type EventList = z.infer<typeof EventListSchema>;
