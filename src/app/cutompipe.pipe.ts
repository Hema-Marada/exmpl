import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutompipe'
})
export class CutompipePipe implements PipeTransform {
value:string="Hello Hema"
  transform(value: unknown, ...args: unknown[]): any {
    this.value=this.value.split('').reverse().join()
    return this.value;
  }

}
