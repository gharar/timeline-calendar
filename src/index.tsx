import React from 'react';
import AdapterJalali from '@date-io/date-fns-jalali';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import faLocale from 'date-fns-jalali/locale/fa-jalali-IR';

interface TimelineCalendarProps {
  /**
   * Button contents
   */
  label: string;
}

const TimelineCalendar = ({ label, ...props }: TimelineCalendarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {isOpen && (
        <Box
          sx={{
            position: 'absolute',
            paddingTop: 5,
            boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.16)',
            borderRadius: 6.25,
            background: '#fff',
            overflow: 'hidden',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterJalali} adapterLocale={faLocale}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              value={value}
              onChange={newValue => {
                setValue(newValue);
              }}
              renderInput={params => <TextField {...params} />}
              componentsProps={{
                switchViewButton: {
                  style: {
                    display: 'none',
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      )}

      <Button
        style={{ position: 'relative', zIndex: 2, margin: 10 }}
        onClick={() => setIsOpen(prev => !prev)}
        variant="outlined"
        {...props}
      >
        {label}
      </Button>
    </Box>
  );
};

export default TimelineCalendar;
