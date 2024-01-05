'use client';
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

export type BannerConfigContextType = {
  bannerText: string;
  setBannerText: Dispatch<SetStateAction<string>>;
  bannerFontSize: number;
  setBannerFontSize: Dispatch<SetStateAction<number>>;
};
export const BannerConfigContext = createContext<BannerConfigContextType>({
  bannerText: '',
  setBannerText: () => null,
  bannerFontSize: 12,
  setBannerFontSize: () => null,
});

type PropsType = {
  children: ReactNode;
};

export const BannerConfigContextProvider: FC<PropsType> = (props) => {
  const [text, setText] = useState<string>('');
  const [fontSize, setFontSize] = useState<number>(12);

  const value: BannerConfigContextType = {
    bannerText: text,
    setBannerText: setText,
    bannerFontSize: fontSize,
    setBannerFontSize: setFontSize,
  };

  return <BannerConfigContext.Provider value={value}>{props.children}</BannerConfigContext.Provider>;
};
