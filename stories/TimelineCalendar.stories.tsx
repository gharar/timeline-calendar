import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faIR } from '@mui/material/locale';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
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
      <Paper
        sx={{
          height: 500,
          width: 236,
          m: 'auto',
          p: 9,
          pt: 3,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '25px',
          boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.12)',
          fontFamily: theme => theme.typography.fontFamily,
        }}
      >
        <h1 style={{ lineHeight: 2, borderBottom: '1px solid #9D41FF', opacity: 0.2 }}>عنوان</h1>

        <TimelineCalendar {...args} />

        <p style={{ flex: 1, opacity: 0.2 }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
          تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{' '}
        </p>

        <Button
          variant="contained"
          sx={{
            height: 45,
            borderRadius: '15px',
            fontSize: '20px',
            opacity: 0.2,
          }}
        >
          ثبت‌نام
        </Button>
      </Paper>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'زمان بندی',
  timeSpans: [
    {
      start: '2022-07-11T02:30:00.337Z',
      end: '2022-07-11T05:30:00.337Z',
    },
    {
      start: '2022-07-11T05:30:00.337Z',
      end: '2022-07-11T07:30:00.337Z',
    },
    {
      start: '2022-07-11T08:30:00.337Z',
      end: '2022-07-11T10:30:00.337Z',
    },
    {
      start: '2022-07-13T08:30:00.337Z',
      end: '2022-07-13T10:30:00.337Z',
    },
    {
      start: '2022-07-18T08:30:00.337Z',
      end: '2022-07-18T10:30:00.337Z',
    },
    {
      start: '2022-07-22T19:30:00.337Z',
      end: '2022-07-22T20:30:00.337Z',
    },
    {
      start: '2022-08-22T18:30:00.337Z',
      end: '2022-08-22T19:30:00.337Z',
    },
  ],
};

const ApiCallResponse = {
  sessions: [
    {
      start_at: '2022-07-18T12:00:00+03:30',
      end_at: '2022-07-18T13:00:00+03:30',
    },
    {
      start_at: '2022-07-19T12:00:00+03:30',
      end_at: '2022-07-19T13:00:00+03:30',
    },
    {
      start_at: '2022-07-20T12:00:00+03:30',
      end_at: '2022-07-20T13:00:00+03:30',
    },
    {
      start_at: '2022-07-20T13:00:00+03:30',
      end_at: '2022-07-20T14:00:00+03:30',
    },
  ],
};

const loadTimeSpans = () =>
  new Promise<TimeSpanRawList>(resolve => {
    setTimeout(() => {
      resolve(
        ApiCallResponse.sessions.map(({ start_at, end_at }) => ({ start: start_at, end: end_at }))
      );
    }, 2000);
  });

export const Async = Template.bind({});
Async.args = {
  label: 'زمان بندی',
  timeSpans: loadTimeSpans,
};
