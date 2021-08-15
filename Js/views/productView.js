import View from "./View";
import previewView from "./previewView";

class ProductView extends View {
  _container = document.querySelector(".product__list");

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ProductView();
