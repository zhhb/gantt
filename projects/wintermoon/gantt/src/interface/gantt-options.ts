import { resolveSrv } from 'dns';

export interface GanttOptionsHeader {
  label: string;
  html: boolean;

  [ key: string ]: any;
}

export interface GanttOptionsTaskMapping {
  id: string;
  start: string;
  label: string;
  duration: string;
  progress: string;
  type: string;
  style: string;
  collapsed: string;

  [ key: string ]: any;
}

export interface GanttOptionsScroll {
  scrolling: boolean;
  dragXMoveMultiplier: number;
  dragYMoveMultiplier: number;
  top: number;
  taskList: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  chart: {
    left: number;
    right: number;
    percent: number;
    timePercent: number;
    top: number;
    bottom: number;
    time: number;
    timeCenter: number;
    dateTime: {
      left: string;
      right: string;
    };
  };

  [ key: string ]: any;
}

export interface GanttOptionsTimes {
  timeScale: number;
  timeZoom: number;
  timePerPixel: number;
  firstDate: Date;
  firstTime: number; // firstDate getTime()
  lastDate: Date;
  lastTime: number; // last date getTime()
  firstTaskDate: Date;
  firstTaskTime: number;
  lastTaskDate: Date;
  lastTaskTime: number;
  totalViewDurationMs: number;
  totalViewDurationPx: number;
  stepDuration: string; // hour, day, month
  steps: any[];

  [ key: string ]: any;
}

export interface GanttOptionsChart {
  grid: {
    horizontal: {
      gap: number;
    }
  };
  progress: {
    width: number;
    height: number;
    pattern: boolean;
    bar: boolean;
  };
  text: {
    offset: number;
    xPadding: number;
    display: boolean;
  };
  expander: {
    type: string; // 'chart'
    display: boolean;
    displayIfTaskListHidden: boolean;
    offset: number;
    size: number;
  };

  [ key: string ]: any;
}

export interface GanttOptionsTaskList {
  display: boolean;
  resizeAfterThreshold: boolean;
  widthThreshold: number;
  columns: {
    id: number | string;
    label: string;
    value: string;
    width: number;
  }[];
  resizerWidth: number;
  percent: number;
  width: number;
  finalWidth: number;
  widthFromPercentage: number;
  minWidth: number;
  expander: {
    type: string; // task-list
    size: number;
    columnWidth: number;
    padding: number;
    margin: number;
    straight: boolean;
  };

  [ key: string ]: any;
}

type TimeFormatFunctionType = (date: Date) => string;

export interface GanttOptionsCalendarTimeInterval {
  height: number;
  display: boolean;
  widths: number[];
  maxWidths: { [ key: string ]: any };
  format: {
    long: TimeFormatFunctionType;
    medium: TimeFormatFunctionType;
    short: TimeFormatFunctionType;
  };

  [ key: string ]: any;
}

export interface GanttOptionsCalendar {
  hours: number[];
  days: number[];
  months: number[];
  workingDays: number[];
  gap: number;
  height: number;
  hour: GanttOptionsCalendarTimeInterval;
  day: GanttOptionsCalendarTimeInterval;
  month: GanttOptionsCalendarTimeInterval;

  [ key: string ]: any;
}

export interface GanttOptionsLocale {
  code: string | any;
  'Now': string;
  'X-Scale': string;
  'Y-Scale': string;
  'Task list width': string;
  'Before/After': string;
  'Display task list': string;

  [ key: string ]: any;
}

export interface GanttOptions {
  ctx?: any;
  title?: GanttOptionsHeader;
  taskMapping?: GanttOptionsTaskMapping;
  width?: number;
  height?: number;
  clientWidth?: number;
  outerHeight?: number;
  rowsHeight?: number;
  allVisibleTasksHeight?: number;
  maxRows?: number;
  maxHeight?: number;
  scope?: {
    before: number;
    after: number;
  };
  row?: {
    height: number;
  };
  scroll?: GanttOptionsScroll;
  times?: GanttOptionsTimes;
  chart?: GanttOptionsChart;
  taskList?: GanttOptionsTaskList;
  calendar?: GanttOptionsCalendar;
  locale?: GanttOptionsLocale;

  [ key: string ]: any;
}
