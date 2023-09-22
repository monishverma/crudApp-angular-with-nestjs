import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';

declare var window: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: Users[] = [];
  deleteModal:any;
  itemToDelete: string ='';

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.getAll();
  }

  openDeletePopup(id:string){
    this.itemToDelete = id;
    this.deleteModal.show();
  }

  getAll() {
    this.usersService.get().subscribe((data) => {
      this.users = data;
    })
  }

  delete(){
    this.usersService.delete(this.itemToDelete)
    .subscribe(() => {
      this.users = this.users.filter(_ => _._id !== this.itemToDelete)
      this.deleteModal.hide();
    })
  }

}
