import * as z from 'zod';

export const searchSchema = z.object({
  search: z.string().min(3, 'Digite pelo menos 3 caracteres para a busca'),
});

export type SearchFormData = z.infer<typeof searchSchema>;
