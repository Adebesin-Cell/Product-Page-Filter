import * as model from "./model";
import ProductView from "./views/productView";
import filterView from "./views/filterView";
import categoryView from "./views/categoryView";
import paginationView from "./views/paginationView";

const controlProductView = function () {
  ProductView.render(model.data.search.products);
  paginationView.render(model.data.search);
};

const controlFilter = function (data) {
  const item = model.data.search.products.filter(function (product) {
    return product.name.toLowerCase().includes(data.toLowerCase());
  });

  ProductView.render(item);
  paginationView.render(item);
};

const controlCategoryFilter = function (category) {
  let items;
  if (category === "all") {
    ProductView.render(model.data.search.products);
  }
  if (category === "watches") {
    items = model.data.search.products.filter(function (product) {
      return product.category.toLowerCase().includes("watches");
    });
    ProductView.render(items);
  }

  if (category === "computers") {
    items = model.data.search.products.filter(function (product) {
      return product.category.toLowerCase().includes("computing");
    });
    ProductView.render(items);
  }

  if (category === "shoes") {
    items = model.data.search.products.filter(function (product) {
      return product.category.toLowerCase().includes("shoes");
    });
    ProductView.render(items);
  }

  if (category === "clothes") {
    items = model.data.search.products.filter(function (product) {
      return product.category.toLowerCase().includes("clothes");
    });
    ProductView.render(items);
  }
};

const controlPagination = function (gotoPage) {
  ProductView.render(model.renderPageResults(gotoPage));

  paginationView.render(model.data.search);
};

const init = function () {
  controlProductView();
  controlPagination();

  filterView.addFilterHandler(controlFilter);
  categoryView.addCategoryHandler(controlCategoryFilter);
  paginationView.addPaginationHandler(controlPagination);
};

init();
