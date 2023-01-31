import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  selectedValue: string | undefined;
  loginUser(item:any)
  {
    console.warn(item)
  }
  constructor(private router:Router)
  {

  }
  onSubmit()
  {
this.router.navigateByUrl('template/reactive',)
  }
  fname: any;
lname: any;
canExit()
{
if(this.fname|| this.lname)
{
return confirm("You have unsaved changes. Do you want to discard these changes")
}
else{
return true
}
}
}
