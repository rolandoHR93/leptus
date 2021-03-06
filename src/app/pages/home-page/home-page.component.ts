import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  implements OnInit {

  currentUser: any;
  ServiciosSoftware?: any;

  constructor(private token:TokenStorageService,
    private router: Router,
    private service: HomePageService,
    ) { }

    ngOnInit(): void {
      this.currentUser = this.token.getUser();
      this.getServicesList();
    }

    getServicesList(): void {
      this.service.getServiciosSoftware()
        .subscribe(
          data => {
            this.ServiciosSoftware =  data;
            console.log(this.ServiciosSoftware);
          },
          error => {
            console.log(error);
          });
    }

    salir(){
      this.token.signOut();
      this.router.navigateByUrl('/');
    }

}
