import Box from "@mui/material/Box";
import ItemAddedAlert from "@/features/add-to-cart/ItemAddedAlert";
import { addProduct } from "@/features/user/userSlice";
import { Form, Formik } from "formik";
import { Product } from "@/utils/types";
import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import AddToCartButton from "./AddToCartButton";

export type AddItemFormProps = {
  product: Product;
};

export default function AddToCartForm({ product }: AddItemFormProps) {
  const [showAlert, setShowAlert] = useState(false);

  const initialValues = {};

  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(
      addProduct({
        ...product,
        id: product._id,
        quantity: 1,
      })
    );
    setShowAlert(true);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Box
          component={Form}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <AddToCartButton />
        </Box>
      </Formik>

      <ItemAddedAlert show={showAlert} />
    </>
  );
}
