import { Component, OnInit } from '@angular/core';

import {AuthService } from '../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { FirebaseApp } from '../../../node_modules/angularfire2';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { WebservicesService } from '../register/webservices.service';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  public idToken:string;
  public email: string;
  public password: string;
  public error:string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public firebase: FirebaseApp,
    private webservice:WebservicesService
  ) { }
  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.authService.logout().then(data =>{
          this.router.navigate(['/login']);
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
