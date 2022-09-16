import axios from "axios";
import routes from "./routes";

async function getProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(`${process.env.HOST}${routes.products}`);
    return products;
  } catch (error) {
    if (error) {
      const {
        data: { products },
      } = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product`);

      return products;
    }
  }
}

export default getProducts;
