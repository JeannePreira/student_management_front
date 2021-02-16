import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deconnect(){
    localStorage.removeItem('token'); 
    this.router.navigate(['']); 
    Swal.fire({
      icon: 'success',
      title: 'Utilisateur Déconnecté!',
      text: 'À la prochaine!',
      position: 'top'
    })
  }
}
