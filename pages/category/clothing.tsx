import {PageLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const ClothingPage = () => {
  const products = seedData.products.filter(
    (product) => product.category === "clothing",
  );

  return (
    <PageLayout>
      <CategorySection products={products} category="clothing" />
    </PageLayout>
  );
};
export default ClothingPage;
