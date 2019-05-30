import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],  //fetching from route query, users/:id/:name
      name: this.activeRoute.snapshot.params['name']
    };
    //this.paramsSubscription = this.activeRoute.params  //optional part if one's own observables are implemented
      this.activeRoute.params
      .subscribe(
        //this will fire whenever the params change via clicking Bogart's button,
        // cont'd or anything else that changes the URL route
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }             
      );
  }

  //optional, but if you add your own observables this is necessary
  // ngOnDestroy(){
  //   this.paramsSubscription.unsubscribe();
  // }

}
