import addDays from 'date-fns-jalali/addDays';
import getDay from 'date-fns-jalali/getDay';
import isLastDayOfMonth from 'date-fns-jalali/isLastDayOfMonth';
import startOfMonth from 'date-fns-jalali/startOfMonth';
import endOfMonth from 'date-fns-jalali/endOfMonth';

import { TimeSpanList, TimeSpanRawList } from 'models';

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
    const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());

    return startDate.getTime() === day.getTime();
  });

/**
 * Check if the given day is disabled
 *
 * @param day The day to check
 * @param timeSpans Available time spans
 * @returns True if the given day is disabled
 */
export const isDayDisabled = (day: Date, timeSpans: TimeSpanList): boolean => {
  if (timeSpans.length < 1) {
    return true;
  }

  const start = timeSpans[0].start;
  const end = timeSpans[timeSpans.length - 1].start;

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
  if (timeSpans.length < 1) {
    return false;
  }

  const monthEnd = endOfMonth(month);
  const lastTimeSpanStart = timeSpans[timeSpans.length - 1].start;

  return monthEnd.getTime() < lastTimeSpanStart.getTime();
};

/**
 * Check if the previous month has time spans
 *
 * @param month The current month
 * @param timeSpans Available time spans
 * @returns True if the previous month has time spans
 */
export const isPreviousMonthHasTimeSpans = (month: Date, timeSpans: TimeSpanList): boolean => {
  if (timeSpans.length < 1) {
    return false;
  }

  const monthStart = startOfMonth(month);
  const firstTimeSpanStart = timeSpans[0].start;

  return monthStart.getTime() > firstTimeSpanStart.getTime();
};

/**
 * Parse dates in the given raw time spans and sort them by start time
 *
 * @param timeSpans Raw time spans
 * @returns Parsed time spans
 */
export const parseTimeSpans = (timeSpans: TimeSpanRawList): TimeSpanList =>
  timeSpans
    .map(timeSpan => {
      const start = new Date(timeSpan.start);
      const end = new Date(timeSpan.end);

      return { start, end };
    })
    .sort((a, b) => a.start.getTime() - b.start.getTime());

/**
 * Check if the given day is the last disabled day in the week row (to have rounded corner)
 *
 * @param day The day to check
 * @param timeSpans Available time spans
 * @returns True if the given day is the last disabled day in the week row
 */
export const isLastDisabledInRow = (day: Date, timeSpans: TimeSpanList): boolean => {
  if (isDayDisabled(day, timeSpans)) {
    if (isLastDayOfMonth(day) || getDay(day) === 5) {
      return true;
    }

    const nextDay = addDays(day, 1);
    if (!isDayDisabled(nextDay, timeSpans)) {
      return true;
    }
  }

  return false;
};
