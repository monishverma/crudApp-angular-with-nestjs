import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { CreateOrUpdateUser } from '../create-or-update-user';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit{

  constructor(private route:ActivatedRoute,
    private usersService:UsersService,
    private router:Router){}

  itemId:string='';

  users:CreateOrUpdateUser={
    name:'',
    skills:'',
    email:'',
    gender:''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      this.itemId = params.get('id') ?? '';
      this.getById();
    });
  }

  getById(){
    this.usersService.getById(this.itemId)
    .subscribe((data) => {
      this.users.name = data.name;
      this.users.skills = data.skills;
      this.users.email = data.email;
      this.users.gender = data.gender;
    })
  }

  update(){
    this.usersService.update(this.itemId, this.users)
    .subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
