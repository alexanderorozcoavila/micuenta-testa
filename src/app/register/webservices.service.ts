import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from '@angular/core/testing';

 

@Injectable({
  providedIn: 'root'
})

export class WebservicesService {
  // public url:string = '';
  public url:string = 'https://esb.testa.digital';
  public ext:string;
  public idService:string;
  
  constructor(
    private http:HttpClient
  ) { }

  putAsociarMiOrganizacion(idToken,body){
      this.ext = '/esb-1.0.0/linkMyOrganization';
      // let cabecera = new URLSearchParams();
      //console.log(idToken);
      let httpOptions = {
        headers: new HttpHeaders({
          'idToken': idToken          
          // "Postman-Token": "4c8b28c2-6576-469d-99ff-b62e44766a28"
        }),
        withCredentials: false,
        async:false
      };
      let organizacion = this.http.put(this.url+this.ext,body,httpOptions);
      console.log(this.url+this.ext+' - 16 - Asociar Mi Organización')
      return organizacion;
        
    }

  getProductos(idToken){
    this.ext = '/esb-1.0.0/products';
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken
      }),
      withCredentials: false,
      async:false
    };
    let productos = this.http.get(this.url+this.ext,httpOptions);
    return productos;  
  }

  postMiOrganizacion(idToken,body){
    this.ext = '/esb-1.0.0/myOrganization';
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken
      }),
      withCredentials: false,
      async:false
    };
    let organizacion = this.http.post(this.url+this.ext,body,httpOptions);
    return organizacion;
      
  }

  postMisProductos(idToken,body){
    this.ext = '/esb-1.0.0/services';
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken
      }),
      withCredentials: false,
      async:false
    };
    let servicios = this.http.post(this.url+this.ext,body,httpOptions);
    return servicios; 
  }

  getConsultarSectores(idToken){
    this.ext = '/esb-1.0.0/sectors';
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken
      }),
      withCredentials: false,
      async:false
    };
    let sectores = this.http.get(this.url+this.ext,httpOptions);
    return sectores;  
  }

  postMiContacto(idToken,body){
    this.ext = '/esb-1.0.0/myContact';
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken
      }),
      withCredentials: false,
      async:false
    };
    let contacto = this.http.post(this.url+this.ext,body,httpOptions);
    return contacto; 
  }

  //29 - Consultar Servicios de Mi Organización Por ID
  getConsultarServicioOrganizacion(idToken,idService){
    this.ext = '/esb-1.0.0/myServices/' + idService;
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let servicios = this.http.get(this.url+this.ext,httpOptions);
    return servicios;  
  }

  getStatusServicioOrganizacion(idToken){
    this.ext = '/esb-1.0.0/myServices';
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let servicios = this.http.get(this.url+this.ext,httpOptions);
    return servicios;  
  }

  postValidarToke(body){
    this.ext = '/esb-1.0.0/verifyIdTokenAsync/';
    // let cabecera = new URLSearchParams();
    //console.log(idToken);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let usuario = this.http.post(this.url+this.ext,body,httpOptions);
    return usuario; 
  }

  getEsOwner(idToken){
    this.ext = '/esb-1.0.0/isOwner';
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let owner = this.http.get(this.url+this.ext,httpOptions);
    return owner;  
  }

  getEstatusSistema(idToken){
    this.ext = '/esb-1.0.0/serviceStatuses';
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let estatus = this.http.get(this.url+this.ext,httpOptions);
    return estatus;  
  }

  getPlanesProductos(idToken,producto,type){
    let url = "https://esb.testa.digital/esb-1.0.0/plans/?plan_product="+ producto +"&plan_type="+type;
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let planes = this.http.get(url,httpOptions);
    return planes; 

  }

  getMiContacto(idToken){
    this.ext = '/esb-1.0.0/myContact';
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let contacto = this.http.get(this.url+this.ext,httpOptions);
    return contacto;  
  }

  getFacturas(idToken,idProducto='-LMG0Vjg0CVFd6WIh4O8'){
    this.ext = '/esb-1.0.0/services/'+ idProducto +'/invoices';
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json'
      }),
      withCredentials: false,
      async:false
    };
    let factura = this.http.get(this.url+this.ext,httpOptions);
    return factura;  
  }

  putSolicitarLinkMercadoPago(idToken,body){
    this.ext = '/esb-1.0.0/services/LLb4fYhYJW5hfrMHvBA/link';
    let httpOptions = {
      headers: new HttpHeaders({
        'idToken': idToken,
        'Content-Type':'application/json',
        'Authorization':'Basic dXN1YXJpbzpwYXNzd29yZA=='
      }),
      withCredentials: false,
      async:false
    };
    let link = this.http.put(this.url+this.ext,body,httpOptions);
    return link; 
  }

  findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
  }

  validarUrlServicios(url){
    let urlservice = this.http.get("http://"+url);
    return urlservice;  
  }
  
}
