import { SxProps, Theme } from '@mui/material';

export const buttonStyles = (isOpen: boolean): SxProps<Theme> => ({
  position: 'relative',
  zIndex: 2,
  margin: 2.5,
  paddingLeft: 2.5,
  paddingRight: 4.5,
  borderRadius: 3.75,
  height: 52,
  width: '100%',
  maxWidth: 300,
  fontSize: 16,
  fontWeight: 700,
  justifyContent: 'space-between',
  boxShadow: theme => (isOpen ? `0 0 0 2px ${theme.palette.primary.main}` : 'none'),
  borderWidth: 1,
  borderColor: 'primary.main',
});

export const buttonIconStyles = (isOpen: boolean): SxProps<Theme> => ({
  transform: isOpen ? 'rotate(90deg)' : 'rotate(-90deg)',
  transition: 'transform 0.2s ease-in-out',
});
