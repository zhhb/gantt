import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { debug as Debug } from 'debug';

const debug = Debug('Gantt:Resizer');

@Directive({
  selector: '[ganttResizer]'
})
export class ResizerDirective {
  private readonly el: HTMLElement;
  private captured = false;

  @Output() resizing: EventEmitter<PointerEvent> = new EventEmitter();

  constructor(private elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  @HostListener('pointerdown', [ '$event' ])
  onMouseDown(evt: PointerEvent) {
    this.el.setPointerCapture(evt.pointerId);
    this.captured = true;
    debug('pointerdown capture event keep on this dom: %O', this.el);
  }

  @HostListener('pointermove', [ '$event' ])
  onMouseMove(evt: PointerEvent) {
    if ( !this.captured ) {
      return;
    }
    this.resizing.emit(evt);
    debug('pointermove: %O, %O, x: %d,y: %d', this.el, evt, evt.clientX, evt.clientY);
  }

  @HostListener('pointerup', [ '$event' ])
  onMouseUp(evt: PointerEvent) {
    this.el.releasePointerCapture(evt.pointerId);
    this.captured = false;
    debug('pointerup release event on this dom: %O', this.el);
  }
}
