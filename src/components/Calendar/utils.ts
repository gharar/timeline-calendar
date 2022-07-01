import AdapterJalali from '@date-io/date-fns-jalali';
import addMonths from 'date-fns-jalali/addMonths';
import startOfMonth from 'date-fns-jalali/startOfMonth';

import { TimeSpanList } from './types';

// Customize weekdays format for calendar header
// From https://github.com/mui/mui-x/issues/4605#issuecomment-1105257098

class CustomString extends String {
  charAt(_: number): any {
    return {
      toUpperCase: () => this.valueOf(),
    };
  }
}

const weekDays = ['شنبه', 'یکشنبه', 'دو‌شنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
const customWeekDays = weekDays.map(day => new CustomString(day) as string);

export class CustomAdapterJalali extends AdapterJalali {
  getWeekdays = (): string[] => customWeekDays;
}

/**
 * Filter the time spans in the given day
 *
 * @param day The given day
 * @param timeSpans Time spans to filter
 * @returns Time spans in the given day
 */
export const getTimeSpansInDay = (day: Date, timeSpans: TimeSpanList): TimeSpanList =>
  timeSpans.filter(timeSpan => {
    const start = timeSpan.start;
    const end = timeSpan.end;

    const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

    return startDate.getTime() <= day.getTime() && endDate.getTime() >= day.getTime();
  });

/**
 * Check if the given day is disabled
 *
 * @param day The day to check
 * @param timeSpans Available time spans
 * @returns True if the given day is disabled
 */
export const isDayDisabled = (day: Date, timeSpans: TimeSpanList): boolean => {
  // TODO: Sort time spans by start time
  const start = timeSpans[0].start;
  const end = timeSpans[timeSpans.length - 1].end;

  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  return day.getTime() < startDate.getTime() || day.getTime() > endDate.getTime();
};

/**
 * Check if the next month has time spans
 *
 * @param month The current month
 * @param timeSpans Available time spans
 * @returns True if the next month has time spans
 */
export const isNextMonthHasTimeSpans = (month: Date, timeSpans: TimeSpanList): boolean => {
  const nextMonth = addMonths(startOfMonth(month), 1);
  const end = timeSpans[timeSpans.length - 1].end;
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  return nextMonth.getTime() <= endDate.getTime();
};
