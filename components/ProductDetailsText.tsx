import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Product } from "../utils/types";
import { loremIpsum } from "lorem-ipsum";
import React from "react";

const ProductDetailsText = ({ product }: { product: Product }) => {
  const [Text, setText] = React.useState("");

  React.useEffect(() => {
    const description = loremIpsum({
      count: 3,
      units: "sentence",
    });

    setText(description);
  }, []);

  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        mt: { xs: 3, md: 0 },
      }}
    >
      <Typography component="h1" variant="h3">
        {product.title}
      </Typography>
      <Typography>${product.price}</Typography>
      <Divider />
      <Typography>{Text}</Typography>
    </Stack>
  );
};

export default ProductDetailsText;
