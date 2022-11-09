import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective {

  clickCount: number = 0;

  constructor(
    private el: ElementRef
  ) { }

  @Output() public clickOustide = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {

    const clickedInside = this.el.nativeElement.contains(target);

    if(!clickedInside) {
      this.clickCount += 1
      this.clickOustide.emit(this.clickCount);
      // console.log(this.clickCount)
    }

  }

}
