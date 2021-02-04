import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  users: any;
  totalRecords: number | any;;
  page: number=1;
  constructor(private _userService: UserService) { }

  ngOnInit(): void { 
    this._userService.getUsers().subscribe( data => {
      this.users = data;
      this.totalRecords = this.users.length;
      // console.log(data)
    })
  }
}


