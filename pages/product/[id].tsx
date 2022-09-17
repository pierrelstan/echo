import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import ImageGallery from "features/image-gallery/ImageGallery";
import ProductDetailsText from "../../features/product/ProductDetailsText";
import { Product } from "../../types/types";
import { GetServerSideProps } from "next";
import React from "react";
import getProductById from "utils/getProductById.util";
import Image from "next/image";

type Params = {
  id: string;
};

interface Props {
  product: Product;
}

export default function ProductPage({ product }: Props) {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          py: 4,
          flexGrow: 1,
        }}
        spacing={5}
      >
        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={product.image}
            alt="image-product"
            width={300}
            height={300}
          />
        </Grid>
        <Grid item md={7} xs={12}>
          <ProductDetailsText product={product} />
        </Grid>
      </Grid>
    </Container>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as Params;

  const data = await getProductById(id);
  const product = Object.assign({}, ...data);

  if (!product) return { notFound: true };
  return { props: { product } };
};
