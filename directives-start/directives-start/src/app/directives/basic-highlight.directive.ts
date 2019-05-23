import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'  //using [] here makes it unnecessary to use them when selecting it in HTML
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){    //reference to component the directive is 'sitting on'

    }  

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';  //not best practice
    }
}