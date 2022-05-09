import {ShopseLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {FullScreenLoading} from "../../components/ui";
import {useProducts} from "../../hooks";

const ClothingPage = () => {
  const {products, isLoading} = useProducts("/products/?gender=kid");
  return (
    <ShopseLayout title="Shopse - Kid" pageDescription="Shopse kid">
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <CategorySection products={products} category="Niños" />
      )}
    </ShopseLayout>
  );
};
export default ClothingPage;
