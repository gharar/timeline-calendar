import React from 'react';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import MuiButton from '@mui/material/Button';

import { buttonStyles, buttonIconStyles } from './Button.styles';

interface ButtonProps {
  /**
   * Button open state
   */
  isOpen: boolean;
  /**
   * Button onClick handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  /**
   * Button children
   */
  children?: React.ReactNode | React.ReactNode[];
}

const Button = ({ isOpen, onClick, children }: ButtonProps) => {
  return (
    <MuiButton
      dir="ltr"
      sx={buttonStyles(isOpen)}
      onClick={onClick}
      variant="outlined"
      startIcon={<ChevronLeftRounded sx={buttonIconStyles(isOpen)} style={{ fontSize: 32 }} />}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
