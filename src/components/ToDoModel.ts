import { IItem, IToDoModel } from "./../types/index";

export class ToDoModel implements IToDoModel {
  protected _items: IItem[]; // если доступ к свойству реализуем через геттер и сеттер то не нужен был бы _items а просто items

  constructor() {
    this._items = [];
  }

  set items(data: IItem[]) {
    this._items = data;
  }

  get items() {
    return this._items;
  }

  addItem(data: string): IItem {
    const uniqueId: number =
      Math.max(...this._items.map((item) => Number(item.id))) + 1;

    const newItem: IItem = { id: String(uniqueId), name: data };
    this._items.push(newItem);
    return newItem;
  }

  removeItem(id: string) {
    this._items = this._items.filter((item) => item.id !== id);
  }
}
