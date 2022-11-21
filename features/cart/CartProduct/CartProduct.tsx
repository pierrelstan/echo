import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FlexCol, FlexRow } from "@/components/Flexbox";
import Link from "@/components/Link";
import { changeProductQuantity } from "@/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import routes from "@/utils/routes";
import formatProductPrice from "@/utils/formatPrices";
import RemoveButton from "@/components/Forms/Buttons/RemoveButton";
import QuantitySelect from "@/components/Forms/Fields/QuantitySelect";
import Image from "./Image";
import { CartProductData } from "@/utils/types";

interface Props {
  product: CartProductData;
}

export default function CartProduct({ product }: Props) {
  const dispatch = useAppDispatch();
  const { quantity, id, title, image } = product;
  const itemLink = routes.product(id);

  function onChangeQuantity(newQuantity: number) {
    dispatch(changeProductQuantity({ ...product, quantity: newQuantity }));
  }

  const Name = () => (
    <Link href={itemLink}>
      <Typography variant="h5">{title}</Typography>
    </Link>
  );

  const Price = () => (
    <Typography sx={{ mt: 1, mr: 2 }} variant="subtitle1">
      {formatProductPrice(product)}
    </Typography>
  );

  return (
    <FlexRow
      sx={{
        p: 1,
      }}
    >
      <Image href={itemLink} image={image} />
      <FlexCol grow sx={{ height: "100%", justifyContent: "space-between" }}>
        <FlexRow grow wrap>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              mr: 2,
              mb: 1,
            }}
          >
            <Name />
          </Stack>
          <FlexRow>
            <QuantitySelect quantity={quantity} onChange={onChangeQuantity} />
            <Price />
          </FlexRow>
        </FlexRow>
        <RemoveButton itemId={id} />
      </FlexCol>
    </FlexRow>
  );
}
