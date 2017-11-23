import { Component } from '@angular/core'
import { Account } from './account.model'
import { AccountService } from './account.services'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './list.component.html'
})

export class ListComponent {
  private _accounts:Array<Account> = [];
  private _accountService:AccountService

  constructor(accountService: AccountService, private _router:Router, private _route:ActivatedRoute) {
    this._accountService = accountService
    var promise = this._accountService.getAll()
    promise.then(accounts => this._accounts = accounts)
  }

  private removeAcc(index:number){
    this._accountService.remove(index).then(account => console.log(account));
  }

  private _showAccountDetails(account:Account){
    this._router.navigate(['..', account.id], { relativeTo: this._route})
  }
}
