import {FC} from "react";

interface Props {
  children?: React.ReactNode;
}

export const PageLayout: FC<Props> = ({children}) => {
  return (
    <>
      {/* <Header /> */}
      <main className="pt-[72px] max-w-[2000px] mx-auto">{children}</main>
      {/* <Footer /> */}
    </>
  );
};
