import { Component, OnInit } from '@angular/core';
import { CreateOrUpdateUser } from '../create-or-update-user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit{
  
  constructor(
    private usersService: UsersService,
    private router: Router
  ){}

  users:CreateOrUpdateUser={
    name:'',
    skills:'',
    email:'',
    gender:''
  };
  
  ngOnInit(): void {}

  create(){
    this.usersService.create(this.users).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
