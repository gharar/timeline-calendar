import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';

import { TimeSpanList } from 'models';
import {
  timeListContainerStyles,
  timeListDropDownStyles,
  timeListItemStyles,
  timeListStackBottomStyles,
  timeListStackTopStyles,
} from './Calendar.styles';

interface TimeListProps {
  /**
   * List of time spans
   */
  timeSpans: TimeSpanList;
}

const TimeList = ({ timeSpans }: TimeListProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box
      sx={timeListContainerStyles}
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      {timeSpans.length > 1 && <Box sx={timeListStackBottomStyles} />}

      <Box sx={timeListStackTopStyles(isOpen)}>
        <TimeListItem start={timeSpans[0].start} end={timeSpans[0].end} />
      </Box>

      <Grow in={isOpen} style={{ transformOrigin: '50% 0 0' }}>
        <Box sx={timeListDropDownStyles}>
          <Collapse in={isOpen} collapsedSize={28}>
            {timeSpans.map((timeSpan, index) => (
              <Box
                key={`${timeSpan.start.toISOString()}-${timeSpan.end.toISOString()}`}
                sx={{ py: 0.25 }}
              >
                <TimeListItem key={index} start={timeSpan.start} end={timeSpan.end} />
              </Box>
            ))}
          </Collapse>
        </Box>
      </Grow>
    </Box>
  );
};

const TimeListItem = ({ start, end }: { start: Date; end: Date }) => {
  return (
    <Box sx={timeListItemStyles}>
      <span>
        {start.toLocaleTimeString('fa-IR', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </span>

      <ArrowForwardRoundedIcon fontSize="inherit" />

      <span>
        {end.toLocaleTimeString('fa-IR', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </span>
    </Box>
  );
};

export default TimeList;
