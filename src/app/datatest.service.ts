import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Datatest } from './datatest';
import { DATATEST } from './moc-datatest';

@Injectable({ providedIn: 'root' })
export class Datatestservice {

  getDatatests(): Observable<Datatest[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(DATATEST);
  }

  getDatatest(id: number): Observable<Datatest> {
    // TODO: send the message _after_ fetching the hero
    return of(DATATEST.find(datatest => datatest.id === id));
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/