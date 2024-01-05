import React from 'react';
import { FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';

type InputTextProps = {
  name: string;
  value: string;
  label?: string;
  type?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error: FieldError | undefined;
  fullWidth?: boolean;
};

export const InputText: React.FC<InputTextProps> = (props) => {
  return (
    <TextField
      fullWidth={!!props.fullWidth}
      label={props.label}
      value={props.value}
      variant={'outlined'}
      type={props.type ?? 'text'}
      name={props.name}
      onChange={(event) => props.onChange(event.target.value || '')}
      onBlur={props.onBlur}
      error={!!props.error}
      helperText={props.error ? props.error.message : null}
    />
  );
};
