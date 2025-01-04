import { z } from '@/libs/zod';
import { CharacterSchema } from '@/models/Character';

export const CharactersResponseSchema = z.object({
  data: z.object({
    results: z.array(CharacterSchema),
    total: z.number(),
  }),
});

export type CharactersResponse = z.infer<typeof CharactersResponseSchema>;
