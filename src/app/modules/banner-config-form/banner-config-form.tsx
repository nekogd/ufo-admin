'use client';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { FC } from 'react';
import { BannerFontSizeSlider, BannerTextInput, FormContainer } from '@/app/modules/banner-config-form/components';

export type BannerConfigFormValuesType = {
  text?: string;
  fontSize: number;
};

const defaultValues: DefaultValues<BannerConfigFormValuesType> = {
  text: '',
  fontSize: 12,
};
export const BannerConfigForm: FC = () => {
  const formMethods = useForm<BannerConfigFormValuesType>({
    defaultValues,
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      <FormContainer>
        <BannerFontSizeSlider />
        <BannerTextInput />
        <Button onClick={formMethods.handleSubmit(submit)} type={'submit'}>
          Save
        </Button>
      </FormContainer>
    </FormProvider>
  );
};
