import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@/components/Link";
import { Product } from "../utils/types";
import React from "react";
import routes from "@/utils/routes";
import Image from "next/image";
import Box from "@mui/material/Box";
import formatProductPrices from "@/utils/formatPrices";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ product }: { product: Product }) => {
  const { title, image } = product;

  const Title = () => (
    <Typography
      variant="h6"
      sx={{
        fontSize: "18px",
      }}
    >
      {title}
    </Typography>
  );
  const Price = () => <Typography>{formatProductPrices(product)}</Typography>;

  const Thumbnail = () => (
    <Box
      sx={{
        position: "relative",
        flexGrow: 1,
      }}
    >
      <Image src={image} layout="fill" alt={title} />
    </Box>
  );
  const Rating = () => (
    <Box>
      <StarIcon sx={{ fontSize: 16 }} />
      <StarIcon sx={{ fontSize: 16 }} />
      <StarIcon sx={{ fontSize: 16 }} />
      <StarIcon sx={{ fontSize: 16 }} />
      <StarIcon sx={{ fontSize: 16 }} />
    </Box>
  );
  const Details = () => (
    <Stack direction="column">
      <Title />
      <Rating />
      <Price />
    </Stack>
  );

  return (
    <Link
      href={routes.product(product._id)}
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          minWidth: {
            xs: 150,
            sm: 200,
            md: 250,
          },
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
          src={image}
          alt={title}
          placeholder="empty"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Thumbnail />
      <Details />
    </Link>
  );
};

export default ProductCard;
