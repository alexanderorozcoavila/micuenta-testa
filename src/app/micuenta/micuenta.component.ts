import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Datatest }         from '../datatest';
import { Datatestservice }  from '../datatest.service';
import { WebservicesService } from '../register/webservices.service';
import { AuthService } from '../servicios/auth.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: [ './micuenta.component.css' ]
})
export class MicuentaComponent {
  datatest: Datatest;
  closeResult: string;
  public idToken:string;
  public idService:string;
  public product:Array<productos> = [];
  public status:Array<statusObject> = [];
  public servicios:Array<serviceOrganizacion> = [];
  public name:string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private datatestService: Datatestservice,
    public authService: AuthService,
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
              this.consultarServicios(this.idToken);
            }
          },(error:HttpErrorResponse)=>{
            console.log(error);
            // $('body').loading('stop');
          });
          
        }).catch(_error => {
          
          console.log('error 1');
          
        });
      } else {
        console.log('error 2');
        
      }
    });
    this.getDatatest();
    this.ejecutarCombox();
    
    $('.link-2').addClass('menu-active');
  }

  getDatatest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.datatestService.getDatatest(id)
      .subscribe(datatest => this.datatest = datatest);
      // $('body').loading('stop');
  }

  goBack(): void {
    this.location.back();
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
      // $('body').loading('stop');
    });
  }

  public ejecutarCombox(){
  }

  public consultarProductos(idtoken){
    console.log("====================== 02 ===============================");
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
        
        this.servicios.forEach(servicio => {
          if(servicio.producto == k){
            p.id = k;
            p.image = c[0]['image'];
            p.label = c[0]['label'];
            p.name = c[0]['name'];
            p.domain = c[0]['domain'];
            console.log(p);
            this.product.push(p);

          }
        });
        
        
      });
      this.webservice.getMiContacto(idtoken).subscribe(data=>{
        console.log(data['']);
        this.name = data['lastname'];
        $('body').loading('stop');
      $('.link-2').addClass('menu-active');
      });
      
      
      
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