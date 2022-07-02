import { SxProps, Theme } from '@mui/material';

const DAY_WIDTH = 95;
const DAY_HEIGHT = 67;

export const calendarStyles: SxProps<Theme> = {
  // Box
  position: 'absolute',
  mt: -2,
  pt: 13.5,
  pb: 3,
  boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.16)',
  borderRadius: 6.25,
  backgroundColor: 'background.default',
  width: 'fit-content',
  fontFamily: theme => theme.typography.fontFamily,
  color: 'text.primary',

  // Calendar
  '& .MuiPickerStaticWrapper-root': {
    minWidth: DAY_WIDTH * 7 + 20,
    alignItems: 'center',
  },
  '& .MuiPickerStaticWrapper-content': {
    overflowX: 'clip',
    overflowY: 'visible',
  },
  '& > div > div > div > div, & .MuiCalendarPicker-root': {
    width: DAY_WIDTH * 7 + 20,
  },
  '& > div > div > div > div, & > div > div > div > div > div': {
    minHeight: DAY_HEIGHT * 6 + 160,
    overflow: 'visible',
  },
  '& .MuiCalendarPicker-root': {
    overflow: 'visible',

    '& > div:first-of-type': {
      position: 'relative',
      mx: 3.5,
      my: 3,
      px: 0,

      '& > div:first-of-type': {
        margin: 'auto',
        zIndex: 1,
        fontSize: 18,
        fontWeight: 700,
        cursor: 'default',
      },
    },
  },
  '& .MuiCalendarPicker-viewTransitionContainer': {
    overflowY: 'visible',
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
    color: 'text.secondary',
  },
  '& .PrivatePickersSlideTransition-root': {
    minHeight: DAY_HEIGHT * 6,
    overflow: 'visible',

    '& [role="grid"]': {
      overflow: 'visible',
    },

    '& [role="row"]': {
      my: 0,
      mx: 1.25,
      borderTop: '1px solid #e0e0e0',

      '& > div:first-of-type, & > [aria-disabled="false"] + [aria-disabled="true"], & > [aria-hidden="true"] + [aria-disabled="true"]':
        {
          '& > div:first-of-type': {
            borderEndStartRadius: 10,
          },
        },

      '& > div:last-child': {
        '& > div:first-of-type': {
          borderEndEndRadius: 10,
        },
      },
    },
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

export const calendarDayWrapperStyles: SxProps = { position: 'relative', width: 95, height: 67 };

export const calendarDayContainerStyles = (disabled?: boolean): SxProps => ({
  height: 32,
  display: 'flex',
  justifyContent: 'center',
  pt: 1,
  ...(disabled && {
    backgroundColor: '#D9D9D950',
  }),
});

export const calendarDayNumberStyles = (
  disabled?: boolean,
  today?: boolean,
  hasTimeSpan?: boolean
): SxProps => ({
  height: 22,
  width: 22,
  lineHeight: '24px',
  borderRadius: '50%',
  textAlign: 'center',
  fontWeight: 300,
  userSelect: 'none',
  ...(disabled && {
    color: 'text.disabled',
  }),
  ...(today && {
    color: 'background.default',
    backgroundColor: 'primary.main',
  }),
  ...(hasTimeSpan && {
    fontWeight: 700,
  }),
});

export const timeListContainerStyles: SxProps = {
  height: 30,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
};

export const timeListStackBottomStyles: SxProps = {
  position: 'absolute',
  left: 1,
  bottom: 0,
  width: 86,
  height: 22,
  backgroundColor: 'rgba(157, 65, 255, 0.1)',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'primary.main',
  borderRadius: '5px',
};

export const timeListStackTopStyles = (isOpen: boolean): SxProps => ({
  position: 'absolute',
  left: 4,
  bottom: 4,
  opacity: isOpen ? 0.2 : 1,
});

export const timeListDropDownStyles: SxProps = {
  position: 'absolute',
  top: 4,
  left: 0,
  right: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  px: 0.5,
  py: 0.25,
  backgroundColor: 'background.default',
  borderRadius: '6px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 2,
};

export const timeListItemStyles: SxProps = {
  width: 88,
  height: 24,
  backgroundColor: 'primary.main',
  color: 'background.default',
  borderRadius: '5px',
  direction: 'ltr',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  fontWeight: 700,
};
