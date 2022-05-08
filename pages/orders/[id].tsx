import {ShopseLayout} from "../../components/layout";
import {OrderSection} from "../../components/sections";

const OrderPage = () => {
  return (
    <ShopseLayout title="Orden: 12345" pageDescription="Resumen de la orden">
      <OrderSection />
    </ShopseLayout>
  );
};
export default OrderPage;
