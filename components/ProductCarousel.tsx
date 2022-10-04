import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@/components/Link";
import { Product, ProductCategory } from "@/utils/types";
import React from "react";
import routes from "@/utils/routes";
import ProductCard from "./ProductCard";

interface Props {
  title: string;
  products: Product[];
  category: ProductCategory;
}

export default function ProductCarousel(props: Props) {
  const { title, products, category } = props;
  if (products.length === 0) return <div></div>;

  const Title = () => (
    <Link href={routes.category(category)}>
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
    </Link>
  );

  const CategoryLink = () => (
    <Link
      href={routes.category(category)}
      sx={{
        verticalAlign: "baseline",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{"See all"}</Typography>
      <NavigateNextIcon />
    </Link>
  );

  return (
    <Box mt={10}>
      <Stack direction="row" justifyContent="space-between">
        <Title />
        <CategoryLink />
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          overflowX: "scroll",
          mr: 1,
          py: 2,
        }}
      >
        {products
          ? products.map((product, key) => (
              <ProductCard key={key} {...{ product }} />
            ))
          : []}
      </Stack>
    </Box>
  );
}
