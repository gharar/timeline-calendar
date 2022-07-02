import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faIR } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { TimeSpanRawList } from 'models';
import TimelineCalendar from '../src/TimelineCalendar';

const theme = createTheme(
  {
    direction: 'rtl',
    palette: {
      primary: {
        main: '#9D41FF',
      },
      text: {
        primary: '#101113',
        secondary: '#535151',
        disabled: '#9E9E9E',
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily: 'Vazirmatn, sans-serif',
    },
  },
  faIR
);

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
    {
      start: new Date('2022-08-07T22:30:00.337Z'),
      end: new Date('2022-08-07T23:30:00.337Z'),
    },
    {
      start: new Date('2022-08-07T23:30:00.337Z'),
      end: new Date('2022-08-08T00:30:00.337Z'),
    },
    {
      start: new Date('2022-08-08T00:30:00.337Z'),
      end: new Date('2022-08-08T01:30:00.337Z'),
    },
    {
      start: new Date('2022-08-22T08:30:00.337Z'),
      end: new Date('2022-08-22T10:30:00.337Z'),
    },
  ],
};

const loadTimeSpans = () =>
  new Promise<TimeSpanRawList>(resolve => {
    setTimeout(() => {
      resolve([
        {
          start: new Date('2022-07-23T08:30:00.337Z'),
          end: new Date('2022-07-23T10:30:00.337Z'),
        },
        {
          start: '2022-07-12T05:30:00.337Z',
          end: new Date('2022-07-12T07:30:00.337Z'),
        },
        {
          start: new Date('2022-07-18T08:30:00.337Z'),
          end: new Date('2022-07-18T10:30:00.337Z'),
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
          start: new Date('2022-08-07T23:30:00.337Z'),
          end: new Date('2022-08-08T00:30:00.337Z'),
        },
        {
          start: new Date('2022-08-07T22:30:00.337Z'),
          end: new Date('2022-08-07T23:30:00.337Z'),
        },
      ]);
    }, 2000);
  });

export const Async = Template.bind({});
Async.args = {
  label: 'زمان بندی',
  timeSpans: loadTimeSpans,
};
