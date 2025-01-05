import { z } from '@/libs/zod';
import { CharacterSchema } from '@/models/Character';

export const CharacterDetailSchema = z.object({
  data: z.object({
    results: z.array(CharacterSchema),
  }),
});

export type CharacterDetail = z.infer<typeof CharacterDetailSchema>;
