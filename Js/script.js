import * as model from "./model";
import ProductView from "./views/productView";
import filterView from "./views/filterView";
import categoryView from "./views/categoryView";

const controlProductView = function () {
  ProductView.render(model.data.search.products);
};

const controlFilter = function (data) {
  const item = model.data.search.products.filter(function (product) {
    return product.name.toLowerCase().includes(data.toLowerCase());
  });

  ProductView.render(item);
};

const controlCategoryFilter = function (category) {
  console.log(category);
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

const init = function () {
  controlProductView();

  filterView.addFilterHandler(controlFilter);

  categoryView.addCategoryHandler(controlCategoryFilter);
};

init();
