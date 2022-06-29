import { SxProps } from '@mui/material';

const DAY_WIDTH = 95;
const DAY_HEIGHT = 67;

export const calendarStyles: SxProps = {
  // Box
  position: 'absolute',
  mt: -2,
  pt: 13.5,
  boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.16)',
  borderRadius: 6.25,
  backgroundColor: '#fff',
  overflow: 'hidden',

  // Calendar
  '& > div': {
    minWidth: DAY_WIDTH * 7 + 20,
    alignItems: 'center',
  },
  '& > div > div, & > div > div > div > div, & .MuiCalendarPicker-root': {
    width: DAY_WIDTH * 7,
  },
  '& > div > div > div > div, & > div > div > div > div > div': {
    minHeight: DAY_HEIGHT * 6 + 160,
  },
  '& .MuiCalendarPicker-root > div:first-child': {
    position: 'relative',
    mx: 3.5,
    my: 3,
    px: 0,
  },
  '& .MuiCalendarPicker-root > div > div:first-child': {
    margin: 'auto',
    zIndex: 1,
    fontSize: 18,
    fontWeight: 700,
  },
  '& .MuiPickersArrowSwitcher-root': {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  '& .MuiPickersArrowSwitcher-spacer': {
    flex: 1,
  },
  '& .MuiTypography-caption': {
    width: DAY_WIDTH,
    m: 0,
    height: 63,
  },
  '& .PrivatePickersSlideTransition-root': {
    minHeight: DAY_HEIGHT * 6,
  },
  '& .PrivatePickersSlideTransition-root [role="row"]': {
    m: 0,
    borderTop: '1px solid #e0e0e0',
  },
  '& .MuiPickersDay-dayWithMargin': {
    m: 0,
  },
  '& .MuiPickersDay-root': {
    width: DAY_WIDTH,
    height: DAY_HEIGHT,
    fontSize: 14,
  },
};
