import Image from "next/image";
import {FC} from "react";
import {SeedProduct} from "../../database";
import Link from "next/link";
import {motion} from "framer-motion";

interface Props {
  product: SeedProduct;
}
export const ProductCard: FC<Props> = ({product}) => {
  const productCardVariant = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 20,
      },
    },
  };

  return (
    <motion.div variants={productCardVariant} className="opacity-1 card">
      <Link href={`/product/${product.slug}`} passHref>
        <a>
          <Image
            className="border-2 rounded-lg hover:opacity-90"
            src={`/products/${product.images[0]}`}
            width={300}
            height={400}
            layout="responsive"
            objectFit="cover"
            alt={product.title}
          />
          <div className="flex flex-col gap-2 mt-4 text-xl">
            <span className="text-primary">{product.title}</span>
            <span className="text-primary">${product.price}</span>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};
