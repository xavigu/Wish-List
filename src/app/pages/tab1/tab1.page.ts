import { Component } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private lists: List[] = [];

  constructor(public wishesService: WishesService) {
    this.lists = wishesService.lists;
  }

}
