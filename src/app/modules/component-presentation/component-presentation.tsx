'use client';
import { Box } from '@mui/material';
import Script from 'next/script';
import { FC, useContext } from 'react';
import { BannerConfigContext } from '@/app/providers/banner-config-context.provider';
export const ComponentPresentation: FC = () => {
  const { bannerText, bannerFontSize } = useContext(BannerConfigContext);
  const timestamp = new Date().getTime();
  return (
    <>
      <Script src={`https://nekogd.github.io/ufo-tools/static/js/main.js?v=${timestamp}`} />
      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <banner-wc text={bannerText} background-color="red" font-size={bannerFontSize}></banner-wc>
      </Box>
    </>
  );
};
