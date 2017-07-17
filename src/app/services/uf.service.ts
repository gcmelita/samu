import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }
<<<<<<< HEAD
  getPorID(id:number): UF{
=======
  buscarUF(id:number): UF{
>>>>>>> 0aba92ba34c20876f481dcdc5e5dc135b1138129
    let uf: UF;
      for (let entry of UFs){
        if (entry.id == id){
          return entry;
        }
      }
  }
}
