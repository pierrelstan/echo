import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useRouter } from "next/router";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@/components/Link";
import Image from "next/image";
import React, { useEffect } from "react";
import routes from "@/utils/routes";
import formatProductPrices from "@/utils/formatPrices";
import {
  getProductsCategoryAsync,
  selectProducts,
} from "@/features/product/productSlice";
import Loading from "@/components/Loading";

export default function CategoryPage() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const router = useRouter();
  const { category } = router.query;

  const productState = useAppSelector(selectProducts);

  const loading = productState.loading;
  const products = productState.products;

  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const categoryName = products[0]?.category ?? "";

  useEffect(() => {
    dispatch(getProductsCategoryAsync(category));
  }, [category]);

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
  if (loading === "pending") {
    return <Loading />;
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
