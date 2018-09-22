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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public idToken:string;
  public email: string;
  public password: string;
  public error:string=null;
  public error2:boolean=true;

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
          console.log('logeado 2');
          auth.getIdToken(true).then(idToken =>{
            console.log('error 2');
            console.log(this.error2);
            if(this.error2){
            this.error = "";
            this.error=this.webservice.findGetParameter('error');
            console.log('Variable errorc 2');
            }
            if(this.error == null){
              console.log('vacio 2');
              var url=this.webservice.findGetParameter('signInSuccessUrl');
              console.log(url);
              if(url == null){
                url = "/suite";   
                window.location.href = '/suite';
              }else{
                $.redirect( url, { "idToken": idToken} );
              }
            }else{
              console.log("valor error:" + this.error);
              this.authService.logout();
              $('#error-correo').css('visibility','visible');
              $('#email').css({'color':'red','border-bottom':'1px solid red'});
              $('#error-correo').text('\nEl usuario con el que está\
              intentando ingresar no tiene permisos para acceder a la aplicación');
            }
            $('body').loading('stop');
          }).catch(_error => {
            console.log('Error al Obtener tokenid');
            $('body').loading('stop');
          });
      } else {
          console.log('No logeado');
          $('body').loading('stop');
      }
    });
  }

  onSubmitLogin() {
    $('.formularios').loading({
      overlay: $("#custom-overlay")
    });
    //console.log('submit');
    this.error2 =false;
    console.log(this.email);
    console.log(this.error2);
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      // console.log(res['refreshToken']);
      //window.location.href = '/suite';
      var url=this.webservice.findGetParameter('signInSuccessUrl');
      console.log(url);
      if(url == null){
        url = "/suite";   
        window.location.href = '/suite';
      }else{
        $.redirect( url );
      }
    }).catch((err) => {
      console.log('error suite ');
      $('#error-correo').css('visibility','visible');
      $('#email').css({'color':'red','border-bottom':'1px solid red'});
      $('#error-correo').text('\nEl usuario con el que está\
      intentando ingresar no está registrado en la aplicación');
      $('.formularios').loading('stop');
      //this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
     .then((res) => {
        // console.log(res);
        // console.log(res['user']['uid']);
        this.authService.getAuth().subscribe( auth => {
        if (auth) {
            auth.getIdToken(true).then(idToken =>{
            // console.log(idToken);
            this.webservice.putAsociarMiOrganizacion(idToken,{}).subscribe(data=>{
              // console.log(data);
              //this.webservice.findGetParameter('signInSuccessUrl');
              var url=this.webservice.findGetParameter('signInSuccessUrl');
              if(url == null){
                url = "/suite";   
                this.router.navigate(['/suite']);
                // $('body').loading('toggle');
              }else{
                $.redirect( url, { "idToken": idToken} );
              }
              // if(url == undefined) url = "/suite";   
              //$.redirect( url, { "idToken": idToken} );
            },(error:HttpErrorResponse)=>{
              // console.log(error);
              this.router.navigate(['/suite']);
              $('body').loading('stop');
              // this.router.navigate(['/registro/step2']);
              // window.location.href = '/registro/step2';
            });
          }).catch(_error => {
            this.idToken = "";
            console.log('error login 1');
            $('body').loading('stop');
            // this.router.navigate(['/registro']);
          });
        } else {
            console.log('error login 2');
            $('body').loading('stop');
            // this.idToken = "";
          // this.router.navigate(['/registro']);
        }
      });
       //this.router.navigate(['/registro/step1']);
     }).catch( err => console.log(err.message));
   }

   onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
          this.router.navigate(['/suite']);
      }).catch( err => console.log(err.message));
  }

  

}
