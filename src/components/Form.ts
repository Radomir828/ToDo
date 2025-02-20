export class Form {
  protected formElement: HTMLFormElement;
  protected inputField: HTMLInputElement;

  constructor(form: HTMLFormElement, protected handleSubmitForm: Function) {
    this.formElement = form;
    this.inputField = this.formElement.querySelector(".todo-form__input");

    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      handleSubmitForm(this.inputField.value);
    });
  }

  render() {
    return this.formElement;
  }

  setValue(data: string) {
    this.inputField.value = data;
  }

  getValue() {
    return this.inputField.value;
  }

  clearValue() {
    this.formElement.reset();
  }
}
