import React from 'react';
import AdapterJalali from '@date-io/date-fns-jalali';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import faLocale from 'date-fns-jalali/locale/fa-jalali-IR';

import { calendarStyles } from './styles';

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
      <LocalizationProvider dateAdapter={AdapterJalali} adapterLocale={faLocale}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={onChange}
          renderInput={() => <></>}
          // renderDay={(day, _value, DayComponentProps) => {
          //   return <PickersDay {...DayComponentProps} />;
          // }}
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
