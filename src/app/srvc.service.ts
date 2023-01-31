import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvcService {

  constructor() { }
  isUserLoggedIn()
  {
    return false
  }
  isChild()
  {
    return false
  }
}
