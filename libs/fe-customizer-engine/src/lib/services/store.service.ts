import { Injectable } from '@angular/core';
import { FECConfigLoad } from '../models';
// ngrx store feels a bit overkill for the scope of this project, so a service-based store should be sufficient.
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private configStore: { [key: string]: FECConfigLoad } = {};
  constructor() {}

  getConfig(key:string){
    return this.configStore[key];
  }

  setConfig(key:string, value: FECConfigLoad){
    this.configStore[key] = value;
  }
}
