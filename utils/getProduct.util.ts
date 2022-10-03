import axios from "axios";
import routes from "./routes";

async function getProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}` + routes.api.products
    );
    // console.log(process.env.NEXT_PUBLIC_URL);
    return products;
  } catch (error) {
    console.log(error);
  }
}

export default getProducts;
