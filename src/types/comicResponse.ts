import { z } from '@/libs/zod';
import { ComicListSchema } from '@/models/ComicList';

export const ComicsResponseSchema = z.object({
  data: z.object({
    results: z.array(ComicListSchema),
  }),
});

export type ComicsResponse = z.infer<typeof ComicsResponseSchema>;
