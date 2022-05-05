import {PageLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const AccessoriesPage = () => {
  const products = seedData.products.filter(
    (product) => product.category === "accessories",
  );

  return (
    <PageLayout>
      <CategorySection products={products} category="accessories" />
    </PageLayout>
  );
};
export default AccessoriesPage;