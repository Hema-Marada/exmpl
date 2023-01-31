import { Component } from '@angular/core';
import  {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

loginForm=new FormGroup({
  fname:new FormControl(''),
  lname:new FormControl(''),
  gender:new FormControl('')
})
loginUser()
{
console.warn(this.loginForm.value)
}
get fname()
{
  return this.loginForm.get('fname') 
}
get lname()
{
  return this.loginForm.get('lname')
  
}
get gender()
{
  return this.loginForm.get('gender')
}
}
