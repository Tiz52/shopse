import type {NextPage} from "next";

import {ShopseLayout} from "../components/layout";
import {HeroSection} from "../components/sections";
import {FullScreenLoading} from "../components/ui";
import {useProducts} from "../hooks";

const Home: NextPage = () => {
  const {products, isLoading} = useProducts("/products");

  return (
    <ShopseLayout title="Shopse." pageDescription="Shopse Page">
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <HeroSection fullProducts={products} />
      )}
    </ShopseLayout>
  );
};

export default Home;
