import { ItemPresenter } from "./components/ToDoPresenter";
import { Page } from "./components/Page";
import { ToDoModel } from "./components/ToDoModel";
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import "./styles/styles.css";

import { todos } from "./utils/constants";

const contentElement = document.querySelector(".content") as HTMLElement;

const page = new Page(contentElement);

const todoArray = new ToDoModel(); // todoArray - это список наших дел на странице
todoArray.items = todos; // это у нас сработал сеттер. К свойству _items получаем доступ только с помощю геттера и сеттера

const todoPresenter = new ItemPresenter(todoArray, page, Form, Item);

todoPresenter.init();
todoPresenter.render();
