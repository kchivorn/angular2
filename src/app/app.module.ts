import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component'
import { HomeComponent } from './home/home.component'
import { AppComponent }  from './app.component'
import { AccountsList } from './account/accounts_list.component'
import { AccountForm } from './account/account_form.component'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutes } from './app.routes'

@NgModule({
  imports:      [ BrowserModule, AppRoutes ],
  declarations: [ AppComponent,  AccountsList, AccountForm, HomeComponent, AccountComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
