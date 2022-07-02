import React from 'react';
import Box from '@mui/material/Box';

import Calendar from './components/Calendar';
import Button from './components/Button';
import { TimeSpanList } from 'components/Calendar/types';

interface TimelineCalendarProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * List of time spans
   */
  timeSpans: TimeSpanList;
}

const TimelineCalendar = ({ label, timeSpans }: TimelineCalendarProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {isOpen && <Calendar timeSpans={timeSpans} />}

      <Button isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        {label}
      </Button>
    </Box>
  );
};

export default TimelineCalendar;
