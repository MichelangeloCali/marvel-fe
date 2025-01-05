import { z } from '@/libs/zod';

export const UrlSchema = z.object({
  type: z.string().optional(),
  url: z.string().optional(),
});

export type Url = z.infer<typeof UrlSchema>;
