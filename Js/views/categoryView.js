import View from "./View";

class CategoryView extends View {
  _container = document.querySelector(".filter");

  addCategoryHandler(handler) {
    this._container.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter__btn");

      if (!btn) return;

      const { category } = btn.dataset;

      handler(category);
    });
  }
}

export default new CategoryView();
