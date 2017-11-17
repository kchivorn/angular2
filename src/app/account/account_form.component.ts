import { Component, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core'
import { Account } from './account.model'

@Component({
  selector: 'account-form',
  templateUrl: './account_form.component.html',
  styleUrls: ['./account_form.component.css']
})

export class AccountForm {
  @ViewChild('form') form:ElementRef

  @Output() created = new EventEmitter<Account>()

  private createAcc(titleEl:any, descEl:any, balEl:any){
    var account = new Account(0, titleEl.value, descEl.value, balEl.value)
    this.created.emit(account)
  }

  public resetForm(){
    this.form.nativeElement.reset()
  }

  @Input() error:string
}
