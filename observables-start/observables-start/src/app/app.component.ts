import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService){    

  }

  ngOnInit(){
    this.activatedSub = this.userService.activatedEmitter.subscribe(isActivated => {
      this.userActivated = isActivated;
    });
  }

  ngOnDestroy(): void{
    this.activatedSub.unsubscribe();
  }
}
