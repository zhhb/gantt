import { debug as Debug } from 'debug';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

const debug = Debug('Gantt:Scroller');

@Directive({
  selector: '[ganttScroller]',
})
export class ScrollerDirective implements AfterViewInit, OnChanges {

  private el: HTMLElement;
  private previousTouch: Touch;

  @Input() scrollVertical: number;
  @Input() scrollHorizontal: number;

  @Output() ganttScrolling: EventEmitter<{ dx?: number, dy?: number }> = new EventEmitter();

  constructor(private elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    debug('changes', changes);
    if ( changes.scrollHorizontal && !changes.scrollHorizontal.firstChange ) {
      this.el.scrollLeft = this.scrollHorizontal;
    }
  }

  ngAfterViewInit(): void {

  }

  @HostListener('wheel', [ '$event' ])
  @HostListener('mousewheel', [ '$event' ])
  @HostListener('touchmove', [ '$event' ])
  @HostListener('DomMouseScroll', [ '$event' ])
  @HostListener('MozMousePixelScroll', [ '$event' ])
  onWheel(evt: MouseWheelEvent | WheelEvent | TouchEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    const distances = {
      dx: 0,
      dy: 0
    };
    if ( evt instanceof TouchEvent ) {
      const touchs       = evt.touches || evt.changedTouches;
      distances.dx       = this.previousTouch.screenX - touchs[ 0 ].screenX;
      distances.dy       = this.previousTouch.screenY - touchs[ 0 ].screenY;
      this.previousTouch = touchs[ 0 ];
    } else {
      distances.dx = (evt as (MouseWheelEvent | WheelEvent)).deltaX;
      distances.dy = (evt as (MouseWheelEvent | WheelEvent)).deltaY;
    }
    this.ganttScrolling.emit(distances);
  }

  @HostListener('touchstart', [ '$event' ])
  onTouchStart(evt: TouchEvent) {
    const touchs       = evt.touches || evt.changedTouches;
    this.previousTouch = touchs[ 0 ];
  }

  @HostListener('touchend')
  onTouchEnd() {
    this.previousTouch = null;
  }

  @HostListener('scroll', [ '$event' ])
  onScroll(evt: Event) {
    // evt.stopPropagation();
    // evt.preventDefault();
  }
}
