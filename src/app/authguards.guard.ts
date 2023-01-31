import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SrvcService } from './srvc.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardsGuard implements CanActivate {
  constructor(private srvc:SrvcService){}
  canActivate(){
    if(this.srvc.isUserLoggedIn()){
      return true;
    }
    else{
window.alert("Permission denied")
return false
    }
       
  }
  
}
