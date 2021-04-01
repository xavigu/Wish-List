import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = false;
  @ViewChild('list') ionList: IonList;

  constructor(private router: Router, public wishesService: WishesService, private alertCtrl: AlertController) { }

  ngOnInit() {}

  selectList(list: List) {
    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);      
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  async editList(list: List) {
    const alert = await this.alertCtrl.create({
      header: 'Edit List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'List Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
            this.ionList.closeSlidingItems();
          }
        }, {
          text: 'Update',
          handler: (data) => {
            list.title = data.title;
            this.wishesService.saveStorage();
            this.ionList.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

  deleteList(list: List) {
    this.wishesService.deleteList(list);
  }


}
