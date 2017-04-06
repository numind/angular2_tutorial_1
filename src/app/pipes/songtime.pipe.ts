// songtime.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'songtime'})
export class SongTime implements PipeTransform {
  transform(value: number, args: string[]): any {

    if (!value) return value;

    var pad = (n, z = 2) => ('00' + n).slice(-z);
    return ((value/3.6e6|0) !== 0 ? (pad(value/3.6e6|0) + ':') : '') + pad((value%3.6e6)/6e4 | 0) + ':' + pad((value%6e4)/1000|0); 
    
    // + '.' + pad(value%1000, 3);
      

  }
}