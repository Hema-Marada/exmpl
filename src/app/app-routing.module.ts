import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { BindingsComponent } from './bindings/bindings.component';
import { AuthguardsGuard } from './authguards.guard';
import { ChildGuard } from './child.guard';

const routes: Routes = [{
  path:'template',component:TemplateComponent,
  canActivateChild:[ChildGuard],
  children:[{ path:'reactive',component:ReactiveComponent}]
},
{
  path:'binding',component:BindingsComponent,
  canActivate:[AuthguardsGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
