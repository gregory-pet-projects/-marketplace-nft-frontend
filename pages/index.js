import Style from "../styles/index.module.css";
import {
  BigNFTSilder,
  HeroSection,
  Service,
} from "@/components/componentsIndex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
    </div>
  );
};
export default Home;
