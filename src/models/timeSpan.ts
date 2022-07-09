export interface TimeSpan {
  start: Date;
  end: Date;
}

export type TimeSpanList = TimeSpan[];

export interface TimeSpanRaw {
  start: Date | string;
  end: Date | string;
}

export type TimeSpanRawList = TimeSpanRaw[];
