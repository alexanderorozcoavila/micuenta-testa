import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Planes } from './planes';
import { PlANES } from './mock-planes';

@Injectable({ providedIn: 'root' })
export class Planesservice {

  getPlanes(): Observable<Planes[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(PlANES);
  }

  getPlan(id: number): Observable<Planes> {
    // TODO: send the message _after_ fetching the hero
    return of(PlANES.find(planes => planes.id === id));

  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
