import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
// import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Router, PreloadAllModules } from '@angular/router';


import { AppComponent }         from './app.component';
import { SuiteComponent }   from './suite/suite.component';
import { MicuentaComponent }   from './micuenta/micuenta.component';
import { FacturaComponent }   from './factura/factura.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';

import { AppRoutingModule, routes }     from './app-routing.module';
import { SoporteComponent } from './soporte/soporte.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AuthService } from './servicios/auth.service';
import { WebservicesService } from './register/webservices.service';
import {AuthGuard} from './guards/auth.guard';
import {FlashMessagesService} from 'angular2-flash-messages';
import { RecuperarComponent } from './recuperar/recuperar.component';
// import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CustomPreloading } from './custom-preloading';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { SuscripcionComponent } from './suscripcion/suscripcion.component';

@NgModule({
  imports: [
    NgbModule,
    RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, WebservicesService,CustomPreloading],
  declarations: [
    AppComponent,
    SuiteComponent,
    MicuentaComponent,
    FacturaComponent,
    SuscripcionComponent,
    SoporteComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    RecuperarComponent,
    LogoutComponent,
    ErrorComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/