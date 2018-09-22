import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { FirebaseApp } from '../../../node_modules/angularfire2';

import { WebservicesService } from '../register/webservices.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { forEach, last } from '../../../node_modules/@angular/router/src/utils/collection';
import { isArray } from 'util';
import { isJsObject } from '../../../node_modules/@angular/core/src/change_detection/change_detection_util';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: [ './suite.component.css' ]
})
export class SuiteComponent implements OnInit {
  public idToken:string;
  public idService:string;
  public product:Array<productos> = [];
  public status:Array<statusObject> = [];
  public servicios:Array<serviceOrganizacion> = [];

  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public firebase: FirebaseApp,
    private webservice:WebservicesService
  ) { }

  ngOnInit() {
    // $('body').loading({
    //     overlay: $("#custom-overlay")
    //   });
    
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
              this.consultarStatusSistemas(this.idToken);
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
    
  }
  active_suite = 'menu-active';
  title = 'Suite';


  public consultarServicios(idtoken){
    console.log("====================== 02 ===============================");
    this.webservice.getStatusServicioOrganizacion(idtoken).subscribe(data=>{
      let keys = Object.keys(data);
      let i = 0;
      keys.forEach(k => {
        
        let c = Array(data[k]);
        c.forEach(i =>{
          let s = new serviceOrganizacion();
          let keys2 = Object.keys(i);
          console.log('servicios');
          console.log(keys2[0]);
          console.log(i[keys2[0]]['contract']);
          s.id = keys2[0];
          s.organizacion = i[keys2[0]]['organization'];
          s.producto = i[keys2[0]]['product'];
          s.estatus  = i[keys2[0]]['status'];
          s.contrato = i[keys2[0]]['contract'];
          s.subdominio = i[keys2[0]]['subdomain'];
          this.servicios.push(s);
        });
        console.log(this.servicios);

      });
      this.consultarProductos(this.idToken);
      
    },error=>{
      $('body').loading('stop');
    });
  }

  public consultarStatusSistemas(idtoken){
    console.log("====================== 01 ===============================");
    this.webservice.getEstatusSistema(idtoken).subscribe(data=>{
      console.log(data);
      let keys = Object.keys(data);
      let i = 0;
      keys.forEach(k => {
        
        let c = Array(data[k]);
        let p = new statusObject();
        p.id = k;
        p.name = c[0]['name'];

        //console.log(p);
        this.status.push(p);
      });
      this.consultarServicios(this.idToken);
    });
  }

  public consultarProductos(idtoken){
    console.log("====================== 03 ===============================");
    this.idToken = idtoken;
    this.webservice.getProductos(idtoken).subscribe(data=>{
      //console.log(data);
      let keys = Object.keys(data);
      let i = 0;
      keys.forEach(k => {
        
        let c = Array(data[k]);
        let p = new productos();
        let s = "inactive";
        let sub ="";
        p.id = k;
        p.image = c[0]['image'];
        let img = p.image.split(".", 2); 
        p.image_gris = img[0]+"-gris."+img[1];
        p.label = c[0]['label'];
        p.name = c[0]['name'];
        p.domain = c[0]['domain'];
        console.log(p);
        this.servicios.forEach(servicio => {
          if(servicio.producto == p.id){
            this.status.forEach(estatu =>{
              if(estatu.id == servicio.estatus){
                s = estatu.name;
              }
            });
            sub = servicio.subdominio;
          }
        });
        console.log(s);
        switch(s){
          case 'demo':
            console.log('demo');
            p.textlink = "Comprar ahora";
            p.cssstatus = "active";
            p.image = p.image;
            p.linksbox ='http://' + sub + p.domain;
            p.disable = false;
            p.links = "/suscripcion/"+p.name;
            p.status = "";
            p.css1 = "item-superio rojo";
            p.css2 = "item-img";
            p.css3 = "item-text";
            p.css4 = "item-inferio";
            p.css5 = "item-name-comprar";
            p.texto = "INGRESAR A DEMO";
            break;
          case 'active':
            console.log('active');
            p.image = p.image;
            p.cssstatus = "active";
            p.textlink = "";
            p.linksbox ='http://' + sub + p.domain;
            p.disable = false;
            p.status = "";
            p.css1 = "item-superio";
            p.css2 = "item-img";
            p.css3 = "item-text";
            p.css4 = "item-inferio";
            p.css5 = "item-name";
            p.texto = "INGRESAR";
            break;
          case 'unpaied':
            console.log('unpaied');
            p.image = p.image;
            p.cssstatus = "inactive";
            p.textlink = "Pagar servicio adeudado";
            p.linksbox ='';
            p.disable = false;
            p.links = "";
            p.status = "";
            p.css1 = "item-superio rojo";
            p.css2 = "item-img";
            p.css3 = "item-text";
            p.css4 = "item-inferio";
            p.css5 = "item-name-comprar";
            p.texto = "INGRESAR";
            break;
          case 'inactive':
            console.log('inactive');
            p.image = p.image_gris;
            p.cssstatus = "inactive";
            p.textlink = "Solicitar demo";
            p.linksbox ="";
            p.disable = true;
            p.links = "/suscripcion/"+p.name;
            p.status = "";
            p.css1 = "item-superio gris";
            p.css2 ="item-img";
            p.css3 = "item-text-inactivo";
            p.css4 = "item-inferio";
            p.css5 = "item-name-inactivo";
            p.texto = "SIN PERMISOS";
            break;
          case 'inaccessible':
            console.log('inaccessible');
            p.image = p.image_gris;
            p.cssstatus = "inactive";
            p.textlink = "Solicitar";
            p.linksbox = "";
            p.disable = true;
            p.links = "/suscripcion/"+p.name;
            p.status = "";
            p.css1 = "item-superio gris";
            p.css2 ="item-img";
            p.css3 = "item-text-inactivo";
            p.css4 = "item-inferio";
            p.css5 = "item-name-inactivo";
            p.texto = "SIN PERMISOS";
            break;
          case 'pending':
            console.log('pending');
            p.image = p.image_gris;
            p.cssstatus = "inactive";
            p.textlink = "Solicitar";
            p.linksbox = "";
            p.disable = true;
            p.links = "/suscripcion/"+p.name;
            p.status = "";
            p.css1 = "item-superio gris";
            p.css2 ="item-img";
            p.css3 = "item-text-inactivo";
            p.css4 = "item-inferio";
            p.css5 = "item-name-inactivo";
            p.texto = "AUTORIZACION PENDIENTE";
            break;
        }
        
        this.product.push(p);
      });
      $('body').loading('stop');
      $('.link-1').addClass('menu-active');
      
      
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });

    

    //$('body').loading('stop');

  }
  
}


export class statusObject {
  id:string;
  name:string;
  value:string;
}

export class serviceOrganizacion{
  id:string;
  contrato:string;
  organizacion:string;
  producto:string;
  estatus:string;
  subdominio:string;
  user:Array<UserServiceOrganizacion> =[];
}

export class UserServiceOrganizacion{
  id:string;
  uid:string;
  status:string;
}

export class productos {
  id:string;
  image:string;
  image_gris:string;
  label:string;
  name:string;
  domain:string;
  status:string;
  links:string;
  linksbox:string;
  textlink:string;
  texto:string;
  css1:string;
  css2:string;
  css3:string;
  css4:string;
  css5:string;
  cssstatus:string;
  disable:boolean;
}

export class sectores {
  id:string;
  label:string;
  name:string;
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/