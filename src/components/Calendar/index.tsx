import React from 'react';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { calendarStyles } from './styles';
import CalendarDay from './CalendarDay';
import { CustomAdapterJalali } from './utils';

interface CalendarProps {
  /**
   * The value of the picker
   */
  value: Date | null;
  /**
   * Picker onChange handler
   */
  onChange: (value: any, keyboardInputValue?: string | undefined) => void;
}

const Calendar = ({ value, onChange }: CalendarProps) => {
  return (
    <Box sx={calendarStyles}>
      <LocalizationProvider dateAdapter={CustomAdapterJalali}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          readOnly
          value={value}
          views={['day']}
          onChange={onChange}
          renderInput={() => <></>}
          renderDay={(_day, _value, pickersDayProps) => (
            <CalendarDay
              {...pickersDayProps}
              timeSpans={[
                { start: new Date(), end: new Date() },
                { start: new Date(), end: new Date() },
                { start: new Date(), end: new Date() },
              ]}
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
