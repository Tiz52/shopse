import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ShopseLayout} from "../../components/layout";
import {ProductSection} from "../../components/sections";
import {dbProducts} from "../../database";
import {SeedProduct} from "../../database/seed-data";
import {IProduct} from "../../interfaces";

interface Props {
  product: IProduct;
}
const ProductPage: NextPage<Props> = ({product}) => {
  return (
    <ShopseLayout title={product.title} pageDescription={product.description}>
      <ProductSection product={product} />
    </ShopseLayout>
  );
};
export default ProductPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const products = await dbProducts.getAllProductSlugs();

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

  const product = await dbProducts.getProductBySlug(slug);

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
