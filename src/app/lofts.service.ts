import { Injectable } from '@angular/core';
import { Loft } from '../shared/loft';
import { data } from '../shared/data';

@Injectable({
  providedIn: 'root'
})
export class LoftsService {

  constructor() { }

  async getLofts() {
    const objects: Loft[] = data;
    return objects;
  }

  async getLoftIDs() {
    const ids: number[] = [];
    await data.map(e => {
      ids.push(e.index);
    }
    );
    return ids;

  }

  async getLoftById(index) {
    let loft ;
    await data.filter( e => {
      const num = parseInt(e.index , 10 );
      index = parseInt(index, 10);
      if (num === index) {
        loft = e;
      }

    });

    return loft;

  }
}
