import { z } from '@/libs/zod';

import { ThumbnailSchema } from './Thumbnail';

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  thumbnail: ThumbnailSchema,
});

export type Character = z.infer<typeof CharacterSchema>;
