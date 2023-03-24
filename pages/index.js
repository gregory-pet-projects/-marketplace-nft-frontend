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
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
} from "@/components/componentsIndex";
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Latest Auidio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <Title
        heading="Filter by collection "
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Collection />
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

      <FollowerTab />
      <Title
        heading={"Explore NFTs video"}
        paragraph={"Click on play icon and enjoy NFTs videos"}
      />
      <Slider />

      <Subscribe />
      <Brand />
    </div>
  );
};
export default Home;
