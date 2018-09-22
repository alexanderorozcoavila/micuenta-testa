import { Component, OnInit } from '@angular/core';
import {AuthService } from '../servicios/auth.service';
import {Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;
  constructor(
    public authService: AuthService,
    public router: Router,

  ) { }

  ngOnInit() {
    // $('body').loading({
    //   overlay: $("#custom-overlay")
    // });
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.email;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
        console.log(this.emailUsuario);
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
