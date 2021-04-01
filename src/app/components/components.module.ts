import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent
  ]
})
export class ComponentsModule { }
