import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { CartProductData } from "@/utils/types";
import React from "react";
import getProductById from "@/utils/getProductById.util";
import { GetServerSideProps } from "next";

export type OrderReviewItemProps = { item: CartProductData };

export default function OrderReviewItem({ item }: OrderReviewItemProps) {
  const { quantity, title, price } = item;

  const fixedPrice = price;

  return (
    <ListItem
      sx={{
        py: 1,
      }}
    >
      <ListItemText primary={title} secondary={title} />
      <Typography variant="body2">{`${quantity} x ${fixedPrice}`}</Typography>
    </ListItem>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  const data = await getProductById(id);
  const product = data;

  if (!product) return { notFound: true };
  return { props: { product } };
};
