import { FC, useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BannerConfigFormValuesType } from '@/app/modules/banner-config-form';
import { BannerConfigContext } from '@/app/providers/banner-config-context.provider';
import { InputText } from '@/app/components/form';

export const BannerTextInput: FC = () => {
  const { setBannerText } = useContext(BannerConfigContext);
  const { control } = useFormContext<BannerConfigFormValuesType>();
  return (
    <Controller
      name="text"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputText
          name="text"
          type={'text'}
          label={'Text'}
          value={value}
          onChange={(value) => {
            onChange(value);
            setBannerText(value);
          }}
          error={error}
          fullWidth={true}
        />
      )}
    />
  );
};
