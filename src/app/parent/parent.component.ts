import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  value :string=''
message:string="This message is displayed in the parent ts"

receiveMessage($event:string)
{
this.message=$event
}
}
