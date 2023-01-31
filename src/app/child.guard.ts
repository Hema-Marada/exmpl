import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SrvcService } from './srvc.service';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {
  constructor(private srvc:SrvcService){}
  canActivateChild(){
    if(this.srvc.isChild())
    {
      return true;
    }
    else{
      window.alert("Permission denied for this child component")
      return false
    }
    
  }
  
}
