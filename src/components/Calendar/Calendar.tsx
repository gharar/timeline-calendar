import React from 'react';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { TimeSpanList } from 'models';
import { calendarStyles } from './Calendar.styles';
import CalendarDay from './CalendarDay';
import {
  CustomAdapterJalali,
  getTimeSpansInDay,
  isDayDisabled,
  isNextMonthHasTimeSpans,
} from '../../utils';

interface CalendarProps {
  /**
   * List of time spans
   */
  timeSpans: TimeSpanList;
}

const Calendar = ({ timeSpans }: CalendarProps) => {
  // Selected Month state
  const [selectedMonth, setSelectedMonth] = React.useState(new Date());

  const renderRightArrowButton: React.ElementType = props => {
    if (isNextMonthHasTimeSpans(selectedMonth, timeSpans)) {
      return (
        <Button
          variant="text"
          startIcon={<ChevronLeftRounded style={{ fontSize: 32 }} />}
          sx={{ fontSize: 12 }}
          dir="ltr"
          {...props}
        >
          جلسات ماه بعد
        </Button>
      );
    }

    return (
      <IconButton {...props}>
        <ChevronLeftRounded htmlColor="#2C3E50" style={{ fontSize: 32 }} />
      </IconButton>
    );
  };

  const renderLeftArrowButton: React.ElementType = props => {
    return (
      <IconButton {...props}>
        <ChevronRightRounded htmlColor="#2C3E50" style={{ fontSize: 32 }} />
      </IconButton>
    );
  };

  return (
    <Box sx={calendarStyles}>
      <LocalizationProvider dateAdapter={CustomAdapterJalali}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          readOnly
          views={['day']}
          value={selectedMonth}
          onChange={() => undefined}
          renderInput={() => <></>}
          renderDay={(day, _value, pickersDayProps) => (
            <CalendarDay
              {...pickersDayProps}
              timeSpans={getTimeSpansInDay(day, timeSpans)}
              disabled={isDayDisabled(day, timeSpans)}
            />
          )}
          components={{
            LeftArrowButton: renderLeftArrowButton,
            RightArrowButton: renderRightArrowButton,
          }}
          onMonthChange={month => {
            setSelectedMonth(month);
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default Calendar;
