import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numkeys'
})
export class NumkeysComponent implements PipeTransform {
  transform(object: any): any {
    return Object.keys(object).length;
  }
}
