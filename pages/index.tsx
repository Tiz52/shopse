import type {NextPage} from "next";
import {PageLayout} from "../components/layout";
import {HeroSection} from "../components/sections";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HeroSection />
    </PageLayout>
  );
};

export default Home;
