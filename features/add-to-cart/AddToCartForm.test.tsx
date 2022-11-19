import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddToCartForm from "@/features/add-to-cart/AddToCartForm";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { dummyProduct } from "@/utils/test.utils";

const product = dummyProduct;

describe("CartPorduct component", () => {
  render(
    <Provider store={store}>
      <AddToCartForm product={product} />
    </Provider>
  );

  test("submit button should add item to cart", async () => {
    const submitButton = screen.getByRole("button", {
      name: /add to cart/i,
    });

    userEvent.click(submitButton);

    await waitFor(() => {
      const alertText = "Item added to cart!";
      expect(screen.getByText(alertText));
    });
  });
});
