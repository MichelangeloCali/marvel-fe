import { z } from '@/libs/zod';

import { ImageSchema } from './Image';
import { UrlSchema } from './Url';

export const ComicSchema = z.object({
  id: z.number().optional(),
  digitalId: z.number().optional(),
  title: z.string().optional(),
  issueNumber: z.number().optional(),
  variantDescription: z.string().optional(),
  description: z.string().optional(),
  modified: z.string().optional(),
  isbn: z.string().optional(),
  upc: z.string().optional(),
  diamondCode: z.string().optional(),
  ean: z.string().optional(),
  issn: z.string().optional(),
  format: z.string().optional(),
  pageCount: z.number().optional(),
  textObjects: z
    .array(
      z.object({
        type: z.string(),
        language: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  resourceURI: z.string().optional(),
  urls: z.array(UrlSchema).optional(),
  series: z
    .object({
      resourceURI: z.string().optional(),
      name: z.string().optional(),
    })
    .optional(),
  variants: z
    .array(
      z.object({
        resourceURI: z.string().optional(),
        name: z.string().optional(),
      }),
    )
    .optional(),
  collections: z
    .array(
      z.object({
        resourceURI: z.string().optional(),
        name: z.string().optional(),
      }),
    )
    .optional(),
  collectedIssues: z
    .array(
      z.object({
        resourceURI: z.string().optional(),
        name: z.string().optional(),
      }),
    )
    .optional(),
  dates: z
    .array(
      z.object({
        type: z.string().optional(),
        date: z.string().optional(),
      }),
    )
    .optional(),
  prices: z
    .array(
      z.object({
        type: z.string().optional(),
        price: z.number().optional(),
      }),
    )
    .optional(),
  thumbnail: ImageSchema.optional(),
  images: z.array(ImageSchema).optional(),
  creators: z
    .object({
      available: z.number().optional(),
      collectionURI: z.string().optional(),
      items: z
        .array(
          z.object({
            resourceURI: z.string().optional(),
            name: z.string().optional(),
            role: z.string().optional(),
          }),
        )
        .optional(),
      returned: z.number().optional(),
    })
    .optional(),
  characters: z
    .object({
      available: z.number().optional(),
      collectionURI: z.string().optional(),
      items: z
        .array(
          z.object({
            resourceURI: z.string().optional(),
            name: z.string().optional(),
          }),
        )
        .optional(),
      returned: z.number().optional(),
    })
    .optional(),
  stories: z
    .object({
      available: z.number().optional(),
      collectionURI: z.string().optional(),
      items: z
        .array(
          z.object({
            resourceURI: z.string().optional(),
            name: z.string().optional(),
            type: z.string().optional(),
          }),
        )
        .optional(),
      returned: z.number().optional(),
    })
    .optional(),
  events: z
    .object({
      available: z.number().optional(),
      collectionURI: z.string().optional(),
      items: z
        .array(
          z.object({
            resourceURI: z.string().optional(),
            name: z.string().optional(),
          }),
        )
        .optional(),
      returned: z.number().optional(),
    })
    .optional(),
});

export type Comic = z.infer<typeof ComicSchema>;
