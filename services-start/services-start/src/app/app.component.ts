import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService){}  //providing access to Accounts service

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
