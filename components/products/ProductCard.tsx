import Image from "next/image";
import {FC} from "react";
import Link from "next/link";
import {IProduct} from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({product}) => {
  return (
    <div className="opacity-1 card">
      <Link href={`/product/${product.slug}`} passHref prefetch={false}>
        <a>
          <Image
            className="hover:opacity-90"
            src={`/products/${product.images[0]}`}
            width={300}
            height={300}
            layout="responsive"
            objectFit="cover"
            alt={product.title}
          />
          <div className="flex flex-col mt-4 text-sm md:gap-2 md:text-xl">
            <span className="">{product.title}</span>
            <span className="">${product.price}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};
