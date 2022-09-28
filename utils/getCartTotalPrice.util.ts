export function getCartTotal(cart: any[]) {
  return cart.reduce((total, x) => total + x.price * x.quantity, 0).toFixed(2);
}
