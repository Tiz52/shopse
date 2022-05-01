import {SearchProducts, SideRightProducts} from "../ui";

export const HeroSection = () => {
  return (
    <div className="grid grid-cols-3 h-[calc(100vh-72px)]">
      <div>SideLeft</div>
      <SearchProducts />
      <SideRightProducts />
    </div>
  );
};
