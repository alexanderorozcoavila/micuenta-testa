import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { FirebaseApp } from '../../../node_modules/angularfire2';

import { WebservicesService } from '../register/webservices.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { forEach, last } from '../../../node_modules/@angular/router/src/utils/collection';
import { isArray } from 'util';
import { isJsObject } from '../../../node_modules/@angular/core/src/change_detection/change_detection_util';

import { Facturas }         from '../facturas';
import { Facturasservice }  from '../facturas.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: [ './factura.component.css' ]
})
export class FacturaComponent {
  facturas: Facturas;
  public idToken:string;
  public idService:string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private factutasService: Facturasservice,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public firebase: FirebaseApp,
    private webservice:WebservicesService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {

        auth.getIdToken(true).then(idToken =>{
          this.webservice.putAsociarMiOrganizacion(idToken,{}).subscribe(data=>{
            console.log(data);
            if((data['organization']==null) || (data['organization']=='null') || data==null){
              window.location.href = '/registro';
            }else{
              this.idToken = idToken;
              console.log(this.idToken);
              this.webservice.getFacturas(idToken).subscribe(data=>{
                console.log(data);
              });
            }
          },(error:HttpErrorResponse)=>{
            console.log(error);
            $('body').loading('stop');
          });
          
        }).catch(_error => {
          
          console.log('error 1');
          
        });
      } else {
        console.log('error 2');
        
      }
    });
     this.getFacturas();

  }

  getFacturas(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    
    this.factutasService.getFactura(4)
      .subscribe(factutas => this.facturas = factutas);
      $('body').loading('stop');
      $('.link-2').addClass('menu-active');
  }

  goBack(): void {
    this.location.back();
  }

    btn_gestion = "Gestión";
    btn_online = "Tienda online";
    btn_ventas = "Ventas";
    btn_mark = "Marketing";
    btn_soport = "Soporte";


}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/