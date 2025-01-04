import { z } from '@/libs/zod';

import { ThumbnailSchema } from './Thumbnail';

export const ComicSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  thumbnail: ThumbnailSchema,
  dates: z.array(
    z.object({
      type: z.string(),
      date: z.string(),
    }),
  ),
});

export type Comic = z.infer<typeof ComicSchema>;
