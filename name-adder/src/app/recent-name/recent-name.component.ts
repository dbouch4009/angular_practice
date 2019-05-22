import { Component, OnInit, Input } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-recent-name',
  templateUrl: './recent-name.component.html',
  styleUrls: ['./recent-name.component.css']
})
export class RecentNameComponent implements OnInit {

  @Input() personData: {firstName: string, lastName: string};
  @Input() lastName = 'tester';

  constructor() { }

  ngOnInit() {
    
  }

}
