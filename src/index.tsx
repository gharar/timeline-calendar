import React from 'react';
import Box from '@mui/material/Box';

import Calendar from './components/Calendar';
import Button from './components/Button';

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
        <Calendar
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
        />
      )}

      <Button isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)} {...props}>
        {label}
      </Button>
    </Box>
  );
};

export default TimelineCalendar;
