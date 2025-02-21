import { Page } from "./components/Page";
import { ToDoModel } from "./components/ToDoModel";
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import "./styles/styles.css";

import { todos } from "./utils/constants";

const contentElement = document.querySelector(".content") as HTMLElement;

const formTemplate = document.querySelector(
  "#todo-form-template"
) as HTMLTemplateElement;

const itemTemplate = document.querySelector(
  "#todo-item-template"
) as HTMLTemplateElement;

const page = new Page(contentElement);
const todoArray = new ToDoModel(); // todoArray - это список наших дел на странице
todoArray.items = todos; // это у нас сработал сеттер. К свойству _items получаем доступ только с помощю геттера и сеттера

const todoForm = new Form(formTemplate);
todoForm.setHandler(handleSubmitForm);

page.formContainer = todoForm.render();

function handleSubmitForm(data: string) {
  todoArray.addItem(data);
  todoForm.clearValue();
  renderTodoItems();
  // todoForm.clearValue();
}

function renderTodoItems() {
  page.todoContainer = todoArray.items
    .map((item) => {
      const todoItem = new Item(itemTemplate);
      const itemElement = todoItem.render(item);
      return itemElement;
    })
    .reverse();
}

renderTodoItems();
