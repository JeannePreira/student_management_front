import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { User } from 'src/app/models/user/user.module'
import { UserService } from 'src/app/user.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user: User | any
  selectedFile: File  |any
  idEdit = 0
  prenom =""
  constructor(private userService: UserService, private route: ActivatedRoute) {
    
  } 

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.userService.getUserById(+id).subscribe(
          (data)=>{
            this.user = data;
            // console.log(data.id);
          })
      });
  }
}
