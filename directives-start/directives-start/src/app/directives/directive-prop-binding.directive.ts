import { Directive, Input, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirectivePropBinding]'
})
export class DirectivePropBindingDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;  //binding to property of DOM host element
  @HostBinding('style.color') textColor: string; 
  @Input() defaultColor: string = 'green';  //these are default values, to be overridden in HTML
  @Input() highlightColor: string = 'pink';  

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}
