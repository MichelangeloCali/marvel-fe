import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  UseFormGetValues,
  UseFormResetField,
  UseFormSetValue,
  UseFormWatch,
  useForm,
  useWatch,
} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

export { Controller, useForm, useWatch, zodResolver };

export type {
  Control,
  FieldError,
  FieldErrors,
  UseFormGetValues,
  UseFormResetField,
  UseFormSetValue,
  UseFormWatch,
};
