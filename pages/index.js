import Style from "../styles/index.module.css";
import {
  BigNftSlider,
  HeroSection,
  Service,
} from "@/components/componentsIndex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNftSlider />
    </div>
  );
};
export default Home;
