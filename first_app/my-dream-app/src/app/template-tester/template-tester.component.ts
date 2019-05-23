import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-tester',
  template: `
  <p>
    template-tester works!
  </p>
  `,
  styleUrls: ['./template-tester.component.css']
})
export class TemplateTesterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
