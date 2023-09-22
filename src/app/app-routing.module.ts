import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users/users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent
}, 
{
  path: 'add-user',
  component: AddUsersComponent
},
{
  path: 'edit-user/:id',
  component: EditUsersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
