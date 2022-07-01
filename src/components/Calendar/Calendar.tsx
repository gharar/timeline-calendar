import React from 'react';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { calendarStyles } from './styles';
import CalendarDay from './CalendarDay';
import { CustomAdapterJalali, getTimeSpansInDay, isDayDisabled } from './utils';
import { TimeSpanList } from './types';

interface CalendarProps {
  /**
   * List of time spans
   */
  timeSpans: TimeSpanList;
}

const Calendar = ({ timeSpans }: CalendarProps) => {
  return (
    <Box sx={calendarStyles}>
      <LocalizationProvider dateAdapter={CustomAdapterJalali}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          readOnly
          views={['day']}
          value={new Date()}
          onChange={() => {}}
          renderInput={() => <></>}
          renderDay={(day, _value, pickersDayProps) => (
            <CalendarDay
              {...pickersDayProps}
              timeSpans={getTimeSpansInDay(day, timeSpans)}
              disabled={isDayDisabled(day, timeSpans)}
            />
          )}
          componentsProps={{
            switchViewButton: {
              style: {
                display: 'none',
              },
            },
          }}
          components={{}}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default Calendar;
