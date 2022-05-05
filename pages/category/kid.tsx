import {PageLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const ClothingPage = () => {
  const products = seedData.products.filter(
    (product) => product.gender === "kid",
  );

  return (
    <PageLayout title="Shopse - Kid" pageDescription="Shopse kid">
      <CategorySection products={products} category="kid" />
    </PageLayout>
  );
};
export default ClothingPage;
