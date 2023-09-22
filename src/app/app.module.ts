import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { FormsModule } from '@angular/forms';
import { EditUsersComponent } from './users/edit-users/edit-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
