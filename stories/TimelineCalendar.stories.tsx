import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TimelineCalendar from '../src';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9D41FF',
    },
  },
  direction: 'rtl',
});

export default {
  title: 'Example/TimelineCalendar',
  component: TimelineCalendar,
} as ComponentMeta<typeof TimelineCalendar>;

const Template: ComponentStory<typeof TimelineCalendar> = args => (
  <ThemeProvider theme={theme}>
    <div dir="rtl">
      <TimelineCalendar {...args} />
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'زمان بندی',
};
