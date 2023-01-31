import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { CutompipePipe } from './cutompipe.pipe';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    BindingsComponent,
    ChildComponent,
    ParentComponent,
    PipesComponent,
    CutompipePipe,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
