import { Component } from '@angular/core';

// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private sesion:boolean;
  constructor(
  
    // private angularAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    $('body').loading({
      overlay: $("#custom-overlay")
    });
  }

  

 
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/