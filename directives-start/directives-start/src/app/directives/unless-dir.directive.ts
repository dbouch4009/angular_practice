import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessDir]'
})
export class UnlessDirDirective {
  @Input() set appUnlessDir(value: boolean){  //method executes whenever this property changes
    if(!value){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
