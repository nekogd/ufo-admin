import { FC, useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { BannerConfigFormValuesType } from '@/app/modules/banner-config-form';
import { RangeSlider } from '@/app/components/form';
import { BannerConfigContext } from '@/app/providers/banner-config-context.provider';

export const BannerFontSizeSlider: FC = () => {
  const { setBannerFontSize } = useContext(BannerConfigContext);
  const { control } = useFormContext<BannerConfigFormValuesType>();
  return (
    <Controller
      name="fontSize"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <RangeSlider
          name="fontSize"
          label={'Font size'}
          value={value}
          onChange={(value) => {
            onChange(value);
            setBannerFontSize(value);
          }}
          error={error}
        />
      )}
    />
  );
};
