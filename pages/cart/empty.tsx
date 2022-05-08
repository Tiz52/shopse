import {ShopseLayout} from "../../components/layout";
import {CartEmptySection} from "../../components/sections";

const EmptyCartPage = () => {
  return (
    <ShopseLayout
      title="Carrito vació"
      pageDescription="No hay artículos en el carrito de compras"
    >
      <CartEmptySection />
    </ShopseLayout>
  );
};
export default EmptyCartPage;
