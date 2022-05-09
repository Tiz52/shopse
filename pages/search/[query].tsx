import {GetServerSideProps, NextPage} from "next";

import {ShopseLayout} from "../../components/layout";
import {SearchSection} from "../../components/sections";
import {dbProducts} from "../../database";
import {IProduct} from "../../interfaces";

interface Props {
  products: IProduct[];
  query: string;
}

const SearchPage: NextPage<Props> = ({products, query}) => {
  return (
    <ShopseLayout title="Shopse - Search" pageDescription="Shopse Search">
      <SearchSection
        foundProducts={products.length !== 0}
        products={products}
        query={query}
      />
    </ShopseLayout>
  );
};
export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {query = ""} = params as {query: string};

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);

  return {
    props: {
      products,
      query,
    },
  };
};
