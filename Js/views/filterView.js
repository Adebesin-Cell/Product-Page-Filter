import View from "./View";

class FilterView extends View {
  _container = document.querySelector(".product__list");
  _FormInput = document.querySelector(".form__input");

  addFilterHandler(handler) {
    this._FormInput.addEventListener("keyup", function (e) {
      e.preventDefault();
      const data = e.currentTarget.value;
      handler(data);
    });
  }
}

export default new FilterView();
