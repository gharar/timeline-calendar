import React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';

import { TimeSpanList, TimeSpanRawList } from 'models';
import { Button, Calendar } from './components';
import { parseTimeSpans } from './utils';

interface TimelineCalendarProps {
  /**
   * List of time spans
   */
  timeSpans: TimeSpanRawList | Promise<TimeSpanRawList> | (() => Promise<TimeSpanRawList>);
  /**
   * Button contents
   * @default 'زمان بندی'
   */
  label?: string;
  /**
   * Next month button label
   * @default 'جلسات ماه بعد'
   */
  nextMonthLabel?: string;
  /**
   * Previous month button label
   * @default 'جلسات ماه قبل'
   */
  prevMonthLabel?: string;
}

const TimelineCalendar = ({
  label = 'زمان بندی',
  timeSpans = [],
  nextMonthLabel = 'جلسات ماه بعد',
  prevMonthLabel = 'جلسات ماه قبل',
}: TimelineCalendarProps) => {
  // Calendar open state
  const [isOpen, setIsOpen] = React.useState(false);

  // Parsed time spans
  const [parsedTimeSpans, setParsedTimeSpans] = React.useState<TimeSpanList>([]);

  // Time spans loading state
  const [isLoading, setIsLoading] = React.useState(true);

  // Load time spans on open
  React.useEffect(() => {
    if (isOpen) {
      if (typeof timeSpans === 'function') {
        timeSpans()
          .then(result => setParsedTimeSpans(parseTimeSpans(result)))
          .finally(() => setIsLoading(false));
      } else {
        Promise.resolve(timeSpans)
          .then(result => setParsedTimeSpans(parseTimeSpans(result)))
          .finally(() => setIsLoading(false));
      }
    }
  }, [isOpen]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Grow in={isOpen} timeout={500}>
        <div style={{ display: 'flex', justifyContent: 'center', height: 1, zIndex: 1 }}>
          <Calendar
            timeSpans={parsedTimeSpans}
            isLoading={isLoading}
            nextMonthLabel={nextMonthLabel}
            prevMonthLabel={prevMonthLabel}
          />
        </div>
      </Grow>

      <Button isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
        {label}
      </Button>
    </Box>
  );
};

export default TimelineCalendar;
