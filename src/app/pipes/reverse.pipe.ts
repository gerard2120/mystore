import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string ): string {
    // separas la cadena en un array, hacer el reverse y vuelves a unis la cadena
    return value.split('').reverse().join('');
  }

}
