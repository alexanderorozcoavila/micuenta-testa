import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { resolve } from 'url';
import { reject } from 'q';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  url:string;

  constructor(
    public afAuth: AngularFireAuth
    // private http: HttpClient
  ) { }

  loginTwitter () {
    return this.afAuth.auth.signInWithRedirect( new firebase.auth.TwitterAuthProvider());
  }

  loginPhone () {
    return this.afAuth.auth.signInWithRedirect( new firebase.auth.PhoneAuthProvider());
  }


  loginFacebook() {
    return this.afAuth.auth.signInWithRedirect( new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    return this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
  }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getIdTokenAut(){
    this.getAuth().subscribe(auth => {
      if (auth) {
        auth.getIdToken(true).then(function(idToken){
          console.log('Funcion token');
          console.log(idToken)
          return idToken;
        }).catch(function(error){
          console.log('error');
          return false;
        });
      }else{
        console.log('error2');
        return false;
      }
    });
  }

  

}
