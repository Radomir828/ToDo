import { ToDoModel } from "./components/ToDoModel";
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import "./styles/styles.css";

import { todos } from "./utils/constants";

const contentElement = document.querySelector(".todos__list");
const template = document.querySelector(
  "#todo-item-template"
) as HTMLTemplateElement;

const formElement = document.querySelector(".todos__form") as HTMLFormElement;

const todoForm = new Form(formElement, handleSubmitForm);

function handleSubmitForm(data: string) {
  const todoItem = new Item(template);
  const itemElement = todoItem.render({ id: "8", name: data });
  contentElement.prepend(itemElement);
  todoForm.clearValue();
}

todos.forEach((item) => {
  const todoItem = new Item(template);
  const itemElement = todoItem.render(item);
  contentElement.prepend(itemElement);
});

const todoArray = new ToDoModel(); // todoArray - это список наших дел на странице
todoArray.items = todos; // это у нас сработал сеттер. К свойству _items получаем доступ только с помощю геттера и сеттера
console.log(todoArray.items.map((item) => item)); //  это у нас сработал геттер
todoArray.addItem("Прогулять собаку");
console.log(todoArray.items);

todoArray.removeItem("3");
console.log(todoArray.items);
