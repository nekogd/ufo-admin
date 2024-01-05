'use client';
import { FC } from 'react';
import { Box, Slider, Typography } from '@mui/material';

type RangeSliderType = {
  name: string;
  value: number;
  label?: string;
  onChange: (value: number) => void;
};

export const RangeSlider: FC<RangeSliderType> = (props) => {
  const marks = [
    {
      value: 8,
    },
    {
      value: 9,
    },
    {
      value: 10,
    },
    {
      value: 11,
    },
    {
      value: 12,
    },
    {
      value: 14,
    },
    {
      value: 16,
    },
    {
      value: 18,
    },
    {
      value: 20,
    },
    {
      value: 24,
    },
    {
      value: 28,
    },
    {
      value: 32,
    },
    {
      value: 36,
    },
    {
      value: 40,
    },
    {
      value: 44,
    },
    {
      value: 48,
    },
    {
      value: 52,
    },
    {
      value: 56,
    },
  ];
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      props.onChange(newValue);
    }
  };

  return (
    <Box>
      <Typography id="range-slider">
        {props.label}: {props.value}
      </Typography>
      <Slider
        value={props.value}
        min={8}
        max={56}
        step={null}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        marks={marks}
      />
    </Box>
  );
};
