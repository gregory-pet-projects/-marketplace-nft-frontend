import Style from "../styles/index.module.css";
import {
  BigNFTSilder,
  Category,
  Filter,
  HeroSection,
  Service,
  Subscribe,
  Title,
  NFTCard,
} from "@/components/componentsIndex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
      />
      <Filter />
      <NFTCard />

      <Title
        heading={"Browse by category"}
        paragraph={"Explore the NFTs in the most featured categories."}
      />
      <Category />

      <Subscribe />
    </div>
  );
};
export default Home;
