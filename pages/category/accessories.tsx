import {ShopseLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const AccessoriesPage = () => {
  const products = seedData.products.filter(
    (product) => product.category === "accessories",
  );

  return (
    <ShopseLayout
      title="Shopse - Accessories"
      pageDescription="Shopse accessories"
    >
      <CategorySection products={products} category="accessories" />
    </ShopseLayout>
  );
};
export default AccessoriesPage;
