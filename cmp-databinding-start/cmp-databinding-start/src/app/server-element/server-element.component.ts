import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core'; //Input needed for Input decorator

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation: ViewEncapsulation.  //this is for changing style encapsulation
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('bigSexy') element: {type: string, name: string, content: string};  //@Input needed for custom databinding
    // bigSexy is the alias for targeting in parent elements
  @Input() name: string;

  changeIterator: number = 0;

  onChangeFirst(){
    this.changeIterator ++;
    this.element.name='Changed: ' + this.changeIterator.toString();  
  }

  constructor() {
    //console.log("constructor called");
   }

  ngOnInit() {
    //console.log("ngOnInit called");
  }

  ngOnChanges(changes: SimpleChanges){  //don't forget about implementing interface!
    console.log('ngOnChanges called');
    //console.log(changes);
  }

  ngDoCheck(){
    //console.log('ngDoCheck called');
    //console.log(this);
  }

  ngAfterContentInit(){
    //console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    //console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(){
    //console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(){
    //console.log('ngAfterViewInit called');
  }

  ngOnDestroy(){
    //console.log('ngOnDestroy called');
  }

}
