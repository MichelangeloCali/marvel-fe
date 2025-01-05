import { z } from '@/libs/zod';

export const EventSummarySchema = z.object({
  resourceURI: z.string().optional(),
  name: z.string().optional(),
});

export type EventSummary = z.infer<typeof EventSummarySchema>;
