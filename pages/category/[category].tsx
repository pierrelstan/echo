import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "components/Link";
import { Product, ProductCategory } from "@/utils/types";
import Image from "next/image";
import React from "react";
import routes from "utils/routes";
import formatProductPrices from "@/utils/formatPrices";
import getProductsCategory from "@/utils/getProductCategory";

interface CategoryPageProps {
  products: Product[];
}

export default function CategoryPage({ products }: CategoryPageProps) {
  // console.log(products);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const categoryName = products[0]?.category ?? "";
  // console.log(categoryName);
  const Title = () => (
    <Typography component="h2" variant="h4">
      {categoryName}
    </Typography>
  );

  function ItemList() {
    return (
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageList
            variant="standard"
            sx={{ width: "100%" }}
            gap={12}
            cols={lg ? 4 : md ? 3 : sm ? 3 : 2}
            rowHeight={"auto"}
          >
            {products.map((product) => (
              <ImageListItem key={product._id}>
                <Link href={routes.product(product._id)}>
                  <Box
                    sx={{
                      minHeight: {
                        xs: 150,
                        sm: 200,
                        md: 250,
                      },
                      position: "relative",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      placeholder="empty"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Link>
                <ImageListItemBar
                  title={<Typography variant="h5">{product.title}</Typography>}
                  subtitle={
                    <Typography>{formatProductPrices(product)}</Typography>
                  }
                  position="bottom"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title />
      <ItemList />
    </Box>
  );
}

interface Context {
  params: { category: string };
}
export const getServerSideProps = async ({ params }: Context) => {
  const { category } = params;
  const { products } = await getProductsCategory(category as ProductCategory);

  const props = { products: products };
  return { props };
};
