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
    <div className={styles.input_container}>
      <div className={styles.input_content}>
        <Search className={styles.input_icon} />

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

      <span className={styles.input_error_message}>{error && helperText}</span>
    </div>
  );
};
