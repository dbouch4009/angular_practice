import { Component, OnInit, Input } from '@angular/core'; //Input needed for Input decorator

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('bigSexy') element: {type: string, name: string, content: string};  //@Input needed for custom databinding
    // bigSexy is the alias for targeting in parent elements

  constructor() { }

  ngOnInit() {
  }

}
