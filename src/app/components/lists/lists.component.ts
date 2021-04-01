import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = false;

  constructor(private router: Router, public wishesService: WishesService) { }

  ngOnInit() {}

  selectList(list: List) {
    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);      
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  deleteList(list: List) {
    this.wishesService.deleteList(list);
  }


}
