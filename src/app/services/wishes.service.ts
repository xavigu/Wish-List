import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() { 
    this.loadStorage();
  }

  createList(title: string) {
    const newList = new List(title);
    this.lists.push(newList);
    this.saveStorage();

    return newList.id;
  }

  getList(id: string | number): List{
    const idList = +id;

    return this.lists.find(listData =>  listData.id === idList);
  }

  saveStorage(){
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }

  loadStorage(){
    if (localStorage.getItem('lists')) {
      this.lists = JSON.parse(localStorage.getItem('lists'))
    } else {
      this.lists = [];
    }
  }


}
