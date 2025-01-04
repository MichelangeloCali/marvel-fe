import { Dispatch, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components';

import styles from './ContentSearch.module.scss';

import { SearchFormData, searchSchema } from '../../utils/schema';

type ContentSearchProps = {
  searchHeroAction: Dispatch<React.SetStateAction<string>>;
};

export const ContentSearch = ({ searchHeroAction }: ContentSearchProps) => {
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
    if (searchValue) {
      searchHeroAction(searchValue);
    } else {
      searchHeroAction('');
    }
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
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
