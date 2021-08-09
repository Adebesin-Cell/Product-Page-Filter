const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const productList = document.querySelector(".product__list");

const products = [
  {
    name: "Black Hoodie",
    price: 280,
    category: "clothes",
    img: "img/hoodie-1.jpg",
  },
  {
    name: "White Hoodie",
    price: 300,
    category: "clothes",
    img: "img/hoodie-2.jpg",
  },
  {
    name: "Night Hoodie",
    price: 450,
    category: "clothes",
    img: "img/hoodie-3.jpg",
  },
  {
    name: "Black Lappy",
    price: 1500,
    category: "Computing and Accessories",
    img: "img/computer-1.jpg",
  },
  {
    name: "Core Lappy",
    price: 1500,
    category: "Computing and Accessories",
    img: "img/computer-2.jpg",
  },
  {
    name: "Desktop Computer & Mini Laptop set",
    price: 15000,
    category: "Computing and Accessories",
    img: "img/computer-3.jpg",
  },
  {
    name: "3 Desktop Set",
    price: 20000,
    category: "Computing and Accessories",
    img: "img/computer-4.jpg",
  },
  {
    name: "Apple Laptop, HD Desktop computer",
    price: 30000,
    category: "Computing and Accessories",
    img: "img/computer-5.jpg",
  },
  {
    name: "Shogee Sneakers",
    price: 4500,
    category: "Clothes Shoes",
    img: "img/sneaker-1.jpg",
  },
  {
    name: "Badass Watch",
    price: 7800,
    category: "watches",
    img: "img/watch-1.jpg",
  },
];

const Productapp = function (text) {
  filterProducts(text, products);
};

const renderProducts = function (productsArr) {
  clearList();
  productsArr.forEach((item, i) => {
    const html = `
    <div class="product__item">
      <div class="product__card">
        <div class="product__image-box">
          <img
            src=${item.img}
            alt=${item.name}
            class="product__image"
          />
        </div>
          <div class="product__detail">
            <p class="product__name">${item.name}</p>
            <p class="product__price">$${item.price}</p>
          </div>
      </div>
    </div> `;

    productList.insertAdjacentHTML("beforeend", html);
  });
};

const filterProducts = function (text, productsArr) {
  const item = productsArr.filter(function (product) {
    return product.name.toLowerCase().includes(text.toLowerCase());
  });
  renderProducts(item);
};

const clearList = function () {
  input.focus();
  productList.innerHTML = "";
};

renderProducts(products);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();

  if (text !== "") {
    Productapp(text);
  } else {
    alert("No item to search");
  }
});

input.addEventListener("keyup", function (e) {
  const text = input.value.trim();
  Productapp(text);
});

const filter = document.querySelector(".filter");

filter.addEventListener("click", function (e) {
  input.blur();
  if (!e.target.classList.contains("filter__btn")) return;

  const { category } = e.target.dataset;

  let item;

  if (category === "all") {
    item = products.filter(function (product) {
      return product;
    });
  }

  if (category === "clothes") {
    item = products.filter(function (product) {
      return product.category.toLowerCase().includes("clothes");
    });
  }

  if (category === "watches") {
    item = products.filter(function (product) {
      return product.category.toLowerCase().includes("watches");
    });
  }

  if (category === "computers") {
    item = products.filter(function (product) {
      return product.category.toLowerCase().includes("computing");
    });
  }
  if (category === "shoes") {
    item = products.filter(function (product) {
      return product.category.toLowerCase().includes("shoes");
    });
  }
  renderProducts(item);
});
