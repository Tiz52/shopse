import {useRouter} from "next/router";
import {FC} from "react";
import {Header, Meta} from ".";

interface Props {
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
  imgUrl?: string;
  width?: string;
}

export const ShopseLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imgUrl,
  width
}) => {
  const router = useRouter();


  const layoutWidth = width ? width : "max-w-[1440px]";

  return (
    <>
      <Meta title={title} pageDescription={pageDescription} imgUrl={imgUrl} />
      <div>
        <Header />
        <main className={layoutWidth + " mx-auto"}>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};
