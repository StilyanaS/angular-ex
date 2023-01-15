import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCheckEmptyInputs]',
})
export class CheckEmptyInputsDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('focusout')
  onFocusOut() {
    if (!this.elementRef.nativeElement.value) {
      this.elementRef.nativeElement.style.border = '2px solid red';
    } else {
      this.elementRef.nativeElement.style.border = '1px solid #ced4da';
    }
  }
}
