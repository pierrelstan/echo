interface Product {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  userId: any;
}

export type ProductCategory = "Xbox" | "Ps5" | "Pc";

export const Categories: ProductCategory[] = ["Xbox", "Ps5", "Pc"];

export type { Product };
