import {ShopseLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {FullScreenLoading} from "../../components/ui";
import {useProducts} from "../../hooks";

const WomenPage = () => {
  const {products, isLoading} = useProducts("/products/?gender=women");

  return (
    <ShopseLayout title="Shopse - Women" pageDescription="Shopse women">
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <CategorySection products={products} category="Mujeres" />
      )}
    </ShopseLayout>
  );
};
export default WomenPage;
