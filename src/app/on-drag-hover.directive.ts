import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnDragHover]',
})
export class OnDragHoverDirective {
  @HostListener('dragover', ['$event']) onDragOver($event: DragEvent) {
    //console.log($event);

    const v = this.el.nativeElement.getBoundingClientRect();

    const eventY = $event.y;

    //console.log('event Y:', eventY, v);
    const hgh = v.height / 2;
    const topPart = v.top + hgh;
    const bottomPart = v.bottom - hgh + 1;
    //console.log('Top: ', v.top, topPart);
    //console.log('Bottom: ', v.bottom, bottomPart);
    if (v.top <= eventY && eventY <= topPart) {
      //console.log('TOP');
      this.el.nativeElement.style.borderTop = '2px solid green';
      this.el.nativeElement.style.paddingTop = '0px';
      this.el.nativeElement.style.borderBottom = 'none';
      this.el.nativeElement.style.paddingBottom = '2px';
    }
    if (bottomPart <= eventY && eventY <= v.bottom) {
      //console.log('Bottom');
      this.el.nativeElement.style.borderTop = 'none';
      this.el.nativeElement.style.paddingTop = '2px';
      this.el.nativeElement.style.borderBottom = '2px solid green';
      this.el.nativeElement.style.paddingBottom = '0px';
    }
  }

  @HostListener('dragleave') onMouseLeave() {
    this.el.nativeElement.style.borderTop = 'none';
    this.el.nativeElement.style.borderBottom = 'none';
    this.el.nativeElement.style.paddingTop = '2px';
    this.el.nativeElement.style.paddingBottom = '2px';
  }

  @HostListener('drop') onEnd() {
    this.el.nativeElement.style.borderTop = 'none';
    this.el.nativeElement.style.borderBottom = 'none';
    this.el.nativeElement.style.paddingTop = '2px';
    this.el.nativeElement.style.paddinBgottom = '2px';
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.paddingTop = '2px';
    this.el.nativeElement.style.paddingBottom = '2px';
  }
}
