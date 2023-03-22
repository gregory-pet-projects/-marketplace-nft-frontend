import Style from "../styles/index.module.css";
import {
  BigNFTSilder,
  HeroSection,
  Service,
  Subscribe,
  Title,
} from "@/components/componentsIndex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Subscribe />
      <Title
        heading={"Browse by category"}
        paragraph={"Explore the NFTs in the most featured categories."}
      />
    </div>
  );
};
export default Home;
