import View from "./View";

class PreviewView extends View {
  _container = "";

  _generateMarkup() {
    return `
        <div class="product__item">
            <div class="product__card">
                <div class="product__image-box">
                    <img
                    src= ${this._data.img}
                    alt="${this._data.name}"
                    class="product__image"
                    />
                </div>
                <div class="product__detail">
                    <p class="product__name">${this._data.name}</p>
                    <p class="product__price">$${this._data.price}</p>
                </div>
            </div>
        </div>
    `;
  }
}

export default new PreviewView();
