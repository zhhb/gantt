import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
import { GanttColumn } from './gantt.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector       : 'gantt',
  templateUrl    : './gantt.component.html',
  styles         : [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GanttComponent implements OnInit, AfterViewInit {

  private timeLineCellWith = 50;
  private timeLineAreaHeadEL: HTMLElement;
  private timeLineAreaHeadScrollEL: HTMLElement;
  private timelineTotalWidth: number;
  private timeLineStartDate: Date;

  @ViewChild('timeLineAreaHead') private timeLineAreaHead: ElementRef;
  @ViewChild('timeLineAreaBody') private timeLineAreaBody: ElementRef;

  @Input() columns: GanttColumn[];
  @Input() timeline: any;
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
      this.timeLineStartDate = this.timeline.startDate;
    } catch ( e ) {
      this.timeLineStartDate = new Date();
    }
  }

  ngAfterViewInit(): void {
    this.timeLineAreaHeadEL                  = this.timeLineAreaHead.nativeElement;
    this.timeLineAreaHeadScrollEL            = this.timeLineAreaHeadEL.querySelector('.gantt-scoller');
    this.timeLineCellWith                    = Math.max(50, this.timeLineAreaHeadEL.clientWidth / this.timeline.duration);
    this.timelineTotalWidth                  = this.timeline.duration * this.timeLineCellWith;
    this.timeLineAreaHeadScrollEL.scrollLeft = this.calcCurrentDateDiff() * this.timeLineCellWith;
    setTimeout(() => this.cdr.markForCheck());
  }

  private calcTimeLineDate(offsetDays: number): Date {
    offsetDays = Math.ceil(offsetDays);
    if ( offsetDays <= 0 ) {
      return this.timeLineStartDate;
    }
    return addDays(this.timeLineStartDate, offsetDays);
  }

  private calcTimeLineMonth(): [ Date, number ][  ] {
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

  private calcCurrentDateDiff() {
    return differenceInCalendarDays(Date.now(), this.timeLineStartDate);
  }

  private getTimelineItems(length: number = 5) {
    return Array.from({ length }).map((_, i) => i);
  }

  private getColumnWidth(column: GanttColumn) {
    return column.style && column.style.width ? column.style.width : 50;
  }
}
