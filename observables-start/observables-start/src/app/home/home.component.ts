import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { timeout } from 'q';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstObsSubscription: Subscription;  //to prevent memory leaks pt 1

  constructor() { }

  ngOnInit() {
    //building new observable with rxjs package
    // this.firstObsSubscription = interval(1000).subscribe(count => {  //every 1000 ms, prevent memory leak pt 2
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count == 2){
          observer.complete();  //complete condition for observable, will stop it
        }
        if(count > 10){
          observer.error(new Error('Count is greater than 3!'));          
        }
        count++;
      }, 1000);
    });

    //using operators to adjust output
    this.firstObsSubscription = customIntervalObservable.pipe(map((data)=> {  //argument is current data of observable
      return 'Round ' + data;
    }))    
    .subscribe(data => {
      console.log(`Customer interval data: ${data}`);
    }, error => {
      alert(error.message);
    },  () => {
      console.log('Observable Completed!');
    });
  }

  ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe();  //prevent memory leak pt 3
  }

}
