import {PageLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const ClothingPage = () => {
  const products = seedData.products.filter(
    (product) => product.gender === "men",
  );

  return (
    <PageLayout>
      <CategorySection products={products} category="men" />
    </PageLayout>
  );
};
export default ClothingPage;
