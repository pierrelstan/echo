const routes = {
  index: "/",
  product: (id: string | string[]) => `/product/${id}`,
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
    product: (id: string | string[] = "") => `/products/${id}`,
  },
};

export default routes;
