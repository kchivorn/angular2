import { NgModule } from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { TransactionComponent } from './transaction.component'
import { CreateTransactionComponent } from './create.component'

const transactionRoutes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent,
    children: [
      { path: 'new', component: CreateTransactionComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      transactionRoutes,{
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class TransactionRoutes{}
