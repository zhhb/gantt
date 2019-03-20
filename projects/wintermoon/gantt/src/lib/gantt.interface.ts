export interface GanttColumn {
  id: number | string;
  key: string;
  label: string;
  style?: { [ key: string ]: any };

  [ key: string ]: any;
}

export interface GanttTimeline {
  duration: string | number;
  starttime: string | number | Date;
  endtime?: string | number | Date;
}
