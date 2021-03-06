import { debug as Debug } from 'debug';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  endOfMonth,
  getDate,
  getMonth,
  startOfMonth
} from 'date-fns';
import { GanttColumn, GanttTimeline } from './gantt.interface';

const debug = Debug('Gantt:');

@Component({
  // tslint:disable-next-line:component-selector
  selector       : 'gantt',
  templateUrl    : './gantt.component.html',
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GanttComponent implements OnInit, AfterViewInit {
  timeLineCellWith      = 50;
  timeLineHeadHeight    = 50;
  timeLineAreaHeadEL: HTMLElement;
  timeLineAreaBodyEL: HTMLElement;
  timeLineAreaHeadScrollEL: HTMLElement;
  timeLineAreaBodyScrollEL: HTMLElement;
  timelineTotalWidth: number;
  timeLineStartDate: Date;
  currentDate           = new Date();
  timelineScrollLeft    = 0;
  timelineMaxScrollLeft = 0;
  bodyScrollTop         = 0;

  @ViewChild('timeLineAreaHead') private timeLineAreaHead: ElementRef;
  @ViewChild('timeLineAreaBody') private timeLineAreaBody: ElementRef;

  @Input() columns: GanttColumn[];
  @Input() timeline: GanttTimeline;
  @Input() tasks: any[] = [];


  get resourcesTotalWidth() {
    return this.columns
               .map((v) => {
                 return v.style && v.style.width ? v.style.width : 50;
               })
               .reduce((prev: number, current: number, index: number): number => {
                 return prev + current;
               });
  }


  constructor(
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    try {
      this.timeLineStartDate = new Date(this.timeline.startDate);
    } catch ( e ) {
      this.timeLineStartDate = new Date();
    }
  }

  ngAfterViewInit(): void {
    this.timeLineAreaHeadEL       = this.timeLineAreaHead.nativeElement;
    this.timeLineAreaHeadScrollEL = this.timeLineAreaHeadEL.querySelector('.gantt-scoller');
    // this.timeLineAreaBodyEL       = this.timeLineAreaBody.nativeElement;
    // this.timeLineAreaBodyScrollEL = this.timeLineAreaBodyEL.querySelector('.gantt-scoller');
    this.timeLineCellWith      = Math.max(50, this.timeLineAreaHeadEL.clientWidth / this.timeline.duration);
    this.timeLineHeadHeight    = this.timeline.headHeight || 50;
    this.timelineTotalWidth    = this.timeline.duration * this.timeLineCellWith;
    this.timelineScrollLeft    = this.calcCurrentDateDiff() * this.timeLineCellWith;
    this.timelineMaxScrollLeft = Math.max(0, this.timelineTotalWidth - this.timeLineAreaHeadEL.clientWidth);
    // this.timeLineAreaHeadScrollEL.scrollLeft = this.timelineScrollLeft;
    // this.timeLineAreaBodyScrollEL.scrollLeft = this.timelineScrollLeft;
    setTimeout(() => {
      debug('trigger check after view init and scroll config');
      this.cdr.markForCheck();
    });
  }

  onScroll(type, evt: { dx: number, dy: number }) {
    debug('%O scrolling: %O', type, evt);
    let timelineScrollLeftTmp: number;
    if ( type === 'time:head' ) {
      // this.timelineScrollLeft = this.timeLineAreaHeadScrollEL.scrollLeft;
      timelineScrollLeftTmp = this.timelineScrollLeft + evt.dx;
    } else if ( type === 'time:body' ) {
      // this.timelineScrollLeft = this.timeLineAreaBodyScrollEL.scrollLeft;
      timelineScrollLeftTmp = this.timelineScrollLeft + evt.dx;
      this.bodyScrollTop += evt.dy;
    }
    this.timelineScrollLeft = Math.max(0, Math.min(this.timelineMaxScrollLeft, timelineScrollLeftTmp));
    // this.timeLineAreaHeadScrollEL.scrollLeft = this.timelineScrollLeft;
    // this.timeLineAreaBodyScrollEL.scrollLeft = this.timelineScrollLeft;
  }

  calcTimeLineDate(offsetDays: number): Date {
    offsetDays = Math.ceil(offsetDays);
    if ( offsetDays <= 0 ) {
      return this.timeLineStartDate;
    }
    return addDays(this.timeLineStartDate, offsetDays);
  }

  calcTimeLineMonth(): [ Date, number ][  ] {
    const edgeDate      = addDays(this.timeLineStartDate, this.timeline.duration);
    const months        = [];
    let monthMonthCount = differenceInCalendarMonths(edgeDate, this.timeLineStartDate);
    if ( !(getDate(this.timeLineStartDate) === 1 && getMonth(this.timeLineStartDate) === getMonth(edgeDate)) ) {
      monthMonthCount += 1;
    }
    for ( let i = 0; i < monthMonthCount; i++ ) {
      const startOfMonthDateTmp    = i === 0 ? this.timeLineStartDate : startOfMonth(addMonths(this.timeLineStartDate, i));
      const endOfMonthDateTmp      = endOfMonth(startOfMonthDateTmp);
      // tslint:disable-next-line:max-line-length
      const diffDays               = Math.min(differenceInCalendarDays(endOfMonthDateTmp, startOfMonthDateTmp) + 1, differenceInCalendarDays(edgeDate, startOfMonthDateTmp));
      const data: [ Date, number ] = [ endOfMonthDateTmp, diffDays ];
      months.push(data);
    }
    return months;
  }

  calcCurrentDateDiff() {
    return differenceInCalendarDays(Date.now(), this.timeLineStartDate);
  }

  getTimelineItems(length: number = 10) {
    return Array.from({ length }).map((_, i) => i);
  }

  getColumnWidth(column: GanttColumn) {
    return column.style && column.style.width ? column.style.width : 50;
  }

  get currentDateOffsetTimeLineStart() {
    return differenceInCalendarDays(this.currentDate, this.timeLineStartDate);
  }

  getScrollLeft(type: string) {
    switch ( type ) {
      case 'time:head':
      case 'time:body':
        return this.timelineScrollLeft;
      default:
        return null;
    }
  }

  getScrollTop(type: string) {
    switch ( type ) {
      case 'resource:body':
      case 'time:body':
        return this.bodyScrollTop;
      default:
        return null;
    }
  }

  get cellHeight() {
    return this.timeline.rowHeight || 36;
  }
}
