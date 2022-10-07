const routes = {
  product: (id: string) => `/product/${id}`,
  category: (id: string) => `/category/${id}`,
  cart: "/cart",
  checkout: "/checkout",
  register: "/register",
  login: `/user/login`,
  categories: (query: string | string[] = "") => {
    return `/products/category/${query}`;
  },

  api: {
    products: "/products",
    product: (id: string = "") => `/products/${id}`,
  },
};

export default routes;
