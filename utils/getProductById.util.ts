import axios from "axios";
import routes from "./routes";

async function getProductById(id: string | string[]) {
  try {
    const {
      data: { product },
    } = await axios.get(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}` + routes.api.product(id)
    );
    return product;
  } catch (error) {
    console.log(error);
  }
}

export default getProductById;
