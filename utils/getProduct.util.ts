import axios from "axios";
import routes from "./routes";

async function getProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}` + routes.api.products
    );

    return products;
  } catch (error) {
    console.log(error);
  }
}

export default getProducts;
