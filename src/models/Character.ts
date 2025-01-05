import { z } from '@/libs/zod';

import { ComicListSchema } from './ComicList';
import { EventListSchema } from './EventList';
import { ImageSchema } from './Image';
import { SeriesListSchema } from './SeriesList';
import { StoryListSchema } from './StoryList';
import { UrlSchema } from './Url';

export const CharacterSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  modified: z.string().optional(),
  resourceURI: z.string().optional(),
  urls: z.array(UrlSchema).optional(),
  thumbnail: ImageSchema.optional(),
  comics: ComicListSchema.optional(),
  stories: StoryListSchema.optional(),
  events: EventListSchema.optional(),
  series: SeriesListSchema.optional(),
});

export type Character = z.infer<typeof CharacterSchema>;
