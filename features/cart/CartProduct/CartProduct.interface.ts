import { Product } from "@/utils/types";

export interface CartItem extends Product {
  id: string;
  quantity: number;
  color: string;
  size: string;
}
