import HeroSection from "@/components/common/Hero/HeroSection";
import { Categories, Product, ProductCategory } from "@/utils/types";
import getProducts from "@/utils/getProduct.util";
import ProductCarousel from "@/components/ProductCarousel";
import Header from "./Head";

type HomepageProps = {
  sortedItems: SortedItems[];
};

export default function HomePage({ sortedItems }: HomepageProps) {
  return (
    <div>
      <Header />
      <HeroSection />

      {sortedItems
        ? sortedItems.map(({ category, products }) => (
            <ProductCarousel
              title={category}
              key={category}
              products={products}
              category={category}
            />
          ))
        : []}
    </div>
  );
}
export async function getServerSideProps() {
  const products = await getProducts();
  const sortedItems: SortedItems[] = Categories.map((category) => ({
    category,
    products: products.filter((x: any) => x.category === category),
  }));

  const props: HomepageProps = { sortedItems };

  return {
    props,
  };
}

type SortedItems = {
  category: ProductCategory;
  products: Product[];
};
