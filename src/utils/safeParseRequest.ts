import { logger } from '@/configs/logger';
import { ZodSchema } from '@/libs/zod';

export const safeParse = <T>(schema: ZodSchema<T>, data: unknown): T | null => {
  const result = schema.safeParse(data);

  if (!result.success) {
    logger.warn('Falha na validação dos dados', result.error);
    return null;
  }

  return result.data;
};
