import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateComponent } from './template/template.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<TemplateComponent> {
  canDeactivate(
    component: TemplateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit();
  }
  
}
