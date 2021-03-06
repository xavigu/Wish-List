import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public wishesService: WishesService, private router: Router, private alertCtrl: AlertController) {
  }

  async addList(){
    // this.router.navigateByUrl('/tabs/tab1/add');
    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            } 
            const listId = this.wishesService.createList(data.title);

            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
          }
        }
      ]
    });

    alert.present();
  }

}
