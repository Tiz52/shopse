import {ShopseLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const ClothingPage = () => {
  const products = seedData.products.filter(
    (product) => product.gender === "women",
  );

  return (
    <ShopseLayout title="Shopse - Women" pageDescription="Shopse women">
      <CategorySection products={products} category="women" />
    </ShopseLayout>
  );
};
export default ClothingPage;
