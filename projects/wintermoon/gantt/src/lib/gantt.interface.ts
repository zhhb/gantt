export interface GanttColumn {
  id: number | string;
  key: string;
  label: string;
  style?: { [ key: string ]: any };

  [ key: string ]: any;
}

export interface GanttTimeline {
  duration: number;
  startDate: number | Date;
  endDate?: number | Date;
  rowHeight?: number;
  headHeight?: number;
}
