export default class View {
  _data;

  render(data, render = true) {
    this._data = data;

    if (!data) return;

    const markup = this._generateMarkup();
    // this._clear();

    if (!render) return markup;

    this._container.innerHTML = "";

    this._container.insertAdjacentHTML("afterbegin", markup);
  }
}
