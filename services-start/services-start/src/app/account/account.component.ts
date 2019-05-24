import { Component,  Input, } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.services';
import { stat } from 'fs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]  //do not put AccountService in here to be able to inherit service instance from app component
    //also not necessary if it is imported in app.module.ts, because it will inherit the same instance
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
    constructor(private loggingService: LoggingService, private accountsService: AccountsService){
  }

  onSetTo(status: string){
    this.accountsService.statusUpdated.emit(status);  //services approach to passing data
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }


}
