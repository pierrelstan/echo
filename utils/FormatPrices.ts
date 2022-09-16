import { Product } from "types/types";

function formatItemPrice(product: Product) {
  return `$${product.price.toFixed(2)}`;
}
export default formatItemPrice;
