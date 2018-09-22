import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuiteComponent }   from './suite/suite.component';
import { MicuentaComponent }   from './micuenta/micuenta.component';
import { FacturaComponent }   from './factura/factura.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { SoporteComponent } from './soporte/soporte.component';


import {AuthGuard} from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';

// import { APP_BASE_HREF } from '@angular/common';


export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'recuperar', component: RecuperarComponent},
  { path: 'recuperar/:accion', component: RecuperarComponent},
  { path: 'registro', component: RegisterComponent},
  { path: 'registro/:accion', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: '', component: SuiteComponent, canActivate: [AuthGuard] },
  { path: 'suite', component: SuiteComponent, canActivate: [AuthGuard],data: {preload: true} },
  { path: 'micuenta', component: MicuentaComponent,canActivate: [AuthGuard] },
  { path: 'factura', component: FacturaComponent,canActivate: [AuthGuard] },
  { path: 'micuenta/:id', component: MicuentaComponent,canActivate: [AuthGuard] },
  { path: 'suscripcion/:accion', component: SuscripcionComponent,canActivate: [AuthGuard]},
  { path: 'soporte', component: SoporteComponent,canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent},


  // { path: '', component: SuiteComponent},
  // { path: 'suite', component: SuiteComponent},
  // { path: 'micuenta', component: MicuentaComponent},
  // { path: 'factura', component: FacturaComponent},
  // { path: 'micuenta/:id', component: MicuentaComponent},
  // { path: 'suscripcion', component: SuscripcionComponent},
  // { path: 'soporte', component: SoporteComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/