import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmptyCart from "@/features/cart/EmptyCart";
import { FlexCol } from "@/components/Flexbox";
import CheckoutButton from "features/checkout/CheckoutButton";
import React from "react";
import { getCartTotal } from "@/utils/getCartTotalPrice.util";
import CartProduct from "@/features/cart/CartProduct/CartProduct";
import { useAppSelector } from "redux/hooks";
import { selectIsCart } from "@/features/user/userSlice";

export default function CartPage() {
  const cart = useAppSelector(selectIsCart);

  const cartTotal = getCartTotal(cart);

  const Subtotal = () => (
    <Typography
      variant="h6"
      sx={{
        mb: 2,
      }}
    >{`Subtotal: $${cartTotal}`}</Typography>
  );

  if (cart.length === 0) return <EmptyCart />;

  const CartItems = () => (
    <Stack spacing={3} divider={<Divider flexItem />}>
      {cart.map((product, key) => (
        <CartProduct product={product} key={key} />
      ))}
    </Stack>
  );

  return (
    <>
      <Container maxWidth="md">
        <Stack
          spacing={4}
          direction="column"
          alignItems="center"
          sx={{
            mt: 2,
            mb: 4,
          }}
        >
          <Typography variant="h4" component="h1">
            Shopping Cart
          </Typography>
          <CartItems />
          <FlexCol
            sx={{
              width: "100%",
            }}
            align="end"
          >
            <Subtotal />
            <CheckoutButton disabled={cart.length === 0} />
          </FlexCol>
        </Stack>
      </Container>
    </>
  );
}
