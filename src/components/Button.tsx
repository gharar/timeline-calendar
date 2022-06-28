import React from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import MuiButton from '@mui/material/Button';

interface ButtonProps {
  /**
   * Button open state
   */
  isOpen?: boolean;
  /**
   * Button onClick handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  /**
   * Button children
   */
  children?: React.ReactNode | React.ReactNode[];
}

const Button = ({ isOpen, onClick, children, ...props }: ButtonProps) => {
  return (
    <MuiButton
      dir="ltr"
      sx={{
        position: 'relative',
        zIndex: 2,
        margin: 2.5,
        paddingLeft: 2.5,
        paddingRight: 4.5,
        borderRadius: 3.75,
        height: 51.52,
        width: 236,
        fontSize: 16,
        fontWeight: 700,
        justifyContent: 'space-between',
        boxShadow: theme => (isOpen ? `0 0 0 2px ${theme.palette.primary.main}` : 'none'),
      }}
      onClick={onClick}
      variant="outlined"
      startIcon={
        <ArrowBackIosNewRoundedIcon
          sx={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(-90deg)',
          }}
        />
      }
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
