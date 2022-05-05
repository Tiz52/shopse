import {useRouter} from "next/router";
import {FC} from "react";

interface Props {
  children?: React.ReactNode;
}

export const PageLayout: FC<Props> = ({children}) => {
  const router = useRouter();

  return (
    <div
      className={`${
        router.asPath.includes("product")
          ? "bg-productMobile md:bg-product"
          : "bg-black"
      }`}
    >
      {/* <Header /> */}
      <main className="pt-[72px] max-w-[1440px] mx-auto">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
