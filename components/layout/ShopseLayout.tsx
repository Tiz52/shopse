import {FC} from "react";
import {Header, Meta} from ".";

interface Props {
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
  imgUrl?: string;
}

export const ShopseLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imgUrl,
}) => {
  return (
    <>
      <Meta title={title} pageDescription={pageDescription} imgUrl={imgUrl} />
      <div>
        <Header />
        <main className="mx-auto pt-[72px] max-w-7xl">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};
