import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AccountComponent } from './account.component'
import { CreateComponent } from './create.component'
import { ListComponent } from './list.component'
import { DetailsComponent } from './details.component'

const accountRoutes: Routes = [
  {
    path: 'accounts',
    component: AccountComponent,
    children: [
      { path: 'lists', component: ListComponent },
      { path: 'new', component: CreateComponent },
      { path: '', redirectTo: 'lists', pathMatch: "full" },
      { path: ':id', component: DetailsComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      accountRoutes,{
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AccountRoutes {}
