import { Control, Controller } from 'react-hook-form';

import { Search } from 'lucide-react';

import styles from './Input.module.scss';

type InputProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  control: Control<any>;
};

export const Input = ({ name, placeholder, control, error, helperText }: InputProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Search className={styles.icon} />

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id={name}
              className={styles.input}
              type="text"
              placeholder={placeholder}
            />
          )}
        />
      </div>

      <span className={styles.errorMessage}>{error && helperText}</span>
    </div>
  );
};
