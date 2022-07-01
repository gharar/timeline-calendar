import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TimelineCalendar from '../src/TimelineCalendar';

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
  timeSpans: [
    {
      start: new Date('2022-07-12T05:30:00.337Z'),
      end: new Date('2022-07-12T07:30:00.337Z'),
    },
    {
      start: new Date('2022-07-12T08:30:00.337Z'),
      end: new Date('2022-07-12T10:30:00.337Z'),
    },
    {
      start: new Date('2022-07-13T08:30:00.337Z'),
      end: new Date('2022-07-13T10:30:00.337Z'),
    },
    {
      start: new Date('2022-07-18T08:30:00.337Z'),
      end: new Date('2022-07-18T10:30:00.337Z'),
    },
    {
      start: new Date('2022-07-23T08:30:00.337Z'),
      end: new Date('2022-07-23T10:30:00.337Z'),
    },
    // {
    //   start: new Date('2022-08-07T22:30:00.337Z'),
    //   end: new Date('2022-08-07T23:30:00.337Z'),
    // },
    // {
    //   start: new Date('2022-08-07T23:30:00.337Z'),
    //   end: new Date('2022-08-08T00:30:00.337Z'),
    // },
    // {
    //   start: new Date('2022-08-08T00:30:00.337Z'),
    //   end: new Date('2022-08-08T01:30:00.337Z'),
    // },
    // {
    //   start: new Date('2022-08-22T08:30:00.337Z'),
    //   end: new Date('2022-08-22T10:30:00.337Z'),
    // },
  ],
};
