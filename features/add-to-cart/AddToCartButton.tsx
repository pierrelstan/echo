import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import React from "react";

export default function AddToCartButton() {
  return (
    <Button
      variant="outlined"
      sx={{
        maxWidth: 320,
        mt: 2,
      }}
      startIcon={<AddShoppingCartIcon />}
      type="submit"
    >
      Add To Cart
    </Button>
  );
}
