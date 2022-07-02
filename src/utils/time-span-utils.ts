import addMonths from 'date-fns-jalali/addMonths';
import startOfMonth from 'date-fns-jalali/startOfMonth';

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
  if (timeSpans.length < 1) {
    return true;
  }

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
  if (timeSpans.length < 1) {
    return false;
  }

  const nextMonth = addMonths(startOfMonth(month), 1);
  const end = timeSpans[timeSpans.length - 1].end;
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  return nextMonth.getTime() <= endDate.getTime();
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
