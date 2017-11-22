import { Component, ViewChild } from '@angular/core';
import { Account } from './account.model';
import { AccountForm } from './account_form.component'
import { AccountService } from './account.services'

@Component({
  templateUrl: './create.component.html'
})

export class CreateComponent {
  private _accountService:AccountService;
  constructor(accountService:AccountService){
    this._accountService = accountService;
  }

  private createAccError:string = ""

  private createAcc(newAccount:Account){
    this._accountService.create(newAccount).then(account => {
      console.log(account)
      this.createAccError = ""
      this.form.resetForm()
    }).catch(err => this.createAccError = err)
  }

  private removeAcc(index:number){
    this._accountService.remove(index).then(account => console.log(account));
  }

  @ViewChild(AccountForm) form: AccountForm
}
