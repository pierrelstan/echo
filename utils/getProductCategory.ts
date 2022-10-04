import axios from "axios";
import routes from "./routes";

async function getProductsCategory(category) {
  try {
    const { data: products } = await axios.get(
      `${process.env.NEXT_PUBLIC_DATABASE_URL}` +
        routes.categories(category.toString())
    );
    return products;
  } catch (error) {
    console.log(error);
  }
}

export default getProductsCategory;
