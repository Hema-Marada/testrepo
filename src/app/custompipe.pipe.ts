import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
nvalue:string="Hema Marada"
  transform(value: unknown, ...args: unknown[]): any {
    this.nvalue = this.nvalue.split('').reverse().join('');
    return this.nvalue;
  }

}
