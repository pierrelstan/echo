const routes = {
  products: "/products/get/",
  product: (id: string) => `/product/${id}`,
  category: (id: string) => `/category/${id}`,
  cart: "/cart",
  checkout: "/checkout",
  login: "/login",
  register: "/register",
  api: {
    items: (id: string = "") => `/api/items/${id}`,
    categories: (id: string = "") => `/api/categories/${id}`,
    login: "/api/login",
  },
};

export default routes;
