import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import {Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { FirebaseApp } from '../../../node_modules/angularfire2';

import { WebservicesService } from './webservices.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { forEach, last } from '../../../node_modules/@angular/router/src/utils/collection';
import { isArray } from 'util';
import { isJsObject } from '../../../node_modules/@angular/core/src/change_detection/change_detection_util';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


@Injectable()
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  public uid:string;
  private url:string;
  accion:String="";
  public t:string[];
  public idToken:string;
  public idService:string;
  public product:Array<productos> = [];
  public productDomain:string;
  public sector:Array<sectores> = [];
  public dominioStep4:string;
  public serviceStep4:string;
  public viewStep4:boolean;
  public mensajeStep4:string;
  // public product2:productos[];

  public key_productos;
  // public httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  

  step0:boolean=false;
  step1:boolean=false;
  step2:boolean=false;
  step3:boolean=false;
  step4:boolean=false;



  constructor(
    private route: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public firebase: FirebaseApp,
    private webservice:WebservicesService
  ) { }

  ngOnInit() {
    //  $('.formularios').loading({
    //   overlay: $("#custom-overlay")
    // });
    //capturo pasos del registro
    console.log('1');
    this.accion = this.route.snapshot.paramMap.get('accion');
    
    //si accion es null activo la primera visual
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        auth.getIdToken(true).then(idToken =>{
          this.webservice.putAsociarMiOrganizacion(idToken,{}).subscribe(data=>{
            console.log(data);
            this.idToken = idToken;
            if((data['organization']==null) || (data['organization']=='null') || data==null){
              this.step0 = true;
              this.viewStep4 = false;
              this.habilitarVisuales('step1');
              $('body').loading('stop');
            }else{
              window.location.href = '/suite';
            }
          },(error:HttpErrorResponse)=>{
            console.log(error);
            $('body').loading('stop');
          });
        }).catch(_error => {
          this.step0 = true;
          this.viewStep4 = false;
    console.log('2');

          $('body').loading('stop');
        });
      } else {
        this.step0 = true;
        this.viewStep4 = false;
    console.log('3');

        $('body').loading('stop');
      }
    });
    console.log('4');

    $('.formularios').loading('stop');
    // if(!this.accion){
    //   this.step0 = true;
    //   this.viewStep4 = false;
    //   // $('.formularios').loading('stop');
    //   $('body').loading('stop');
    // }else{
    //   //en caso contrario capturo el tokenid
     
    // }
    
  }

  

