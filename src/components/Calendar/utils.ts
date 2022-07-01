import AdapterJalali from '@date-io/date-fns-jalali';

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
