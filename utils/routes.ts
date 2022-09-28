const routes = {
  product: (id: string) => `/product/${id}`,
  category: (id: string) => `/category/${id}`,
  cart: "/cart",
  checkout: "/checkout",
  register: "/register",
  login: `/user/login`,
  api: {
    products: "/products",
    product: (id: string = "") => `/products/${id}`,
    categories: (id: string = "") => `/api/categories/${id}`,
    login: `/user/login`,
  },
};

export default routes;
