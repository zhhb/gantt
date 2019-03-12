export type GanttTaskType = 'group' | 'task' | 'milestone';

export interface GanttTask {
  id: string;
  type: GanttTaskType;
  label?: string;
  duration?: number;
  progress?: number;
  start?: Date | number | string;
  user?: string;

  [ key: string ]: any;
}
