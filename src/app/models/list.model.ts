import { ListItem } from "./list-item.model";

export class List {
  id: number;
  title: string;
  createdIn: Date;
  finishedIn: Date;
  finished: boolean;
  items: ListItem[];

  constructor(title: string){
    this.title = title;
    this.createdIn = new Date();
    this.finished = false;
    this.items = [];

    // id generado con el numero de milisegundos de la fecha
    this.id = new Date().getTime();
  }
}