import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: number, ...args: any): any {
    let txt :string=''
    switch(value){
      case 1: txt='one'; break;
      case 2:txt='two'; break;
      case 3:txt='three';break;
      case 4:txt='four'; break;
      case 5:txt='five';break;
      case 6:txt='six'; break;
      case 7 :txt='saven'; break;
      case 8:txt='eight';break;
      case 9:txt='nine'; break;
      case 0:txt='zero'; break;
       default:txt='None' 
       }

    return txt;
  }

}
