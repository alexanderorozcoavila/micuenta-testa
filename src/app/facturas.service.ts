import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Facturas } from './facturas';
import { FACTURAS } from './mock-facturas';

@Injectable({ providedIn: 'root' })
export class Facturasservice {

  getFacturas(): Observable<Facturas[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(FACTURAS);
  }

  getFactura(id: number): Observable<Facturas> {
    // TODO: send the message _after_ fetching the hero
    return of(FACTURAS.find(facturas => facturas.id === id));

  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
