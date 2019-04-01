import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { debug as Debug } from 'debug';

const debug = Debug('Gantt:Resizer');

@Directive({
  selector: '[ganttResizer]'
})
export class ResizerDirective {
  private readonly el: HTMLElement;
  private captured = false;

  @Output() resizing: EventEmitter<MouseEvent | PointerEvent> = new EventEmitter();

  constructor(private elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }

  @HostListener('pointerdown', [ '$event' ])
  @HostListener('mousedown', [ '$event' ])
  onMouseDown(evt: MouseEvent | PointerEvent) {
    this.el.setPointerCapture(1);
    this.captured = true;
    debug('pointerdown capture event keep on this dom: %O', this.el);
  }

  @HostListener('pointermove', [ '$event' ])
  @HostListener('mousemove', [ '$event' ])
  onMouseMove(evt: MouseEvent | PointerEvent) {
    if ( !this.captured ) {
      return;
    }
    this.resizing.emit(evt);
    debug('pointermove: %O, %O, x: %d,y: %d', this.el, evt, evt.clientX, evt.clientY);
  }

  @HostListener('mouseup', [ '$event' ])
  onMouseUp(evt: MouseEvent | PointerEvent) {
    this.el.releasePointerCapture(1);
    this.captured = false;
    debug('pointerup release event on this dom: %O', this.el);
  }
}
