import React from 'react';
import Box from '@mui/material/Box';
import { PickersDayProps } from '@mui/x-date-pickers';

import TimeList from './TimeList';
import {
  calendarDayContainerStyles,
  calendarDayNumberStyles,
  calendarDayWrapperStyles,
} from './styles';

interface CalendarDayProps extends PickersDayProps<Date> {
  /**
   * Array of time spans
   */
  timeSpans: { start: Date; end: Date }[];
}

const CalendarDay = ({
  day,
  disabled,
  outsideCurrentMonth,
  today,
  timeSpans,
}: CalendarDayProps) => {
  return (
    <Box sx={calendarDayWrapperStyles} aria-disabled={disabled} aria-hidden={outsideCurrentMonth}>
      {!outsideCurrentMonth && (
        <>
          <Box sx={calendarDayContainerStyles(disabled)}>
            <Box sx={calendarDayNumberStyles(disabled, today, timeSpans.length > 0)}>
              {day.toLocaleDateString('fa-IR', { day: 'numeric' })}
            </Box>
          </Box>

          {timeSpans.length > 0 && <TimeList timeSpans={timeSpans} />}
        </>
      )}
    </Box>
  );
};

export default CalendarDay;
