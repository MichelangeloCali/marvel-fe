import { z } from '@/libs/zod';
import { CharacterSchema } from '@/models/Character';

export const CharacterDetailResponseSchema = z.object({
  data: z.object({
    offset: z.number(),
    limit: z.number(),
    total: z.number(),
    count: z.number(),
    results: z.array(CharacterSchema),
  }),
});

export type CharacterDetailResponse = z.infer<typeof CharacterDetailResponseSchema>;
