import View from "./View";

class PaginationView extends View {
  _container = document.querySelector(".pagination");

  addPaginationHandler(handler) {
    this._container.addEventListener("click", function (e) {
      const btn = e.target.closest(".pagination__btn");

      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      console.log(gotoPage);

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    console.log(currentPage);

    const numPages = Math.ceil(
      this._data.products.length / this._data.resultPerPage
    );

    let html = "";
    for (let i = 1; i <= numPages; i++) {
      html += `<button class = "pagination__btn" data-goto = ${i}> ${i} </button>`;
    }

    if (numPages < 1) return ``;
    return html;
  }
}

export default new PaginationView();
