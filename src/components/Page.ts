export interface IPage {
  formContainer: HTMLElement;
  todoContainer: HTMLElement[];
}

export class Page implements IPage {
  protected _formContainer: HTMLElement;
  protected _todoContainer: HTMLElement;

  // в конструктор передаем общий контейнер блока main: <main class="content">
  constructor(protected container: HTMLElement) {
    const formContainer = this.container.querySelector(".todo-form-container");
    const todoContainer = this.container.querySelector(".todos__list");

    if (!formContainer || !todoContainer) {
      throw new Error("Не удалось найти необходимые элементы в контейнере.");
    }

    this._formContainer = formContainer as HTMLElement;
    this._todoContainer = todoContainer as HTMLElement;
  }

  // constructor(protected container: HTMLElement) {
  //   this._formContainer = this.container.querySelector(".todo-form-container");
  //   this._todoContainer = this.container.querySelector(".todos__list");
  // }
  set formContainer(formElement: HTMLFormElement | null) {
    if (formElement) {
      this._formContainer.replaceChildren(formElement);
    } else {
      this._formContainer.innerHTML = "";
    }
  }

  set todoContainer(items: HTMLElement[]) {
    this._todoContainer.replaceChildren(...items);
  }
}
