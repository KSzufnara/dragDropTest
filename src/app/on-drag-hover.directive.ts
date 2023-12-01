import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnDragHover]',
})
export class OnDragHoverDirective {
  @HostListener('dragover') onDragOver() {
    this.el.nativeElement.style.borderTop = '4px solid green';
  }

  @HostListener('dragleave') onMouseLeave() {
    this.el.nativeElement.style.borderTop = '2px solid blue';
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.borderTop = '1px solid red';
  }
}
