import { z } from '@/libs/zod';

export const ImageSchema = z.object({
  path: z.string().optional(),
  extension: z.string().optional(),
});

export type Image = z.infer<typeof ImageSchema>;
