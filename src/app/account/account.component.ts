import { Component, ViewChild, Injector } from '@angular/core';
import { Account } from './account.model';
import { AccountsList } from './accounts_list.component'
import { AccountForm } from './account_form.component'
import { AccountService, ACCOUNT_SERVICE_PROVIDERS } from './account.services'

@Component({
  selector: 'accounts',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ACCOUNT_SERVICE_PROVIDERS]
})

export class AccountComponent  {
  private _accounts:Array<Account> = [];
  private _accountService:AccountService
  constructor(accountService: AccountService) {
    this._accountService = accountService
    var promise = this._accountService.getAll()
    promise.then(accounts => this._accounts = accounts)
  }

  private createAccError:string = ""
  private accLimit:Number = 2
  private createAcc(newAccount:Account){
    this._accountService.create(newAccount).then(account => {
      console.log(account)
      this.createAccError = ""
      this.form.resetForm()
    })
    .catch(err => this.createAccError = err)
  }

  private removeAcc(index:number){
    this._accountService.remove(index).then(account => console.log(account))
  }

  @ViewChild(AccountForm) form:AccountForm
}
