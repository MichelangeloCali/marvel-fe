import { useEffect } from 'react';

import { Input } from '@/components';
import { useForm, zodResolver } from '@/libs/reactHookForm';

import { useCharactersStore } from '@/stores/characters';

import styles from './SearchContent.module.scss';

import { SearchFormData, searchSchema } from '../../utils/schema';

export const SearchContent = () => {
  const { setSearch } = useCharactersStore();

  const {
    control,
    watch,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    mode: 'onChange',
  });

  const searchValue = watch('search');

  useEffect(() => {
    setSearch(searchValue || '');
  }, [searchValue, setSearch]);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_text_content}>
        <h1>explore o universo</h1>

        <h2>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama
          - e aqueles que você descobrirá em breve!
        </h2>
      </div>

      <Input
        name="search"
        placeholder="Procure por heróis"
        control={control}
        error={!!errors.search && !!searchValue}
        helperText={errors.search?.message}
      />
    </div>
  );
};
