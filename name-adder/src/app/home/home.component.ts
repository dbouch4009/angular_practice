import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
      (queryParams: Params) => {
        //this.router.navigate([queryParams],{relativeTo: this.activeRoute});
      }
    )
  }

  onSelectGames(){
    //this.router.navigate(['games'], {relativeTo:this.activeRoute});
    // this.router.navigate(['games']);
    console.log('To Games');
  }

  onSelectNames(){
    // this.router.navigate(['names'], {relativeTo:this.activeRoute});
    // this.router.navigate(['names']);
    console.log('To Names');
  }

}
