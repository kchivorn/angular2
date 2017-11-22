import { Component, ViewChild, Injector } from '@angular/core';
import { AccountService, ACCOUNT_SERVICE_PROVIDERS } from './account.services'

@Component({
  selector: 'accounts',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ACCOUNT_SERVICE_PROVIDERS]
})

export class AccountComponent  {}
