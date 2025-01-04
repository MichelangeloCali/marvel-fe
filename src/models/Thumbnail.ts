import { z } from '@/libs/zod';

export const ThumbnailSchema = z.object({
  path: z.string(),
  extension: z.string(),
});

export type Thumbnail = z.infer<typeof ThumbnailSchema>;
