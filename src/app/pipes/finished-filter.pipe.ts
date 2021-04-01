import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

// use pure:false to detect changes although you are not in the same component
@Pipe({
  name: 'finishedFilter',
  pure: false
})
export class FinishedFilterPipe implements PipeTransform {

  transform(lists: List[], completed: boolean = false): List[] {
    
    return lists.filter( list => list.finished === completed);
  }

}
