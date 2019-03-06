export interface GanttOptions {
  title?: {
    label?: string;
    html?: boolean;
  };

  taskMapping?: {
    id?: string;
    start?: string;
    label?: string;
    duration?: string;
    progress?: string;
    type?: string;
    style?: string;
    collapsed?: string;
  };

  width?: number;
  height?: number;
  clientWidth?: number;
  rowsHeight?: number;
  allVisibleTasksHeight?: number;

  scroll?: {
    scrolling?: boolean;
    dragXMoveMultiplier?: number;
    dragYMoveMultiplier?: number;
    top?: number;
    taskList?: {
      left?: number;
      right?: number;
      top?: number;
      bottom?: number;
    },
    chart?: {
      left?: number;
      right?: number;
      percent?: number;
      timePercent?: number;
      top?: number;
      bottom?: number;
      time?: number;
      timeCenter?: number;
      dateTime?: {
        left?: string;
        right?: string;
      }
    }
  };

  scope?: {
    before?: number;
    after?: number;
  };

  times?: {
    timeScale?: number;
    timeZoom?: number;
    timePerPixel?: number;
    firstDate?: Date,
    firstTime?: number; // firstDate getTime()
    lastDate?: Date;
    lastTime?: number; // last date getTime()
    firstTaskDate?: Date;
    firstTaskTime?: number;
    lastTaskDate?: Date;
    lastTaskTime?: number;
    totalViewDurationMs?: number;
    totalViewDurationPx?: number;
    stepDuration?: string;
    steps?: any[];
  };

  row?: {
    height?: number;
  };

  maxRows?: number;
  maxHeight?: number;

  chart?: {
    grid?: {
      horizontal?: {
        gap?: number;
      }
    },
    progress?: {
      width?: number;
      height?: number;
      pattern?: boolean;
      bar?: boolean;
    },
    text?: {
      offset?: number;
      xPadding?: number;
      display?: boolean;
    },
    expander?: {
      type?: string;
      display?: boolean;
      displayIfTaskListHidden?: boolean;
      offset?: number;
      size?: number;
    }
  };

  taskList?: {
    display?: boolean;
    resizeAfterThreshold?: boolean;
    widthThreshold?: number;
    columns?: [
      {
        id?: number;
        label?: string;
        value?: string;
        width?: number;
      }
      ],
    resizerWidth?: number;
    percent?: number;
    width?: number;
    finalWidth?: number;
    widthFromPercentage?: number;
    minWidth?: number;
    expander?: {
      type?: string;
      size?: number;
      columnWidth?: number;
      padding?: number;
      margin?: number;
      straight?: boolean;
    }
  };

  calendar?: {
    hours?: any[];
    days?: any[];
    months?: any[];
    workingDays?: number[],
    gap?: number;
    height?: number;
    hour?: {
      height?: number;
      display?: boolean;
      widths?: any[];
      maxWidths?: { [ key: string ]: any };
      format?: {
        long?: (date: Date) => string;
        medium?: (date: Date) => string;
        short?: (date: Date) => string;
      }
    };
    day?: {
      height?: number;
      display?: boolean;
      widths?: any[];
      maxWidths?: { [ key: string ]: any };
      format?: {
        long?: (date: Date) => string;
        medium?: (date: Date) => string;
        short?: (date: Date) => string;
      }
    };
    month?: {
      height?: number;
      display?: boolean;
      widths?: any[];
      maxWidths?: { [ key: string ]: any };
      format?: {
        long?: (date: Date) => string;
        medium?: (date: Date) => string;
        short?: (date: Date) => string;
      }
    };
  };

  locale?: {
    code?: any;
    Now?: string;
    'X-Scale'?: string;
    'Y-Scale'?: string;
    'Task list width'?: string;
    'Before/After'?: string;
    'Display task list'?: string;
  };
}
