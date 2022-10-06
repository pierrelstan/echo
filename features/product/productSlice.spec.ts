import { makeStore } from "@/redux/store";
import { dummyProductCategory } from "@/utils/test.utils";

const store = makeStore();

describe("Products redux state tests", () => {
  test("product/getProductCategory/pending", () => {
    store.dispatch({ type: "product/getProductCategory/pending" });

    const { loading } = store.getState().product;
    expect(loading).toBe("pending");
  });

  test("product/getProductCategory/rejected", () => {
    store.dispatch({
      type: "product/getProductCategory/rejected",
      error: "",
    });
    const { loading } = store.getState().product;
    expect(loading).toBe("rejected");
  });

  test("product/getProductCategory/fulfilled", () => {
    store.dispatch({
      type: "product/getProductCategory/fulfilled",
      payload: dummyProductCategory.product.products,
    });

    const { loading, products } = store.getState().product;
    expect(loading).toBe("succeeded");
    expect(products).toBe(dummyProductCategory.product.products);
  });
});
