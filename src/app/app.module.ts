import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component'
import { HomeComponent } from './home/home.component'
import { AppComponent }  from './app.component'
import { AccountsList } from './account/accounts_list.component'
import { AccountForm } from './account/account_form.component'
import { CreateComponent } from './account/create.component'
import { ListComponent } from './account/list.component'
import { DetailsComponent } from './account/details.component'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutes } from './app.routes'
import { AccountRoutes } from './account/account.routes'
import { TransactionComponent } from './transaction/transaction.component'
import { CreateTransactionComponent } from './transaction/create.component'
import { TransactionRoutes } from './transaction/transaction.routes'

@NgModule({
  imports:      [ BrowserModule, AppRoutes, AccountRoutes, TransactionRoutes ],
  declarations: [ AppComponent,  AccountsList, AccountForm,
                  HomeComponent, AccountComponent, CreateComponent,
                  ListComponent, DetailsComponent, TransactionComponent,
                  CreateTransactionComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
