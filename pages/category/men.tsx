import {ShopseLayout} from "../../components/layout";
import {CategorySection} from "../../components/sections";
import {FullScreenLoading} from "../../components/ui";
import {useProducts} from "../../hooks";

const MenPage = () => {
  const {products, isLoading} = useProducts("/products/?gender=men");
  return (
    <ShopseLayout title="Shopse - Men" pageDescription="Shopse Men">
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <CategorySection products={products} category="Hombres" />
      )}
    </ShopseLayout>
  );
};
export default MenPage;
