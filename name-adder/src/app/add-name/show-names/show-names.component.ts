import { Component, OnInit, Input } from '@angular/core';
import { Names } from 'src/app/entities/names';
import { NamesListService } from 'src/app/services/namesList.service';

@Component({
  selector: 'app-show-names',
  templateUrl: './show-names.component.html',
  styleUrls: ['./show-names.component.css'],
  providers: [NamesListService]
})
export class ShowNamesComponent implements OnInit {

  @Input() personEntity: Names;
  //displayedName: Names;

  constructor(private namesListService: NamesListService) { }

  ngOnInit() {

  }

}
