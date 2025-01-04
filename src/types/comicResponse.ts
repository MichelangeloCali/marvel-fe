import { z } from '@/libs/zod';
import { ComicSchema } from '@/models/Comic';

export const ComicsResponseSchema = z.object({
  data: z.object({
    results: z.array(ComicSchema),
  }),
});

export type ComicsResponse = z.infer<typeof ComicsResponseSchema>;
