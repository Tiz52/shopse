import {ShopseLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {seedData} from "../../database";

const ClothingPage = () => {
  const products = seedData.products.filter(
    (product) => product.category === "clothing",
  );

  return (
    <ShopseLayout title="Shopse - Clothing" pageDescription="Shopse clothing">
      <CategorySection products={products} category="clothing" />
    </ShopseLayout>
  );
};
export default ClothingPage;
