import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { removeProduct } from "@/features/user/userSlice";
import React from "react";
import { useAppDispatch } from "@/redux/hooks";

export type RemoveButtonProps = {
  itemId: string | string[];
};

export default function RemoveButton({ itemId }: RemoveButtonProps) {
  const dispatch = useAppDispatch();
  function onRemove() {
    dispatch(removeProduct(itemId));
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Button color="secondary" variant="text" onClick={onRemove}>
        Remove
      </Button>
    </Box>
  );
}
