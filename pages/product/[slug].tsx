import {GetStaticPaths, GetStaticProps} from "next";
import {FC} from "react";
import {PageLayout} from "../../components/layout";
import {ProductSection} from "../../components/sections";

import {seedData, SeedProduct} from "../../database";

interface Props {
  product: SeedProduct;
}
const ProductPage: FC<Props> = ({product}) => {
  return (
    <PageLayout title={product.title} pageDescription={product.description}>
      <ProductSection product={product} />
    </PageLayout>
  );
};
export default ProductPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const products = seedData.products;

  return {
    paths: products.map(({slug}) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug = ""} = params as {slug: string};

  const product = seedData.products.find((product) => product.slug === slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product,
    },
    revalidate: 86400,
  };
};