onSubmitAddUser() {
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]"); 
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(this.password)) {
            ctr++;
        }
    }
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if((this.password.length >= 7) && (ctr >= 2) && (regex.test($('#email').val().trim()))){
      $('.formularios').loading({
        overlay: $("#custom-overlay")
      });
      this.authService.registerUser(this.email, this.password).then((res) => {
        this.authService.getAuth().subscribe( auth => {
          if (auth) {
            auth.getIdToken(true).then(idToken =>{
              this.idToken = idToken;
              this.webservice.putAsociarMiOrganizacion(idToken,{}).subscribe(data=>{
                if((data['organization']==null) || (data['organization']=='null') || data==null){
                  this.habilitarVisuales('step1');
                }else{
                  window.location.href = '/suite';
                }
              },(error:HttpErrorResponse)=>{
                $('.formularios').loading('stop');
              });
            }).catch(_error => {
            $('.formularios').loading('stop');
          });
        }else{
          $('.formularios').loading('stop');
        }
      });
    }).catch( (_err) => {
      $('.formularios').loading('stop');
      $('#error-correo').css('visibility','visible');
      $('#email').css({'color':'red','border-bottom':'1px solid red'});
      $('#error-correo').text('El correo que ingreso ya existe en el sistema.');
    });
  }else{
    if(regex.test($('#email').val().trim())){

    }else{
      $('#error-correo').css('visibility','visible');
      $('#email').css({'color':'red','border-bottom':'1px solid red'});
      $('#error-correo').text('Debe ingresar un correo valido');
    }
    if((this.password.length >= 7) && (ctr >= 2)){

    }else{
      $('#error-clave').css('visibility','visible');
      $('#password').css({'color':'red','border-bottom':'1px solid red'});
      $('#error-clave').text('La contraseña debe contener al menos 7 caracteres alfanumericos');
    }
  }
}

  onClickGoogleLogin() {
    this.authService.loginGoogle().then((res) => {
      this.authService.getAuth().subscribe( auth => {
        if (auth) {
          auth.getIdToken(true).then(idToken =>{
            this.idToken = idToken;
            this.webservice.putAsociarMiOrganizacion(idToken,{}).subscribe(data=>{
              if((data['organization']==null) || (data['organization']=='null') || data==null){
                this.habilitarVisuales('step1');
              }else{
                window.location.href = '/suite';
              }
            },(error:HttpErrorResponse)=>{
              $('.formularios').loading('stop');
            });
          }).catch(_error => {
            $('.formularios').loading('stop');
          });
        }else{
          $('.formularios').loading('stop');
        }
      });
     }).catch( err => {
      $('.formularios').loading('stop');
     });
   }

   onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
        console.log(res);
      this.authService.getAuth().subscribe( auth => {
        if (auth) {
          auth.getIdToken(true).then(idToken =>{
            console.log(idToken);
            this.webservice.putAsociarMiOrganizacion(idToken,{}).subscribe(data=>{
              console.log(data);
              if((data['organization']==null) || (data['organization']=='null') || data==null){
                window.location.href = '/registro/step1';
              }else{
                window.location.href = '/suite';
              }
            },(error:HttpErrorResponse)=>{
              console.log(error);
              // this.router.navigate(['/registro/step2']);
              // window.location.href = '/registro/step2';
            });
          }).catch(_error => {
            this.idToken = "";
            console.log('error');
            // this.router.navigate(['/registro']);
          });
        } else {
          console.log('error');
          this.idToken = "";
          // this.router.navigate(['/registro']);
        }
      });
      }).catch( err => console.log(err.message));
  }

  

  public habilitarVisuales(accion,idService=""){
    if(accion=='step2'){
      this.webservice.getProductos(this.idToken).subscribe(data=>{
        //console.log(data);
        let keys = Object.keys(data);
        let i = 0;
        keys.forEach(k => {
          
          let c = Array(data[k]);
          let p = new productos();
          p.id = k;
          p.image = c[0]['image'];
          p.label = c[0]['label'];
          p.name = c[0]['name'];
          p.domain = c[0]['domain'];
          p.provisioning = c[0]['provisioning'];
          this.product.push(p);
          console.log(p);
  
        });
        this.step0 = false;
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        $('.formularios').loading('stop');
      },(error:HttpErrorResponse)=>{
        console.log(error);
      });
      // console.log(resp);
    }
    if(accion=='step1'){
      this.step0 = false;
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
      $('.formularios').loading('stop');
    }
    if(accion=='step3'){
      console.log('paso 3');
      console.log(idService);
      this.webservice.getConsultarSectores(this.idToken).subscribe(data=>{
        //console.log(data);
        let keys = Object.keys(data);
        let i = 0;
        keys.forEach(k => {
          
          let c = Array(data[k]);
          let p = new sectores();
          p.id = k;
          p.label = c[0]['label'];
          p.name = c[0]['name'];
          this.sector.push(p);
  
        });
        this.step0 = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = true;
        this.step4 = false;
        $('.formularios').loading('stop');
      },(error:HttpErrorResponse)=>{
        console.log(error);
        $('.formularios').loading('stop');

      });
      
    }
    if(accion=='step4'){
      console.log('paso 4');
      console.log(idService);
      console.log(this.idService);
      this.webservice.getConsultarServicioOrganizacion(this.idToken,idService).subscribe(async data=>{
        console.log(data);
        console.log(data['arrayServices']);
        let keys = Object.keys(data['arrayServices']);
        let subdomainp = "";
        keys.forEach(k => {
          console.log(k);
          // let c = Array(data[k]);
          subdomainp = k;
        });
        console.log(data['arrayServices'][subdomainp]['subdomain']);
        this.dominioStep4 = data['arrayServices'][subdomainp]['subdomain'] + this.productDomain;
        console.log('service producto');
        console.log(this.viewStep4);
        if(!(!!this.viewStep4)){
          this.mensajeStep4 = 'En breve nos contactaremos con vos para mostrarte el servicio.';
        }else{
          this.mensajeStep4 = 'Estamos configurando su sistema de ';
        }
        this.step0 = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = true;
        $('.formularios').loading('stop');
        let code = "400";
        // let comprobarUrl = ()=>{
        //   this.webservice.validarUrlServicios(this.dominioStep4).subscribe(data=>{
        //     code = "200";
        //   },(error)=>{
        //     code = "400";
        //   });
        //   return code;
        // }
        // console.log(await comprobarUrl());
        if((!!this.viewStep4)){
          do {
            // var request;
            // if(window.XMLHttpRequest)
            //     request = new XMLHttpRequest();
            // else
            //     request = new ActiveXObject("Microsoft.XMLHTTP");
            // request.open('GET', 'http://www.mozilla.org', false);
            // request.send(); // there will be a 'pause' here until the response to come.
            // // the object request will be actually modified
            // if (request.status === 200) {
            //     code = "200";
            // }
            this.webservice.validarUrlServicios(this.dominioStep4).subscribe(data=>{
              code = "200";
              
            },(error)=>{
              code = "400";
            });
            console.log(code);
            await this.sleep(1000);
          } while (code != "200");
        }
        
        // waits(1000);
        // setTimeout(function() {
        //   this.webservice.validarUrlServicios(this.dominioStep4).subscribe(data=>{
        //   code = "200";
        //   console.log(code);
        // },(error)=>{
        //   code = "400";
        //   console.log(code);
        // });
        // },2000);
      },(error:HttpErrorResponse)=>{
        console.log(error);
        console.log(error['error']['text']);
        $('.formularios').loading('stop');

      });
      

    }
    console.log('Habilitar Visuales');
  }

  public sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  public ActualizarValor(dat){
    $('#plan-select-text').text(dat);
  }

  public GuardarMisServicios(idServicios,labelservicio,domain,provisioning){
    $('.formularios').loading({
      overlay: $("#custom-overlay")
    });
    let productID = idServicios;
    let productLabel = labelservicio;
    this.productDomain = domain;
    this.serviceStep4 = labelservicio;
    console.log('provisioning: ' + provisioning);
    this.viewStep4 = provisioning;
    
    
    console.log('service:' + this.viewStep4);
    let body = {'productID':productID, 'productLabel':productLabel};
    console.log(body);
    console.log(this.idToken);
    this.webservice.postMisProductos(this.idToken,body).subscribe(data=>{
      console.log(data);
      console.log(data['serviceId']);
      this.idService = data['serviceId'];
      this.webservice.idService = data['serviceId'];
      // this.router.navigate(['/registro/step2']);
      this.habilitarVisuales('step3',data['serviceId']);
      //window.location.href = '/registro/step3';
    },(error:HttpErrorResponse)=>{
      console.log(error);
      $('.formularios').loading('stop');

    });
  }

  public GuardarMiOrgnaizacion(){
    
    let name = $('#nameORG').val();
    let employeesquantity =  $('#plan-select-text').text();
    let body = {"name":name,
    "employees-quantity": employeesquantity}
    console.log('llego aca');
    console.log(body);
    console.log(this.idToken);
    if(name ==""){
      $('#error-empresa').css('visibility','visible');
      $('#nameORG').css({'color':'red','border-bottom':'1px solid red'});
      $('#error-empresa').text('Debe Ingresar el nombre de su empresa');
      $('.formularios').loading('stop');
    }else{
      $('.formularios').loading({
        overlay: $("#custom-overlay")
      });
      this.webservice.postMiOrganizacion(this.idToken,body).subscribe(data=>{
        console.log(data);
        // this.router.navigate(['/registro/step2']);
        // window.location.href = '/registro/step2';
        this.habilitarVisuales('step2');
      },(error:HttpErrorResponse)=>{
        console.log(error);
        $('.formularios').loading('stop');
      });
    }
  }

  public GuardarMiContacto(){
    
    let name = $('#name').val();
    let lastname = $('#lastname').val();
    let phone = $('#phone').val();
    let department =  $('#plan-select-text').text();
    let job = $('#job').val();
    let body = {"name": name,
    "lastname": lastname,
    "phone": phone, 
    "department": department,
    "job":job}
    if((name=="") ||  (lastname=="") || (phone=="") || (department=="") || (job=="")){
      if(name==""){
        $('#error-name').css('visibility','visible');
        $('#error-name').text('Este campo es requerido.');
      }
      if(lastname==""){
        $('#error-lastname').css('visibility','visible');
        $('#error-lastname').text('Este campo es requerido.');
      }
      if(phone==""){
        $('#error-phone').css('visibility','visible');
        $('#error-phone').text('Este campo es requerido.');
      }
      if(department==""){
        $('#error-dept').css('visibility','visible');
        $('#error-dept').text('Este campo es requerido.');
      }
      if(job==""){
        $('#error-trabajo').css('visibility','visible');
        $('#error-trabajo').text('Este campo es requerido.');
      }
      
    }else{
      $('.formularios').loading({
        overlay: $("#custom-overlay")
      });
      this.webservice.postMiContacto(this.idToken,body).subscribe(data=>{
        console.log(data);
        console.log(this.idService);
        // this.router.navigate(['/registro/step2']);
        this.habilitarVisuales('step4',this.idService);
        //window.location.href = '/registro/step4';
      },(error:HttpErrorResponse)=>{
        console.log(error);
        $('.formularios').loading('stop');
      });
    }
  }
  
}

export class productos {
  id:string;
  image:string;
  label:string;
  name:string;
  domain:string;
  provisioning:string;
}

export class sectores {
  id:string;
  label:string;
  name:string;
}
