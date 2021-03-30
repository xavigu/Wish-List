import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() { 
    const list1 = new List('Recolect stones');
    const list2 = new List('Disappear heros');

    this.lists.push(list1, list2);
  }

  createList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
  }


}
