import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColorHover]',
})
export class ChangeColorHoverDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('mouseover')
  public onMouseOver() {
    this.elementRef.nativeElement.style.color = '#4BB8A6';
    this.elementRef.nativeElement.style.scale = '1.1';
    this.elementRef.nativeElement.style.background = '#eee';
    this.elementRef.nativeElement.style.borderRadius = '5px';
    // this.elementRef.nativeElement.style.border-radius = '#eee';
  }
  @HostListener('mouseout')
  public onMouseOut() {
    this.elementRef.nativeElement.style.color = '#000';
    this.elementRef.nativeElement.style.scale = '1';
    this.elementRef.nativeElement.style.background = 'none';
  }
}
