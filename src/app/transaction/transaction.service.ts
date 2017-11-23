import { Injectable } from '@angular/core'
import { Transaction } from './transaction.model'
import { Account } from '../account/account.model'

@Injectable()
export class TransactionService{
  private _transactions:Array<Transaction> = [
    new Transaction("1", 50, "Something", new Date(), ["Tag1"], 1),
    new Transaction("2", 120.5, "Deposit at ATM abc", new Date(), ["Tag2", "Tag3"], 2),
    new Transaction("4", -15.6, "Withdrew at ATM cdf", new Date(), ["Tag2", "Tag1"], 1)
  ]

  public getByAccount(accountId: number):Promise<Array<Transaction>> {
    return new Promise((resolve, reject) => {
      resolve(this._transactions.filter(trans => trans.accountId = accountId))
    })
  }
}

export const TRANSACTION_SERVICE_PROVIDERS:Array<any> = [TransactionService]
