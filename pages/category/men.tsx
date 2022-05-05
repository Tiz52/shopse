import {PageLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const ClothingPage = () => {
  const products = seedData.products.filter(
    (product) => product.gender === "men",
  );

  return (
    <PageLayout title="Shopse - Men" pageDescription="Shopse Men">
      <CategorySection products={products} category="men" />
    </PageLayout>
  );
};
export default ClothingPage;
