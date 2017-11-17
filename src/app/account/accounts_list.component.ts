import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: './accounts_list.component.html',
  styleUrls: ['./accounts_list.component.css']
})

export class AccountsList {
  @Input('accounts') _accounts:Array<Account>;
  @Output() delete = new EventEmitter<Number>()

  private _removeAcc(index:number){
    this.delete.emit(index)
  }
}
