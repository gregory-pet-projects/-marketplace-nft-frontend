import Style from "../styles/index.module.css";
import {
  BigNFTSilder,
  HeroSection,
  Service,
  Subscribe,
} from "@/components/componentsIndex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Subscribe />
    </div>
  );
};
export default Home;
