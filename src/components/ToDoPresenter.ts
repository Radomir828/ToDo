import { IViewItemConstructor } from "./Item";
import { IPage } from "./Page";
import { IToDoModel } from "./../types/index";
import { IForm, IFormConstructor } from "./Form";

export class ItemPresenter {
  protected formTemplate: HTMLTemplateElement;
  protected itemTemplate: HTMLTemplateElement;
  protected todoForm: IForm;
  constructor(
    protected model: IToDoModel,
    protected page: IPage,
    protected formConstructor: IFormConstructor,
    protected itemConstructor: IViewItemConstructor
  ) {
    this.formTemplate = document.querySelector(
      "#todo-form-template"
    ) as HTMLTemplateElement;

    this.itemTemplate = document.querySelector(
      "#todo-item-template"
    ) as HTMLTemplateElement;
  }

  init() {
    this.todoForm = new this.formConstructor(this.formTemplate);
    this.todoForm.setHandler(this.handleSubmitForm.bind(this));
    this.page.formContainer = this.todoForm.render();
  }

  handleSubmitForm(data: string) {
    this.model.addItem(data);
    this.render();
    this.todoForm.clearValue();
  }

  render() {
    const itemList = this.model.items
      .map((item) => {
        const todoItem = new this.itemConstructor(this.itemTemplate);
        const itemElement = todoItem.render(item);
        return itemElement;
      })
      .reverse();

    this.page.todoContainer = itemList;
  }
}
