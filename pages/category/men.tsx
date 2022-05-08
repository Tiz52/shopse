import {ShopseLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const ClothingPage = () => {
  const products = seedData.products.filter(
    (product) => product.gender === "men",
  );

  return (
    <ShopseLayout title="Shopse - Men" pageDescription="Shopse Men">
      <CategorySection products={products} category="men" />
    </ShopseLayout>
  );
};
export default ClothingPage;
