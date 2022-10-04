const routes = {
  product: (id: string) => `/product/${id}`,
  category: (query: string) => `/category/${query}`,
  cart: "/cart",
  checkout: "/checkout",
  register: "/register",
  login: `/user/login`,
  categories: (query: string = "") => `/products/category/${query}`,
  api: {
    products: "/products",
    product: (id: string = "") => `/products/${id}`,
  },
};

export default routes;
