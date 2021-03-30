import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItem: string = '';

  constructor(private wishesService: WishesService, private router: ActivatedRoute) {
    const listId = this.router.snapshot.paramMap.get('listId');
    this.list = this.wishesService.getList(listId);
    console.log(this.list);
  }

  ngOnInit() {}

  addItem(){
    if (this.nameItem.length === 0) {
      return
    }

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);

    this.nameItem = '';
    this.wishesService.saveStorage();
  }

}
