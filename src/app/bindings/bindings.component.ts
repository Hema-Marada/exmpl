import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
interpolation:string='this is string interpolation'
submit()
{
  console.log("This is event binding")
  
}

buttonDisabled=false
value=''
}
