import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { FirebaseApp } from '../../../node_modules/angularfire2';

// import { WebservicesService } from './webservices.service';
import { WebservicesService } from '../register/webservices.service';

import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { forEach, last } from '../../../node_modules/@angular/router/src/utils/collection';
import { isArray } from 'util';
import { isJsObject } from '../../../node_modules/@angular/core/src/change_detection/change_detection_util';

declare var jQuery:any;
declare var $:any;
import { PlANES } from '../mock-planes';
import { Planes } from '../planes';
import { Planesservice } from '../planes.service';


declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  planes:Planes;
  public idToken:string;
  planlist:Array<Planes> = [];

  precioplan:number=0;
  preciouser:number=0;
  preciototal:number=0;
  totalUser:number=0;
  numUser:number=0;
  valor:number=0;
  planPago:number=0;

  // valores
  UserSelectId:string="";
  PlanSelectId:string="";
  cycleSelectId:string="";

  constructor(
    private planesservice:Planesservice,
    private route: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public firebase: FirebaseApp,
    private webservice:WebservicesService
  ) { }

  ngOnInit() {

    let accion = this.route.snapshot.paramMap.get('accion');
    // $('.formularios').loading('toggle');
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        auth.getIdToken(true).then(idToken =>{
          this.idToken = idToken;
          // console.log(this.idToken);
          this.webservice.getPlanesProductos(idToken,accion,'plan').subscribe(data=>{
            // console.log(data);
            let keys = Array(data);
            keys.forEach(k => {
              // console.log(k['id']);
              // let c = Array(data[k]);
              let p = new Planes();
              p.id = Number(k['id']);
              p.plan = k['label'];
              p.price = Number(k['price_ttc']);
              console.log(p);
              this.planlist.push(p);
            });
            $('body').loading('stop');
            $('.link-2').addClass('menu-active');
            this.webservice.getPlanesProductos(idToken,accion,'user').subscribe(data=>{
              console.log();
              $("#preci-user").text('$'+data['price_ttc'] + " por usuario/mes");
              this.preciouser = data['price_ttc'];
              this.UserSelectId = data['id'];
            });
          });
          
        }).catch(_error => {
          
          console.log('error 1');
          
        });
      } else {
        console.log('error 2');
        
      }
    });
    
  }

  private listaPlanes(idtoken,producto){
    //this.planesservice.getPlanes().subscribe(planlist=>this.planlist=planlist);
    
    console.log(this.planlist);
  }


  public  habilitarBotonCaja() {
    if ($('#btn-acuerdos').is(':checked')) {
      $("#caja-btn").css("background", "#b10053");
      $("#pasar-por-caja").css("color", "#FFFFFF");
    }else{
      $("#caja-btn").css("background", "rgba(177, 0, 83,0.12)");
      $("#pasar-por-caja").css("color", "rgba(0, 0, 0, 0.38);"); 
    }
  }

  public ActualizarPlan(plan){
    console.log(plan.price);
    console.log(plan.plan);

    let plans = plan.plan;
    let price = plan.price.toString();

    console.log(plans);
    console.log(price);

    this.PlanSelectId = plan.id;
    $("#plan-select-text").text(plans);
    $("#plan-select-price").text('$'+price);

    $("#plan-select-text-invoice").text(plans);
    $("#plan-select-price-invoice").text('$'+price);
    this.precioplan = plan.price;
    if(this.planPago == 0){
      this.preciototal = this.precioplan + this.totalUser;
    }else{
      this.preciototal = this.precioplan + this.totalUser;
      this.preciototal = this.preciototal - ((this.preciototal * this.planPago)/100);
    }
    $("#price-invoice").text('$'+this.preciototal);

  }

  public updateNumberUser(){
    let numUser = $("#num-user").val();
    this.numUser = numUser;
    $('#number-user-text-invoice').text(numUser);
    this.totalUser = numUser * this.preciouser;
    $('#number-user-price-invoice').text('$'+this.totalUser);
    
    if(this.planPago == 0){
      this.preciototal = this.precioplan + this.totalUser;
    }else{
      this.preciototal = this.precioplan + this.totalUser;
      this.preciototal = this.preciototal - ((this.preciototal * this.planPago)/100);
    }
    $("#price-invoice").text('$'+this.preciototal);
    // console.log(this.valor);
  }


  public ActualizarMes(mes,valor){
    $("#mes-select-text").text(mes);
    this.cycleSelectId = valor;
    if(valor == 'yearly'){
      console.log('anual');
      this.planPago = 10;
      
    }else{
      console.log('mensual');
      this.planPago = 0;
    }
    console.log(this.planPago);
    if(this.planPago == 0){
      this.preciototal = this.precioplan + this.totalUser;
    }else{
      this.preciototal = this.precioplan + this.totalUser;
      this.preciototal = this.preciototal - ((this.preciototal * this.planPago)/100);
    }
    $("#price-invoice").text('$'+this.preciototal);
  }

  public pasarPorCaja(){
    let body={
      "reason_mercadopago":"asd",
      "back_url":"http://localhost:4200/",
      "cycle":this.cycleSelectId,
      "plan":this.PlanSelectId,
      "user":{
        "quantity":this.numUser,
        "id":this.UserSelectId
      }
    };
    this.webservice.putSolicitarLinkMercadoPago(this.idToken,body).subscribe(data=>{
      console.log(data);
    });
  }

    btn_gestion = "Gestión";
    btn_online = "Tienda online";
    btn_ventas = "Ventas";
    btn_mark = "Marketing";
    btn_soport = "Soporte";


}
