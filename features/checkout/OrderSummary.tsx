import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { selectIsCart } from "../user/userSlice";
import React from "react";
import { useAppSelector } from "redux/hooks";
import { getCartTotal } from "@/utils/getCartTotalPrice.util";
import OrderReviewItem from "@/features/checkout/OrderReviewItem";

export default function OrderSummary() {
  const cart = useAppSelector(selectIsCart);

  const CartItems = () => (
    <React.Fragment>
      {cart.map((product, key) => {
        return <OrderReviewItem item={product} key={key} />;
      })}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <CartItems />
        <ListItem
          sx={{
            py: 1,
          }}
        >
          <ListItemText primary="Total" />
          <Typography
            sx={{
              fontWeight: 700,
            }}
            variant="subtitle1"
          >
            {getCartTotal(cart)}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
