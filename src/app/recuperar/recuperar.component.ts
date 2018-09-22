import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService } from '../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { FirebaseApp } from '../../../node_modules/angularfire2';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { HttpClientModule } from '@angular/common/http'; 
// import { HttpModule } from '@angular/http';

// import { Http ,HttpModule} from '@angular/http'
// import { HttpClient } from '../../../node_modules/@angular/common/http';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { constants } from 'perf_hooks';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { WebservicesService } from '../register/webservices.service';
// import { firebase }  from '../../../node_modules/firebase' ;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  accion:string="";
  titulo:boolean=true;
  campoclave:boolean=false;
  campomail:boolean=true;
  mensajeerror:boolean=false;
  siguiente:boolean=true;
  actualizar:boolean=false;
  texto1:string="Recuperar contraseña";
  texto2:string="Te enviaremos una nueva contraseña a tu correo electrónico";
  textobtn:string="ENVIAR";
  urlbtn:string="/recuperar/clave";

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public firebase: FirebaseApp,
    private webservice:WebservicesService
  ) { }

  ngOnInit() {

    this.accion = this.route.snapshot.paramMap.get('accion');
    if(this.accion=='clave'){
      this.campomail = false;
      this.campoclave = true;
      this.siguiente = false;
      this.actualizar = true;
      this.texto1 = "Cambiar contraseña";
      this.textobtn = "CAMBIAR";
      this.urlbtn = "/";
    }
    if(this.accion=='mensaje'){
      
      this.campomail = false;
      this.siguiente = false;
      this.texto2 = "Le hemos enviado un email de restablecimiento de contraseña a ";
      //this.ocultar = false;
      this.texto1 = "Cambiar contraseña";

    }
    $('body').loading('stop');
  }

  recuperarClave(){
    let auth = this.firebase.auth();
    let emailAddress = $('#mail').val();
    auth.languageCode = 'es';
    //auth.currentUser.
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      console.log('enviado');
      window.location.href = '/recuperar/mensaje';
    }).catch(function(error) {
      // An error happened.
      console.log('error');
    });
  }


  handleResetPassword() {
    let mode = this.webservice.findGetParameter('mode');
    let actionCode = this.webservice.findGetParameter('oobCode');
    let apiKey = this.webservice.findGetParameter('apiKey');
    let continueUrl = this.webservice.findGetParameter('continueUrl');
    let auth = this.firebase.auth();
    let newPassword = $('#clave').val();
    // Verify the password reset code is valid.
    console.log(mode);
    console.log(actionCode);
    console.log(newPassword);
    console.log(apiKey);
    console.log(continueUrl);

    auth.verifyPasswordResetCode(actionCode).then(function(email) {
      var accountEmail = email;
      console.log(email);
      auth.confirmPasswordReset(actionCode, newPassword).then(function(resp) {
        
        console.log(resp);
        
      }).catch(function(error) {
        
        console.log(error);
      });
    }).catch(function(error) {
      
      console.log(error);
    });
  }

}
