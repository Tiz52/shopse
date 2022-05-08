import type {NextPage} from "next";
import {ShopseLayout} from "../components/layout";
import {CategorySection} from "../components/sections";
import { seedData } from "../database";





const Home: NextPage = () => {

  const products = seedData.products.filter(
    (product) => product.category === "clothing",
  );

  
  return (
    <ShopseLayout title="Shopse." pageDescription="Shopse Page">
      {/* <HeroSection /> */}
      <CategorySection category="Todos los productos"  products={products}/>
    </ShopseLayout>
  );
};

export default Home;
