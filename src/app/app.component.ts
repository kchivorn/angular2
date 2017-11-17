import { Component, ViewChild, Injector } from '@angular/core';
import { Account } from './account/account.model';
import { AccountsList } from './account/accounts_list.component'
import { AccountForm } from './account/account_form.component'
import { AccountService, ACCOUNT_SERVICE_PROVIDERS } from './account/account.services'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ACCOUNT_SERVICE_PROVIDERS]
})

export class AppComponent  {
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
