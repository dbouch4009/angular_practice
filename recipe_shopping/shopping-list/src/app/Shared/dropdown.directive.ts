import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;  //binding to the specific css class

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
