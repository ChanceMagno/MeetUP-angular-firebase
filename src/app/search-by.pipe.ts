import { Pipe, PipeTransform } from '@angular/core';
import { Meet } from './meet.model';

@Pipe({
  name: 'searchBy',
  pure: false
})
export class SearchByPipe implements PipeTransform {

  transform(meets: any, term: any): any {
    var title: string;
    var output: any;
    if (term === undefined){
      return meets;
    } else {
      return meets.filter(function(meets){
        output = meets.title.toLowerCase().includes(term.toLowerCase());
        return output;
      })
    }
  }

}
