import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() msg:string=''
  message:string="this message is displayed in child ts"
  @Output() messageEvent=new EventEmitter<string>()

  sendMessage()
  {
    this.messageEvent.emit(this.message)
  }
  
}
