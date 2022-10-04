import { Product } from "@/utils/types";

function formatProductPrice(product: Product) {
  return Number(product.price).toFixed(2);
}
export default formatProductPrice;
