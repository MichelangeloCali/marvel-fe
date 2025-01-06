import { z } from '@/libs/zod';
import { ComicSchema } from '@/models/Comic';

export const ComicsResponseSchema = z.object({
  data: z.object({
    offset: z.number(),
    limit: z.number(),
    total: z.number(),
    count: z.number(),
    results: z.array(ComicSchema),
  }),
});

export type ComicsResponse = z.infer<typeof ComicsResponseSchema>;
