import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

type FormContainerPropsType = {
  children: ReactNode;
};

export const FormContainer: FC<FormContainerPropsType> = (props) => (
  <Box component={'form'} sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
    {props.children}
  </Box>
);
