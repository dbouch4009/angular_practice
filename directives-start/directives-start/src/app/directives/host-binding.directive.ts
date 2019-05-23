import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;  //binding to property of DOM host element
  @HostBinding('style.color') textColor: string; 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.backgroundColor = 'transparent';
    this.textColor = 'black';
  }

}
