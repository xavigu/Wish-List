import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent
  ]
})
export class ComponentsModule { }
