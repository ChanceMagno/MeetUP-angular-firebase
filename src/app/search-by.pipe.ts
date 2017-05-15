import { Pipe, PipeTransform } from '@angular/core';
import { Meet } from './meet.model';

@Pipe({
  name: 'searchBy',
  pure: false
})
export class SearchByPipe implements PipeTransform {

  transform(input: Meet [], variable){

    var meetSet = new Set();
      for (var i=0; i<input.length; i++){
        meetSet.add(input[i][variable]);
      }
      return meetSet;
  }

}
