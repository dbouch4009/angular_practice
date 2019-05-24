import { Component,  Output } from '@angular/core';
import {LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]  // for service dependency injection in ctor  // do not have AccountsService here so that we can inherit the same instance from app.component
    ////also not necessary if it is imported in app.module.ts, because it will inherit the same instance
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){   //service injection best practice
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
      );
  };

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
