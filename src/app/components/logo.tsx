import React, {FC} from 'react';
import Box from "@mui/material/Box";
import {SxProps} from "@mui/system";

type PropsType = {
    sxProps?: SxProps;
};
export const Logo: FC<PropsType> = ({sxProps}) => (
    <Box sx={sxProps} >
        LOGO
    </Box>
);