interface Product {
  _id: string;
  title: string;
  image: string;
  price: string;
  category: string;
  userId: any;
}

// _id: string; title: string; category: string; image: string; price: string;

type ProductCategory = "Xbox" | "Ps5" | "Pc";

export const Categories: ProductCategory[] = ["Xbox", "Ps5", "Pc"];

type CartProductData = Product & {
  id: string | string[];
  quantity: number;
};

interface CartProduct extends Product {
  id: string | string[];
  quantity: number;
}

export type { Product, CartProductData, ProductCategory, CartProduct };
