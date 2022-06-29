import React from 'react';
import Box from '@mui/material/Box';
import { PickersDayProps } from '@mui/x-date-pickers';

import {
  calendarDayContainerStyles,
  calendarDayNumberStyles,
  calendarDayWrapperStyles,
} from './styles';

interface CalendarDayProps extends PickersDayProps<Date> {}

const CalendarDay = ({ day, disabled, outsideCurrentMonth, today }: CalendarDayProps) => {
  return (
    <Box sx={calendarDayWrapperStyles} aria-disabled={disabled} aria-hidden={outsideCurrentMonth}>
      {!outsideCurrentMonth && (
        <>
          <Box sx={calendarDayContainerStyles(disabled)}>
            <Box sx={calendarDayNumberStyles(disabled, today)}>
              {day.toLocaleDateString('fa-IR', { day: 'numeric' })}
            </Box>
          </Box>
          <Box sx={{ position: 'absolute' }}>...</Box>
        </>
      )}
    </Box>
  );
};

export default CalendarDay;
