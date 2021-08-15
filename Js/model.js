export const data = {
  search: {
    page: 1,
    resultPerPage: 10,
    products: [
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
        category: "Shoes",
        img: "img/sneaker-1.jpg",
      },
      {
        name: "Badass Watch",
        price: 7800,
        category: "watches",
        img: "img/watch-1.jpg",
      },
      {
        name: "Leather Watch",
        price: 3800,
        category: "watches",
        img: "img/watch-2.jpg",
      },
      {
        name: "Brown Leather Watch",
        price: 2500,
        category: "watches",
        img: "img/watch-3.jpg",
      },
    ],
  },
};

export const filterProducts = function () {};

export const renderPageResults = function (page = data.search.page) {
  data.search.page = page;
  const start = (page - 1) * data.search.resultPerPage;

  const end = page * data.search.resultPerPage;
};
