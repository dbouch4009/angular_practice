import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    //execute complex calculation, server call, etc.
    this.router.navigate(['/servers']);  //programmatic navigation
  }

  onLoadServer(id: number){
    this.router.navigate(['/servers',id,'edit'],
      {queryParams: {allowEdit: '1'},
      fragment: 'loading'}
    );
  }

}
