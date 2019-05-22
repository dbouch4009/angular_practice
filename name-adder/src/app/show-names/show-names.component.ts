import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-names',
  templateUrl: './show-names.component.html',
  styleUrls: ['./show-names.component.css']
})
export class ShowNamesComponent implements OnInit {

  @Input() personEntity: {firstName: string, lastName: string};

  constructor() { }

  ngOnInit() {
  }

}
