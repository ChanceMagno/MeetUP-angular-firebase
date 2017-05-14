import { Pipe, PipeTransform } from '@angular/core';
import { Meet } from './meet.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Meet[], filter, value)  {
    var valueHolder: string = value;
    if (filter === 'All'){
      return input;
    } else {
      var output: Meet []=[];
      for (var i=0; i<input.length; i++) {
        if (input[i][filter] === valueHolder){
          output.push(input[i]);
        }
      }
    }
    return output;
  }



}
