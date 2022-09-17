import axios from "axios";
import routes from "./routes";

async function getProductById(id: string) {
  try {
    const {
      data: { product },
    } = await axios.get(`${process.env.HOST}/products/get/${id}`);
    return product;
  } catch (error) {
    if (error) {
      const {
        data: { products },
      } = await axios.get(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`
      );
      return products.filter((product: any) => {
        if (product._id == id) {
          return product;
        }
      });
    }
  }
}

export default getProductById;
